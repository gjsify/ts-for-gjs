import TemplateProcessor from './template-processor'
import { Transformation, C_TYPE_MAP, FULL_TYPE_MAP, POD_TYPE_MAP, POD_TYPE_MAP_ARRAY } from './transformation'
import { Logger } from './logger'
import { Utils } from './utils'

import {
    GirRepository,
    GirNamespace,
    GirAlias,
    GirEnumeration,
    GirFunction,
    GirClass,
    GirVariable,
    GirArray,
    GirType,
    GirInclude,
    GirParameter,
    TypeArraySuffix,
    TypeNullableSuffix,
    TypeSuffix,
    SymTable,
    GirConstruct,
    InheritanceTable,
    ParsedGir,
    GenerateConfig,
    FunctionDescription,
    FunctionMap,
    ClassDetails,
} from './types'

/**
 * In gjs all classes haben einen static name property but the classes listed here already have a static name property
 */
export const STATIC_NAME_ALREADY_EXISTS = ['GMime.Charset', 'Camel.StoreInfo']

export class GirModule {
    /**
     * E.g. 'Gtk'
     */
    name: string
    /**
     * E.g. '3.0'
     */
    version = '0.0'
    /**
     * E.g. 'Gtk-3.0'
     */
    packageName: string
    /**
     * E.g. 'Gtk30'
     * Is used in the generated index.d.ts, for example: `import * as Gtk30 from "./Gtk-3.0";`
     */
    importName: string
    dependencies: string[] = []
    transitiveDependencies: string[] = []
    repo: GirRepository
    ns: GirNamespace = { $: { name: '', version: '' } }
    /**
     * Used to find namespaces that are used in other modules
     */
    symTable: SymTable = {}
    patch: { [key: string]: string[] } = {}
    transformation: Transformation
    extends?: string
    log: Logger

    /**
     * To prevent constants from being exported twice, the names already exported are saved here for comparison.
     * Please note: Such a case is only known for Zeitgeist-2.0 with the constant "ATTACHMENT"
     */
    constNames: { [varName: string]: 1 } = {}

    private warnMethodPropClash = false

    constructor(xml: ParsedGir, private readonly config: GenerateConfig) {
        this.repo = xml.repository

        if (!this.repo.namespace || !this.repo.namespace.length) {
            throw new Error(`Namespace not found!`)
        }
        if (this.repo.include) {
            this.dependencies = this.loadDependencies(this.repo.include)
        }
        this.ns = this.repo.namespace[0]
        this.name = this.ns.$.name
        this.version = this.ns.$.version
        this.packageName = `${this.name}-${this.version}`
        this.transformation = new Transformation(this.packageName, config)
        this.log = new Logger(config.environment, config.verbose, this.packageName || 'GirModule')
        this.importName = this.transformation.transformModuleNamespaceName(this.packageName)
    }

    private loadDependencies(girInclude: GirInclude[]): string[] {
        const dependencies: string[] = []
        for (const i of girInclude) {
            dependencies.unshift(`${i.$.name}-${i.$.version}`)
        }
        return dependencies
    }

    private annotateFunctionArguments(girFunc: GirFunction): void {
        const funcName = girFunc._fullSymName
        if (girFunc.parameters) {
            for (const girParam of girFunc.parameters) {
                if (girParam.parameter) {
                    for (const girVar of girParam.parameter) {
                        girVar._module = this
                        if (girVar.$ && girVar.$.name) {
                            girVar._fullSymName = `${funcName}.${girVar.$.name}`
                        }
                    }
                }
            }
        }
    }

    private annotateFunctionReturn(girFunc: GirFunction): void {
        const retVals: GirVariable[] | undefined = girFunc['return-value']
        if (retVals)
            for (const retVal of retVals) {
                retVal._module = this
                if (retVal.$ && retVal.$.name) {
                    retVal._fullSymName = `${girFunc._fullSymName}.${retVal.$.name}`
                }
            }
    }

    private annotateFunctions(girClass: GirClass | null, funcs: GirFunction[]): void {
        if (funcs)
            for (const func of funcs) {
                if (!func || !func.$) continue
                const nsName = girClass ? girClass._fullSymName : this.name
                func._fullSymName = `${nsName}.${func.$.name}`
                func._module = this
                this.annotateFunctionArguments(func)
                this.annotateFunctionReturn(func)
            }
    }

    private annotateVariables(girClass: GirClass | null, girVars?: GirVariable[]): void {
        if (girVars)
            for (const girVar of girVars) {
                const nsName = girClass ? girClass._fullSymName : this.name
                girVar._module = this
                if (girVar.$ && girVar.$.name) {
                    girVar._fullSymName = `${nsName}.${girVar.$.name}`
                }
            }
    }

    private loadTypesInternal(dict: SymTable, girConstructs?: GirConstruct[]): void {
        if (girConstructs) {
            for (const girConstruct of girConstructs) {
                if (girConstruct?.$) {
                    if ((girConstruct as GirVariable | GirFunction).$.introspectable) {
                        if (!this.girBool((girConstruct as GirVariable | GirFunction).$.introspectable, true)) continue
                    }
                    const symName = `${this.name}.${girConstruct.$.name}`
                    if (dict[symName]) {
                        this.log.warn(`Duplicate symbol: ${symName}`)
                        debugger
                    }

                    girConstruct._module = this
                    girConstruct._fullSymName = symName
                    dict[symName] = girConstruct
                }
            }
        }
    }

    public loadTypes(dict: SymTable): void {
        this.loadTypesInternal(dict, this.ns.bitfield)
        this.loadTypesInternal(dict, this.ns.callback)
        this.loadTypesInternal(dict, this.ns.class)
        this.loadTypesInternal(dict, this.ns.constant)
        this.loadTypesInternal(dict, this.ns.enumeration)
        this.loadTypesInternal(dict, this.ns.function)
        this.loadTypesInternal(dict, this.ns.interface)
        this.loadTypesInternal(dict, this.ns.record)
        this.loadTypesInternal(dict, this.ns.union)
        this.loadTypesInternal(dict, this.ns.alias)

        if (this.ns.callback) for (const func of this.ns.callback) this.annotateFunctionArguments(func)

        const girClasses = (this.ns.class ? this.ns.class : [])
            .concat(this.ns.record ? this.ns.record : [])
            .concat(this.ns.interface ? this.ns.interface : [])

        for (const girClass of girClasses) {
            girClass._module = this
            girClass._fullSymName = `${this.name}.${girClass.$.name}`
            const cons = girClass.constructor instanceof Array ? girClass.constructor : []
            this.annotateFunctions(girClass, cons)
            this.annotateFunctions(girClass, girClass.function || [])
            this.annotateFunctions(girClass, girClass.method || [])
            this.annotateFunctions(girClass, girClass['virtual-method'] || [])
            this.annotateFunctions(girClass, girClass['glib:signal'] || [])
            this.annotateVariables(girClass, girClass.property)
            this.annotateVariables(girClass, girClass.field)
        }

        if (this.ns.function) this.annotateFunctions(null, this.ns.function)

        if (this.ns.constant) this.annotateVariables(null, this.ns.constant)

        // if (this.ns.)
        // props

        this.symTable = dict
    }

    private loadHierarchy(classes: GirClass[], inheritanceTable: InheritanceTable): void {
        if (!classes) return
        for (const cls of classes) {
            let parent: string | null = null
            if (cls.prerequisite) parent = cls.prerequisite[0].$.name || null
            else if (cls.$ && cls.$.parent) parent = cls.$.parent
            if (!parent) continue
            if (!cls._fullSymName) continue

            if (parent.indexOf('.') < 0) {
                parent = this.name + '.' + parent
            }
            const clsName = cls._fullSymName

            const arr: string[] = inheritanceTable[clsName] || []
            arr.push(parent)
            inheritanceTable[clsName] = arr
        }
    }

    public loadInheritance(inheritanceTable: InheritanceTable): void {
        // Class and interface hierarchies
        if (this.ns.class) this.loadHierarchy(this.ns.class, inheritanceTable)
        if (this.ns.interface) this.loadHierarchy(this.ns.interface, inheritanceTable)

        // Class interface implementations
        for (const cls of this.ns.class ? this.ns.class : []) {
            if (!cls._fullSymName) continue

            const names: string[] = []

            for (const i of cls.implements ? cls.implements : []) {
                if (i.$.name) {
                    let name: string = i.$.name
                    if (name.indexOf('.') < 0) {
                        name = cls._fullSymName.substring(0, cls._fullSymName.indexOf('.') + 1) + name
                    }
                    names.push(name)
                }
            }

            if (names.length > 0) {
                const clsName = cls._fullSymName
                const arr: string[] = inheritanceTable[clsName] || []
                inheritanceTable[clsName] = arr.concat(names)
            }
        }
    }

    /**
     * targetMod is the module the typename is going to be used in,
     * which may be different from the module that defines the type
     * @param girVar
     */
    private typeLookup(girVar: GirVariable, targetMod?: GirModule): string {
        if (!targetMod) targetMod = this
        let type: GirType
        let arr: TypeArraySuffix = ''
        let arrCType: string | undefined
        let nul: TypeNullableSuffix = ''

        const collection = girVar.array
            ? girVar.array
            : girVar.type && /^GLib.S?List$/.test(girVar.type[0].$?.name)
            ? (girVar.type as GirArray[])
            : undefined

        if (collection && collection.length > 0) {
            const typeArray = collection[0].type
            if (!typeArray || typeArray.length === 0) return 'any'
            if (collection[0].$) {
                const ea = collection[0].$
                arrCType = ea['c:type']
            }
            type = typeArray[0]
            arr = '[]'
        } else if (girVar.type) {
            type = girVar.type[0]
        } else {
            return 'any'
        }

        if (girVar.$) {
            const nullable = this.paramIsNullable(girVar)
            if (nullable) {
                nul = ' | null'
            }
        }

        if (!type.$) return 'any'

        const suffix: TypeSuffix = (arr + nul) as TypeSuffix

        if (arr) {
            if (POD_TYPE_MAP_ARRAY(this.config.environment)[type.$.name]) {
                return POD_TYPE_MAP_ARRAY(this.config.environment)[type.$.name] + nul
            }
        }

        if (POD_TYPE_MAP[type.$.name]) {
            return POD_TYPE_MAP[type.$.name] + suffix
        }

        if (!this.name) return 'any'

        let cType = type.$['c:type']
        if (!cType && arrCType) cType = arrCType

        if (cType) {
            if (C_TYPE_MAP(targetMod.packageName, suffix)[cType]) {
                return C_TYPE_MAP(targetMod.packageName, suffix)[cType]
            }
        }

        let fullTypeName: string | null = type.$.name

        if (typeof fullTypeName === 'string') {
            if (FULL_TYPE_MAP(this.config.environment)[fullTypeName]) {
                return FULL_TYPE_MAP(this.config.environment)[fullTypeName]
            }

            // Fully qualify our type name if need be
            if (!fullTypeName.includes('.')) {
                // eslint-disable-next-line @typescript-eslint/no-this-alias
                let mod: GirModule = this
                if (girVar._module) mod = girVar._module
                fullTypeName = `${mod.name}.${type.$.name}`
            }
        }

        if (!fullTypeName || !this.symTable[fullTypeName]) {
            this.log.warn(`Could not find type '${fullTypeName}' for '${girVar.$.name}'`)
            return ('any' + arr) as 'any' | 'any[]'
        }

        if (fullTypeName.indexOf(this.name + '.') === 0) {
            const ret = fullTypeName.substring(this.name.length + 1)
            // this.log.warn(`Rewriting ${fullTypeName} to ${ret} + ${suffix} -- ${this.name} -- ${girVar._module}`)
            const result = ret + suffix
            return result
        }

        return fullTypeName + suffix
    }

    /**
     * E.g. replaces something like `NetworkManager.80211ApFlags` with `NetworkManager.TODO_80211ApFlags`
     * @param girVar
     */
    private typeLookupTransformed(girVar: GirVariable, targetMod?: GirModule): string {
        let names = this.typeLookup(girVar, targetMod).split('.')
        names = names.map(name => this.transformation.transformTypeName(name))
        return names.join('.')
    }

    private girBool(e: string | undefined, defaultVal = false): boolean {
        if (e) {
            if (parseInt(e) === 0) return false
            return true
        }
        return defaultVal
    }

    private getReturnType(e: GirFunction, targetMod?: GirModule): [string, number] {
        let returnType: string

        const returnVal = e['return-value'] ? e['return-value'][0] : undefined
        if (returnVal) {
            returnType = this.typeLookupTransformed(returnVal, targetMod)
        } else returnType = 'void'

        const outArrayLengthIndex =
            returnVal?.array && returnVal.array[0].$?.length ? Number(returnVal.array[0].$.length) : -1

        return [returnType, outArrayLengthIndex] as [string, number]
    }

    private arrayLengthIndexLookup(param: GirVariable): number {
        if (!param.array) return -1

        const arr: GirArray = param.array[0]
        if (!arr.$) return -1

        if (arr.$.length) {
            return parseInt(arr.$.length)
        }

        return -1
    }

    private closureDataIndexLookup(param: GirVariable): number {
        if (!param.$.closure) return -1

        return parseInt(param.$.closure)
    }

    private destroyDataIndexLookup(param: GirVariable): number {
        if (!param.$.destroy) return -1

        return parseInt(param.$.destroy)
    }

    private processParams(
        parametersArray: GirVariable[],
        skip: GirVariable[],
        getIndex: (param: GirVariable) => number,
    ): void {
        for (const param of parametersArray as GirVariable[]) {
            const index = getIndex(param)
            if (index < 0) continue
            if (index >= parametersArray.length) continue
            skip.push(parametersArray[index])
        }
    }

    /**
     * Checks if the parameter is nullable or optional.
     * TODO Check if it makes sence to split this in `paramIsNullable` and `paramIsOptional`
     *
     * @param param Param to test
     *
     * @author realh
     * @see https://github.com/realh/ts-for-gjs/commit/e4bdba8d4ca279dfa4abbca413eaae6ecc6a81f8
     */
    private paramIsNullable(param: GirVariable): boolean {
        const a = param.$
        return a && (this.girBool(a.nullable) || this.girBool(a['allow-none']) || this.girBool(a.optional))
    }

    private getParameters(
        outArrayLengthIndex: number,
        parameters?: GirParameter[],
        targetMod?: GirModule,
    ): [string, string[]] {
        const def: string[] = []
        const outParams: string[] = []

        if (parameters && parameters.length > 0) {
            const parametersArray = parameters[0].parameter
            if (parametersArray) {
                const skip = outArrayLengthIndex === -1 ? [] : [parametersArray[outArrayLengthIndex]]

                this.processParams(parametersArray, skip, this.arrayLengthIndexLookup)
                this.processParams(parametersArray, skip, this.closureDataIndexLookup)
                this.processParams(parametersArray, skip, this.destroyDataIndexLookup)

                for (const param of parametersArray as GirVariable[]) {
                    const paramName = this.transformation.transformParameterName(param.$.name || '-', false)
                    const paramType = this.typeLookupTransformed(param, targetMod)

                    if (skip.indexOf(param) !== -1) {
                        continue
                    }

                    const optDirection = param.$.direction
                    if (optDirection) {
                        if (optDirection === 'out' || optDirection == 'inout') {
                            outParams.push(`/* ${paramName} */ ${paramType}`)
                            if (optDirection == 'out') continue
                        }
                    }

                    let isOptional = this.paramIsNullable(param) ? '?' : ''

                    if (isOptional === '?') {
                        const index = parametersArray.indexOf(param)
                        const following = (parametersArray as GirVariable[])
                            .slice(index)
                            .filter(() => skip.indexOf(param) === -1)
                            .filter(p => p.$.direction !== 'out')

                        if (following.some(p => !this.paramIsNullable(p))) {
                            isOptional = ''
                        }
                    }

                    const paramDesc = `${paramName}${isOptional}: ${paramType}`
                    def.push(paramDesc)
                }
            }
        }

        return [def.join(', '), outParams]
    }

    private getVariable(
        v: GirVariable,
        optional = false,
        allowQuotes = false,
        type: 'property' | 'constant' | 'field',
    ): FunctionDescription {
        if (!v.$.name) return [[], null]
        if (!v || !v.$ || !this.girBool(v.$.introspectable, true) || this.girBool(v.$.private)) return [[], null]

        let name = v.$.name

        switch (type) {
            case 'property':
                name = this.transformation.transformPropertyName(v.$.name, allowQuotes)
                break
            case 'constant':
                name = this.transformation.transformConstantName(v.$.name, allowQuotes)
                break
            case 'field':
                name = this.transformation.transformFieldName(v.$.name, allowQuotes)
                break
        }
        let typeName = this.typeLookupTransformed(v)
        const nameSuffix = optional ? '?' : ''

        typeName = this.transformation.transformTypeName(typeName)

        return [[`${name}${nameSuffix}: ${typeName}`], name]
    }

    private getProperty(v: GirVariable, construct = false, optional = true): [string[], string | null, string | null] {
        if (this.girBool(v.$['construct-only']) && !construct) return [[], null, null]
        if (!this.girBool(v.$.writable) && construct) return [[], null, null]
        if (this.girBool(v.$.private)) return [[], null, null]

        const propPrefix = this.girBool(v.$.writable) ? '' : 'readonly '
        const [propDesc, propName] = this.getVariable(v, construct && optional, true, 'property')
        let origName: string | null = null

        if (!propName) return [[], null, null]

        if (v.$.name) {
            // TODO does that make sense here? This also changes the signal names
            origName = this.transformation.transformTypeName(v.$.name)
        }

        return [[`    ${propPrefix}${propDesc}`], propName, origName]
    }

    private getFunction(
        e: GirFunction,
        prefix: string,
        funcNamePrefix = '',
        targetMod?: GirModule,
        overrideReturnType?: string,
    ): FunctionDescription {
        if (!e || !e.$ || !this.girBool(e.$.introspectable, true) || e.$['shadowed-by']) return [[], null]

        const patch = e._fullSymName ? this.patch[e._fullSymName] : []
        let name = e.$.name
        // eslint-disable-next-line prefer-const
        let [retType, outArrayLengthIndex] = this.getReturnType(e, targetMod)

        const [params, outParams] = this.getParameters(outArrayLengthIndex, e.parameters, targetMod)

        if (e.$['shadows']) {
            name = e.$['shadows']
        }

        if (funcNamePrefix) name = funcNamePrefix + name

        if (patch && patch.length === 1) return [patch, null]

        // Function name transformation by environment
        name = this.transformation.transformFunctionName(name)

        if (patch && patch.length === 2) return [[`${prefix}${funcNamePrefix}${patch[patch.length - 1]}`], name]

        const retTypeIsVoid = retType === 'void'

        if (overrideReturnType) {
            retType = overrideReturnType
        } else if (outParams.length + (retTypeIsVoid ? 0 : 1) > 1) {
            if (!retTypeIsVoid) {
                outParams.unshift(`/* returnType */ ${retType}`)
            }
            const retDesc = outParams.join(', ')
            retType = `[ ${retDesc} ]`
        } else if (outParams.length === 1 && retTypeIsVoid) {
            retType = outParams[0]
        }

        return [[`${prefix}${name}(${params}): ${retType}`], name]
    }

    private getConstructorFunction(
        name: string,
        e: GirFunction,
        prefix: string,
        funcNamePrefix = '',
        targetMod?: GirModule,
    ): FunctionDescription {
        // eslint-disable-next-line prefer-const
        let [desc, funcName] = this.getFunction(e, prefix, funcNamePrefix, targetMod, name)

        if (!funcName) return [[], null]

        return [desc, funcName]
    }

    private getSignalFunc(e: GirFunction, clsName: string): string[] {
        const sigName = this.transformation.transform('signalName', e.$.name)
        const [retType, outArrayLengthIndex] = this.getReturnType(e)
        const [params] = this.getParameters(outArrayLengthIndex, e.parameters)
        const paramComma = params.length > 0 ? ', ' : ''

        return TemplateProcessor.generateSignalMethods(
            this.config.environment,
            sigName,
            clsName,
            paramComma,
            params,
            retType,
        )
    }

    private traverseInheritanceTree(girClass: GirClass, callback: (girClass: GirClass) => void): void {
        // this.log.log(`${girClass.$.name} : ${parent && parent.$ ? parent.$.name : 'none'} : ${parentModule ? parentModule.name : 'none'}`)

        const details = this.getClassDetails(girClass)
        if (!details) return

        callback(girClass)

        const { parentName, qualifiedParentName } = details
        if (parentName && qualifiedParentName) {
            let parentPtr = this.symTable[qualifiedParentName] as GirClass | null
            if (!parentPtr && parentName == 'Object') {
                parentPtr = (this.symTable['GObject.Object'] as GirClass | null) || null
            }
            if (parentPtr) this.traverseInheritanceTree(parentPtr, callback)
        }
    }

    private forEachInterface(
        girClass: GirClass,
        callback: (cls: GirClass) => void,
        recurseObjects = false,
        dups = {},
    ): void {
        const mod: GirModule = girClass._module ? girClass._module : this
        for (const { $ } of girClass.implements || []) {
            let name = $.name as string

            if (name.indexOf('.') < 0) {
                name = this.name + '.' + name
            }
            if (Object.prototype.hasOwnProperty.call(dups, name)) {
                continue
            }
            dups[name] = true
            const iface: GirClass | null = this.symTable[name] as GirClass | null

            if (iface) {
                callback(iface)
                this.forEachInterface(iface, callback, recurseObjects, dups)
            }
        }
        if (girClass.prerequisite) {
            let parentName = girClass.prerequisite[0].$.name
            if (!parentName) {
                return
            }
            if (parentName.indexOf('.') < 0) {
                parentName = mod.name + '.' + parentName
            }
            if (Object.prototype.hasOwnProperty.call(dups, parentName)) return
            const parentPtr = this.symTable[parentName]
            if (parentPtr && ((parentPtr as GirClass).prerequisite || recurseObjects)) {
                // iface's prerequsite is also an interface, or it's
                // a class and we also want to recurse classes
                callback(parentPtr as GirClass)
                this.forEachInterface(parentPtr as GirClass, callback, recurseObjects, dups)
            }
        }
    }

    private forEachInterfaceAndSelf(girClass: GirClass, callback: (cls: GirClass) => void): void {
        callback(girClass)
        this.forEachInterface(girClass, callback)
    }

    private isDerivedFromGObject(girClass: GirClass): boolean {
        let ret = false
        this.traverseInheritanceTree(girClass, cls => {
            if (cls._fullSymName === 'GObject.Object') {
                ret = true
            }
        })
        return ret
    }

    private checkName(desc: string[], name: string | null, localNames: { [key: string]: 1 }): [string[], boolean] {
        if (!desc || desc.length === 0) return [[], false]

        if (!name) {
            // this.log.error(`No name for ${desc}`)
            return [[], false]
        }

        if (localNames[name]) {
            // this.log.warn(`Name ${name} already defined (${desc})`)
            return [[], false]
        }

        localNames[name] = 1
        return [desc, true]
    }

    private processFields(cls: GirClass, localNames: any): string[] {
        const def: string[] = []
        if (cls.field) {
            def.push(`    /* Fields of ${cls._fullSymName} */`)
            for (const f of cls.field) {
                const [desc, name] = this.getVariable(f, false, false, 'field')
                const [aDesc, added] = this.checkName(desc, name, localNames)
                if (added) {
                    def.push(`    ${aDesc[0]}`)
                }
            }
        }
        return def
    }

    private addSignalMethod(methods: FunctionDescription[], name: string, desc: string[]): void {
        const old = methods.find(e => e[1] === name)
        if (old) {
            for (const ln of desc) {
                if (!old[0].find(e => e === ln)) {
                    old[0].push(ln)
                }
            }
        } else {
            methods.push([desc, name])
        }
    }

    private getInstanceMethods(cls: GirClass): FunctionDescription[] {
        // Some methods have the same name as properties, give priority to properties
        // by filtering out those names
        const dash = /-/g
        const propNames = new Set<string>()
        this.traverseInheritanceTree(cls, e => {
            this.forEachInterfaceAndSelf(e, propSrc => {
                for (const p of propSrc.property || []) {
                    if (p.$.name) propNames.add(p.$.name.replace(dash, '_'))
                }
            })
        })
        const methodNames = (cls.method || []).filter(m => {
            if (propNames.has(m.$.name)) {
                if (this.warnMethodPropClash)
                    console.warn(`Removing method ${cls._fullSymName}.${m.$.name} due to a clash with a property`)
                return false
            }
            return m.$.name != null
        })
        const methods = methodNames.map(f => this.getFunction(f, '    ', '', this)).filter(f => f[1] != null)

        // GObject.Object signal methods aren't introspected.
        if (cls._fullSymName === 'GObject.Object') {
            this.addSignalMethod(methods, 'connect', [
                '    connect<T extends Function>(sigName: string, callback: T): number',
            ])
            this.addSignalMethod(methods, 'connect_after', [
                '    connect_after<T extends Function>(sigName: string, callback: T): number',
            ])
            this.addSignalMethod(methods, 'disconnect', ['    disconnect(tag: number): void'])
            this.addSignalMethod(methods, 'emit', ['    emit(sigName: string, ...args: any[]): void'])
        }
        return methods
    }

    private commentRegExp = /\/\*.*\*\//g
    private paramRegExp = /[0-9a-zA-Z_]*:/g
    private optParamRegExp = /[0-9a-zA-Z_]*\?:/g

    private stripParamNames(f: string, ignoreTail = false): string {
        const g = f
        f = f.replace(this.commentRegExp, '')
        const lb = f.split('(', 2)
        if (lb.length < 2) console.log(`Bad function definition ${g}`)
        const rb = lb[1].split(')')
        const tail = ignoreTail ? '' : rb[rb.length - 1]
        let params = rb.slice(0, rb.length - 1).join(')')
        params = params.replace(this.paramRegExp, ':')
        params = params.replace(this.optParamRegExp, '?:')
        return `${lb[0]}(${params})${tail}`
    }

    // Returns true if the function definitions in f1 and f2 have equivalent
    // signatures
    private functionSignaturesMatch(f1: string, f2: string): boolean {
        return this.stripParamNames(f1) == this.stripParamNames(f2)
    }

    // See comment for addOverloadableFunctions.
    // Returns true if (a definition from) func is added to map to satisfy
    // an overload, but false if it was forced
    private mergeOverloadableFunctions(map: FunctionMap, func: FunctionDescription, force = true): boolean {
        if (!func[1]) return false
        const defs = map.get(func[1])
        if (!defs) {
            if (force) map.set(func[1], func[0])
            return false
        }
        let result = false
        for (const newDef of func[0]) {
            let match = false
            for (const oldDef of defs) {
                if (this.functionSignaturesMatch(newDef, oldDef)) {
                    match = true
                    break
                }
            }
            if (!match) {
                defs.push(newDef)
                result = true
            }
        }
        return result
    }

    // fnMap values are equivalent to the second element of a FunctionDescription.
    // If an entry in fnMap is changed its name is added to explicits (set of names
    // which must be declared).
    // If force is true, every function of f2 is added to fnMap and overloads even
    // if it doesn't already contain a function of the same name.
    private addOverloadableFunctions(
        fnMap: FunctionMap,
        explicits: Set<string>,
        funcs: FunctionDescription[],
        force = false,
    ): void {
        for (const func of funcs) {
            if (!func[1]) continue
            if (this.mergeOverloadableFunctions(fnMap, func) || force) {
                explicits.add(func[1])
            }
        }
    }

    // Used for <method> and <virtual-method>
    private processOverloadableMethods(
        cls: GirClass,
        getMethods: (e: GirClass) => FunctionDescription[],
        statics = false,
    ): [FunctionMap, Set<string>] {
        const fnMap: FunctionMap = new Map()
        const explicits = new Set<string>()
        const funcs = getMethods(cls)
        this.addOverloadableFunctions(fnMap, explicits, funcs, true)
        // Have to implement methods from cls' interfaces
        this.forEachInterface(
            cls,
            iface => {
                if (!this.interfaceIsDuplicate(cls, iface)) {
                    const funcs = getMethods(iface)
                    this.addOverloadableFunctions(fnMap, explicits, funcs, true)
                }
            },
            false,
        )
        // Check for overloads among all inherited methods
        let bottom = true
        this.traverseInheritanceTree(cls, e => {
            if (bottom) {
                bottom = false
                return
            }
            if (statics) {
                const funcs = getMethods(e)
                this.addOverloadableFunctions(fnMap, explicits, funcs, false)
            } else {
                let self = true
                this.forEachInterfaceAndSelf(e, iface => {
                    if (self || this.interfaceIsDuplicate(cls, iface)) {
                        const funcs = getMethods(iface)
                        this.addOverloadableFunctions(fnMap, explicits, funcs, false)
                    }
                    self = false
                })
            }
        })
        return [fnMap, explicits]
    }

    private exportOverloadableMethods(fnMap: FunctionMap, explicits: Set<string>): string[] {
        const def: string[] = []
        for (const k of Array.from(explicits.values())) {
            const f = fnMap.get(k)
            if (f) def.push(...f)
        }
        return def
    }

    private processVirtualMethods(cls: GirClass): string[] {
        const [fnMap, explicits] = this.processOverloadableMethods(cls, e => {
            let methods = (e['virtual-method'] || []).map(f => {
                const desc = this.getFunction(f, '    ', 'vfunc_', this)
                return desc
            })
            methods = methods.filter(f => f[1] != null)
            return methods
        })
        return this.exportOverloadableMethods(fnMap, explicits)
    }

    private processStaticFunctions(cls: GirClass, getter: (e: GirClass) => FunctionDescription[]): string[] {
        const [fnMap, explicits] = this.processOverloadableMethods(cls, getter)
        return this.exportOverloadableMethods(fnMap, explicits)
    }

    // These have to be processed together, because signals add overloads
    // for connect() etc (including property notifications) and prop names may
    // clash with method names, meaning one or the other has to be removed
    private processInstanceMethodsSignalsProperties(cls: GirClass): string[] {
        const [fnMap, explicits] = this.processOverloadableMethods(cls, e => {
            // This already filters out methods with same name as superclass
            // properties
            return this.getInstanceMethods(e)
        })
        // Add specific signal methods
        const signals = cls['glib:signal']
        if (signals && signals.length) {
            explicits.add('connect')
            explicits.add('connect_after')
            explicits.add('emit')
            for (const s of signals) {
                const [retType, outArrayLengthIndex] = this.getReturnType(s)
                let [params] = this.getParameters(outArrayLengthIndex, s.parameters)
                if (params.length > 0) params = ', ' + params
                const callback = `(obj: ${cls.$.name}${params}) => ${retType}`
                const signature = `(sigName: "${s.$.name}", callback: ${callback}): number`
                this.mergeOverloadableFunctions(fnMap, [[`    // FIXME connect${signature}`], 'connect'], true)
                this.mergeOverloadableFunctions(
                    fnMap,
                    [[`    // FIXME connect_after${signature}`], 'connect_after'],
                    true,
                )
                this.mergeOverloadableFunctions(
                    fnMap,
                    [[`    // FIXME emit(sigName: "${s.$.name}"${params}): void`], 'emit'],
                    true,
                )
            }
        }
        let def: string[] = []
        // Although we've removed methods with the same name as an inherited
        // property we still need to filter out properties with the same
        // name as an inherited method.
        const dash = /-/g
        // The value indicates whether the property belongs to
        // cls (1 if cls only, 2 if also iface) or an interface (0)
        const propsMap: Map<string, number> = new Map()
        let props: GirVariable[] = []
        let self = true
        this.forEachInterfaceAndSelf(cls, e => {
            props = props.concat(
                (e.property || []).filter(p => {
                    if (!p.$.name) return false
                    const xName = p.$.name.replace(dash, '_')
                    const mapped = propsMap.get(p.$.name)
                    if (fnMap.has(xName)) {
                        if (self) {
                            console.warn(
                                `Hiding property ${cls._fullSymName}.${xName} ` +
                                    'due to a clash with an inherited method',
                            )
                        }
                        return false
                    } else if (mapped) {
                        if (mapped === 1) {
                            propsMap.set(p.$.name, 2)
                        }
                        return false
                    } else {
                        propsMap.set(p.$.name, self ? 1 : 0)
                        return true
                    }
                }),
            )
            self = false
        })
        if (props.length) {
            let prefix = 'GObject.'
            if (this.name == 'GObject') prefix = ''
            // def.push('    // Properties')
            def.push(`    /* Properties of ${cls._fullSymName} */`)
            for (const p of props) {
                // Some properties are construct-only overloads of
                // an implemnted interface property, so we use the self
                // flag from propsMap to force them to be included
                const [desc, name, origName] = this.getProperty(p, propsMap.get(p.$.name || '') === 2, false)
                def = def.concat(desc)
                // Each property also has a signal
                if (origName) {
                    const sigName = `sigName: "notify::${origName}"`
                    const params = `pspec: ${prefix}ParamSpec`
                    const callback = `(${params}) => void`
                    const signature = `(${sigName}, obj: ${cls.$.name}, ` + `callback: ${callback}): number`
                    this.mergeOverloadableFunctions(fnMap, [[`    // FIXME connect${signature}`], 'connect'], true)
                    this.mergeOverloadableFunctions(
                        fnMap,
                        [[`    // FIXME connect_after${signature}`], 'connect_after'],
                        true,
                    )
                    this.mergeOverloadableFunctions(
                        fnMap,
                        [[`    // FIXME emit(${sigName}, ${params}): void`], 'emit'],
                        true,
                    )
                }
            }
        }
        const mDef = this.exportOverloadableMethods(fnMap, explicits)
        if (mDef.length) {
            def.push(`    // Instance and signal methods`)
            def = def.concat(mDef)
        }
        return def
    }

    // Some classes implement interfaces which are also implemented by a superclass
    // and we need to exclude those in some circumstances
    private interfaceIsDuplicate(cls: GirClass, iface: GirClass | string): boolean {
        if (typeof iface !== 'string') {
            if (!iface._fullSymName) return false
            iface = iface._fullSymName
        }
        let rpt = false
        let bottom = true
        this.traverseInheritanceTree(cls, sub => {
            if (rpt) return
            if (bottom) {
                bottom = false
                return
            }
            this.forEachInterface(
                sub,
                e => {
                    if (rpt) return
                    if (e._fullSymName === iface) {
                        rpt = true
                    }
                },
                true,
            )
        })
        return rpt
    }

    private getStaticConstructors(
        e: GirClass,
        filter?: (funcName: string) => boolean,
        targetMod?: GirModule,
    ): FunctionDescription[] {
        const funcs = e['constructor']
        if (!Array.isArray(funcs)) return [[[], null]]
        let ctors = funcs.map(f => {
            return this.getConstructorFunction(e.$.name, f, '    static ', undefined, targetMod)
        })
        if (filter) ctors = ctors.filter(([desc, funcName]) => funcName && filter(funcName))
        return ctors
    }

    private isGtypeStructFor(e: GirClass, rec: GirClass): boolean {
        const isFor = rec.$['glib:is-gtype-struct-for']
        return !!isFor && isFor === e.$.name
    }

    // Some class/static methods are defined in a separate record which is not
    // exported, but the methods are available as members of the JS constructor.
    // In gjs one can use an instance of the object or a JS constructor as the
    // methods' instance-parameter. See:
    // https://discourse.gnome.org/t/using-class-methods-like-gtk-widget-class-get-css-name-from-gjs/4001
    private getClassMethods(e: GirClass): FunctionDescription[] {
        if (!e.$.name) return []
        const fName = e.$.name + 'Class'
        let rec = this.ns.record?.find(r => r.$.name == fName)
        if (!rec || !this.isGtypeStructFor(e, rec)) {
            rec = this.ns.record?.find(r => this.isGtypeStructFor(e, r))
            fName == rec?.$.name
        }
        if (!rec) return []
        const methods = rec.method || []
        return methods.map(m => this.getFunction(m, '    static '))
    }

    private getOtherStaticFunctions(e: GirClass, stat = true, targetMod?: GirModule): FunctionDescription[] {
        const fns: FunctionDescription[] = []
        if (e.function) {
            for (const f of e.function) {
                const [desc, funcName] = this.getFunction(f, stat ? '    static ' : '    ', undefined, targetMod)
                if (funcName && funcName !== 'new') fns.push([desc, funcName])
            }
        }
        return fns
    }

    private getStaticNew(e: GirClass, targetMod?: GirModule): FunctionDescription {
        const funcs = this.getStaticConstructors(e, fn => fn === 'new', targetMod)
        return funcs.length ? funcs[0] : [[], null]
    }

    private getClassDetails(girClass: GirClass): ClassDetails | null {
        if (!girClass || !girClass.$) return null

        const mod: GirModule = girClass._module ? girClass._module : this
        let name = this.transformation.transformClassName(girClass.$.name)
        let parentMod: string | undefined
        let qualifiedName: string
        let parentName: string | undefined = undefined
        let qualifiedParentName: string | undefined = undefined
        let localParentName: string | undefined = undefined

        if (name.indexOf('.') < 0) {
            qualifiedName = mod.name + '.' + name
        } else {
            qualifiedName = name
            const split = name.split('.')
            name = split[split.length - 1]
        }

        if (girClass.prerequisite) {
            parentName = girClass.prerequisite[0].$.name
        } else if (girClass.$.parent) {
            parentName = girClass.$.parent
        }

        if (parentName) {
            if (parentName.indexOf('.') < 0) {
                if (mod.name !== this.name) {
                    qualifiedParentName = mod.name + '.' + parentName
                    parentName = mod.name + '.' + parentName
                } else {
                    qualifiedParentName = parentName
                }
            } else {
                qualifiedParentName = parentName
                const split = parentName.split('.')
                parentName = split[split.length - 1]
                parentMod = split.slice(0, split.length - 1).join('.')
            }
            localParentName = parentMod === mod.name ? parentName : qualifiedParentName
        }
        return { name, qualifiedName, parentName, qualifiedParentName, localParentName }
    }

    // This uses interfaceIsDuplicate() to filter out interfaces implemented
    // by subclasses
    private forEachImplementedLocalName(e: GirClass, callback: (name: string) => void): void {
        if (e.implements) {
            for (const i of e.implements) {
                let name = i.$.name
                if (!name) continue
                let fullName
                if (name.indexOf('.') >= 0) {
                    fullName = name
                    const [mod, local] = name.split('.')
                    if (mod == this.name) name = local
                } else {
                    fullName = (this.name || '') + '.' + name
                }
                if (!this.interfaceIsDuplicate(e, fullName)) callback(name)
            }
        }
    }

    // Represents a record or GObject class or interface as a Typescript class
    private exportClassInternal(girClass: GirClass, record = false, isAbstract = false): string[] {
        // Is this a abstract class? E.g GObject.ObjectClass is a such abstract class and required by UPowerGlib-1.0, UDisks-2.0 and others
        if (girClass.$ && girClass.$['glib:is-gtype-struct-for']) {
            isAbstract = true
        }

        // Gtk has some weird classes that depend on DBus classes from Gio that
        // aren't exported due to is-gtype-struct-for, so filter them out too.
        if (girClass.$ && (girClass.$['c:type'] || '').indexOf('_Gtk') === 0) {
            return []
        }
        const details = this.getClassDetails(girClass)
        if (!details) return []
        const { name, parentName, localParentName } = details
        const isDerivedFromGObject = this.isDerivedFromGObject(girClass)

        let def: string[] = []

        // Properties for construction
        if (isDerivedFromGObject) {
            let ext = ' '
            if (parentName) ext = `extends ${localParentName}_ConstructProps `
            def.push(`export interface ${name}_ConstructProps ${ext}{`)
            const constructPropNames = {}
            if (girClass.property) {
                for (const p of girClass.property) {
                    const [desc, name] = this.getProperty(p, true, true)
                    def = def.concat(this.checkName(desc, name, constructPropNames)[0])
                }
            }
            def.push('}')
        }

        // Class definition starts here

        // TS classes implicitly have an interface with the same name so we
        // can use them in implements etc even though they're declared as classes
        let parents = ''
        if (girClass.$.parent) {
            parents += ` extends ${localParentName}`
        }
        if (girClass.implements) {
            const impl: string[] = []
            this.forEachImplementedLocalName(girClass, n => impl.push(n))
            if (impl.length) parents += ' implements ' + impl.join(',')
        }

        if (isAbstract) {
            def.push(`export abstract class ${name}${parents} {`)
        } else {
            def.push(`export class ${name}${parents} {`)
        }

        const localNames: { [key: string]: 1 } = {}

        // Can't export fields for GObjects because names would clash
        if (record) def = def.concat(this.processFields(girClass, localNames))

        // let doLog = girClass._fullSymName == 'Gio.Cancellable'
        def = def.concat(this.processInstanceMethodsSignalsProperties(girClass))
        // doLog = false
        def = def.concat(this.processVirtualMethods(girClass))

        if (isDerivedFromGObject || girClass.prerequisite) {
            def.push('    // Type field')
            def.push(`    static $gtype: ${this.name == 'GObject' ? '' : 'GObject.'}Type`)
        }

        // JS constructor(s)
        let stc: string[] = []
        if (isDerivedFromGObject) {
            stc.push(`    constructor(config?: ${name}_ConstructProps)`)
            stc.push(`    _init(config?: ${name}_ConstructProps): void`)
        } else if (girClass.prerequisite) {
            // Interfaces can't be instantiated
            stc = stc.concat('    protected constructor(a?: any)')
        }
        if (stc.length) {
            def.push('    // Constructor')
            def = def.concat(stc)
        }

        // Records, classes and interfaces all have a static name
        def.push('    static name: string')

        // Static methods, <constructor> and <function>
        stc = []
        stc = stc.concat(
            this.processStaticFunctions(girClass, cls => {
                return this.getStaticConstructors(cls)
            }),
        )
        stc = stc.concat(
            this.processStaticFunctions(girClass, cls => {
                return this.getOtherStaticFunctions(cls)
            }),
        )
        stc = stc.concat(
            this.processStaticFunctions(girClass, cls => {
                return this.getClassMethods(cls)
            }),
        )
        if (stc.length > 0) {
            def.push('    // Static methods and pseudo-constructors')
            def = def.concat(stc)
        }

        def.push('}')
        return def
    }

    public exportEnumeration(e: GirEnumeration): string[] {
        const def: string[] = []

        if (!e || !e.$ || !this.girBool(e.$.introspectable, true)) return []

        let name = e.$.name
        // E.g. the NetworkManager-1.0 has enum names starting with 80211
        name = this.transformation.transformEnumName(name)

        def.push(`export enum ${name} {`)
        if (e.member) {
            for (const member of e.member) {
                const _name = member.$.name || member.$['glib:nick'] || member.$['c:identifier']
                if (!_name) {
                    continue
                }
                const name = this.transformation.transform('enumValue', _name)
                if (/\d/.test(name[0])) def.push(`    /* ${name} (invalid, starts with a number) */`)
                else def.push(`    ${name},`)
            }
        }
        def.push('}')
        return def
    }

    public exportConstant(girVar: GirVariable): string[] {
        const [varDesc, varName] = this.getVariable(girVar, false, false, 'constant')
        if (varName) {
            if (!this.constNames[varName]) {
                this.constNames[varName] = 1
                return [`export const ${varDesc}`]
            } else {
                this.log.warn(`The constant '${varDesc}' has already been exported`)
            }
        }
        return []
    }

    /**
     * @deprecated use exportClassInternal instead
     * @param girClass
     * @param isAbstract
     */
    public exportObjectInternal(girClass: GirClass, isAbstract = false): string[] {
        const name = this.transformation.transformClassName(girClass.$.name)
        let def: string[] = []
        const isDerivedFromGObject = this.isDerivedFromGObject(girClass)

        // Is this a abstract class? E.g GObject.ObjectClass is a such abstract class and required by UPowerGlib-1.0, UDisks-2.0 and others
        if (girClass.$ && girClass.$['glib:is-gtype-struct-for']) {
            isAbstract = true
        }

        let parentName: string | null = null
        let counter = 0
        this.traverseInheritanceTree(girClass, cls => {
            if (counter++ !== 1) return
            parentName = cls._fullSymName || null
        })

        let parentNameShort: string = parentName || ''
        if (parentNameShort && this.name) {
            const s = parentNameShort.split('.', 2)
            if (s[0] === this.name) {
                parentNameShort = s[1]
            }
        }

        // Properties for construction
        if (isDerivedFromGObject) {
            let ext = ' '
            if (parentName) ext = `extends ${parentNameShort}_ConstructProps `

            def.push(`export interface ${name}_ConstructProps ${ext}{`)
            const constructPropNames = {}
            if (girClass.property) {
                for (const p of girClass.property) {
                    const [desc, name] = this.getProperty(p, true)
                    def = def.concat(this.checkName(desc, name, constructPropNames)[0])
                }
            }
            def.push('}')
        }

        // Instance side
        if (isAbstract) {
            def.push(`export abstract class ${name} {`)
        } else {
            def.push(`export class ${name} {`)
        }

        const localNames: { [key: string]: 1 } = {}
        const propertyNames: string[] = []

        const copyProperties = (cls: GirClass): void => {
            if (cls.property) {
                def.push(`    /* Properties of ${cls._fullSymName} */`)
                for (const p of cls.property) {
                    const [desc, name, origName] = this.getProperty(p)
                    const [aDesc, added] = this.checkName(desc, name, localNames)
                    if (added) {
                        if (origName) propertyNames.push(origName)
                    }
                    def = def.concat(aDesc)
                }
            }
        }
        this.traverseInheritanceTree(girClass, copyProperties)
        this.forEachInterface(girClass, copyProperties)

        // Fields
        const copyFields = (cls: GirClass): void => {
            if (cls.field) {
                def.push(`    /* Fields of ${cls._fullSymName} */`)
                for (const f of cls.field) {
                    const [desc, name] = this.getVariable(f, false, false, 'field')

                    const [aDesc, added] = this.checkName(desc, name, localNames)
                    if (added) {
                        def.push(`    ${aDesc[0]}`)
                    }
                }
            }
        }
        this.traverseInheritanceTree(girClass, copyFields)

        // Instance methods
        const copyMethods = (cls: GirClass): void => {
            if (cls.method) {
                def.push(`    /* Methods of ${cls._fullSymName} */`)
                for (const func of cls.method) {
                    const [desc, name] = this.getFunction(func, '    ')
                    def = def.concat(this.checkName(desc, name, localNames)[0])
                }
            }
        }
        this.traverseInheritanceTree(girClass, copyMethods)
        this.forEachInterface(girClass, copyMethods)

        // Instance methods, vfunc_ prefix
        this.traverseInheritanceTree(girClass, cls => {
            const vmeth = cls['virtual-method']
            if (vmeth) {
                def.push(`    /* Virtual methods of ${cls._fullSymName} */`)
                for (const f of vmeth) {
                    // eslint-disable-next-line prefer-const
                    let [desc, name] = this.getFunction(f, '    ', 'vfunc_')

                    desc = this.checkName(desc, name, localNames)[0]

                    if (desc[0]) {
                        desc[0] = desc[0].replace('(', '?(')
                    }

                    def = def.concat(desc)
                }
            }
        })

        const copySignals = (cls: GirClass): void => {
            const signals = cls['glib:signal']
            if (signals) {
                def.push(`    /* Signals of ${cls._fullSymName} */`)
                for (const s of signals) def = def.concat(this.getSignalFunc(s, name))
            }
        }
        this.traverseInheritanceTree(girClass, copySignals)
        this.forEachInterface(girClass, copySignals)

        if (isDerivedFromGObject) {
            let prefix = 'GObject.'
            if (this.name === 'GObject') prefix = ''
            for (const p of propertyNames) {
                def = def.concat(
                    TemplateProcessor.generateGObjectSignalMethods(this.config.environment, p, name, prefix),
                )
            }
            def = def.concat(TemplateProcessor.generateGeneralSignalMethods(this.config.environment))
        }

        // TODO: Records have fields

        // Static side: default constructor
        if (girClass._fullSymName && !STATIC_NAME_ALREADY_EXISTS.includes(girClass._fullSymName)) {
            def.push(`    static name: string`)
        }

        if (isDerivedFromGObject) {
            def.push(
                `    constructor (config?: ${name}_ConstructProps)`,
                `    _init (config?: ${name}_ConstructProps): void`,
            )
        } else {
            const constructor_: GirFunction[] = (girClass['constructor'] || []) as GirFunction[]
            if (constructor_) {
                if (Array.isArray(constructor_)) {
                    for (const f of constructor_) {
                        const [desc, funcName] = this.getConstructorFunction(name, f, '    static ')
                        if (!funcName) continue
                        if (funcName !== 'new') continue

                        def = def.concat(desc)

                        const jsStyleCtor = desc[0].replace('static new', 'constructor').replace(/:[^:]+$/, '')

                        def = def.concat(jsStyleCtor)
                    }
                }
                // else {
                //     debugger
                // }
            }
        }

        // Static methods
        let stc: string[] = []

        const constructor_: GirFunction[] = (girClass['constructor'] || []) as GirFunction[]
        if (constructor_) {
            if (Array.isArray(constructor_)) {
                for (const f of constructor_) {
                    const [desc, funcName] = this.getConstructorFunction(name, f, '    static ')
                    if (!funcName) continue

                    stc = stc.concat(desc)
                }
            }
            // else {
            //     this.log.warn('Warn: constructor_ is not an array:')
            //     this.log.dir(constructor_)
            //     debugger
            // }
        }

        if (girClass.function) {
            for (const f of girClass.function) {
                const [desc, funcName] = this.getFunction(f, '    static ')
                if (funcName === 'new') continue

                stc = stc.concat(desc)
            }
        }

        if (stc.length > 0) {
            def = def.concat(stc)
        }

        if (isDerivedFromGObject) {
            def.push(`    static $gtype: ${this.packageName === 'GObject-2.0' ? '' : 'GObject.'}Type`)
        }

        def.push('}')

        return def
    }

    public exportFunction(e: GirFunction): string[] {
        return this.getFunction(e, 'export function ')[0]
    }

    public exportCallback(e: GirFunction): string[] {
        if (!e || !e.$ || !this.girBool(e.$.introspectable, true)) return []

        const name = e.$.name
        const [retType, outArrayLengthIndex] = this.getReturnType(e)
        const [params] = this.getParameters(outArrayLengthIndex, e.parameters)

        const def: string[] = []
        def.push(`export interface ${name} {`)
        def.push(`    (${params}): ${retType}`)
        def.push('}')
        return def
    }

    public exportAlias(girAlias: GirAlias): string[] {
        if (!girAlias || !girAlias.$ || !this.girBool(girAlias.$.introspectable, true)) return []

        const typeName = this.typeLookupTransformed(girAlias)
        const name = girAlias.$.name
        return [`type ${name} = ${typeName}`]
    }

    public exportInterface(girClass: GirClass): string[] {
        // return this.exportObjectInternal(girClass)
        return this.exportClassInternal(girClass, true)
    }

    public exportClass(girClass: GirClass): string[] {
        // return this.exportObjectInternal(girClass)
        return this.exportClassInternal(girClass, false)
    }

    public exportJs(): void {
        const templateProcessor = new TemplateProcessor(
            {
                name: this.name,
                version: this.version,
                importName: this.importName,
            },
            this.packageName || undefined,
            this.config,
        )
        if (this.config.outdir) {
            templateProcessor.create('module.js', this.config.outdir, `${this.packageName}.js`)
        } else {
            const moduleContent = templateProcessor.load('module.js')
            this.log.log(moduleContent)
        }
    }

    public export(outStream: NodeJS.WritableStream, outputPath: string | null): void {
        let out: string[] = []

        out = out.concat(TemplateProcessor.generateTSDocComment(`${this.packageName}`))

        out.push('')

        const deps: string[] = this.transitiveDependencies

        // Always pull in GObject-2.0, as we may need it for e.g. GObject-2.0.type
        if (this.packageName !== 'GObject-2.0') {
            if (!Utils.find(deps, x => x === 'GObject-2.0')) {
                deps.push('GObject-2.0')
            }
        }

        // Add missing dependencies
        if (this.packageName === 'UnityExtras-7.0') {
            if (!Utils.find(deps, x => x === 'Unity-7.0')) {
                deps.push('Unity-7.0')
            }
        }
        if (this.packageName === 'UnityExtras-6.0') {
            if (!Utils.find(deps, x => x === 'Unity-6.0')) {
                deps.push('Unity-6.0')
            }
        }
        if (this.packageName === 'GTop-2.0') {
            if (!Utils.find(deps, x => x === 'GLib-2.0')) {
                deps.push('GLib-2.0')
            }
        }

        // Module dependencies as type references or imports
        if (this.config.environment === 'gjs') {
            out = out.concat(TemplateProcessor.generateModuleDependenciesImport('Gjs', 'Gjs', false, this.config))
        } else {
            out = out.concat(TemplateProcessor.generateModuleDependenciesImport('node', 'node', true, this.config))
        }
        for (const dep of deps) {
            // Don't reference yourself as a dependency
            if (this.packageName !== dep) {
                const girFilename = `${dep}.gir`
                const { name } = Utils.splitModuleName(dep)
                const depFile = Utils.findFileInDirs(this.config.girDirectories, girFilename)
                if (depFile.exists) {
                    out = out.concat(TemplateProcessor.generateModuleDependenciesImport(name, dep, false, this.config))
                } else {
                    out = out.concat(`// WARN: Dependency not found: '${dep}'`)
                    this.log.error(`Dependency gir file not found: '${girFilename}'`)
                }
            }
        }

        // START Namespace
        if (this.config.buildType === 'types') {
            out.push('')
            out.push(`declare namespace ${this.name} {`)
        }

        // Newline
        out.push('')

        if (this.ns.enumeration) for (const e of this.ns.enumeration) out = out.concat(this.exportEnumeration(e))

        if (this.ns.bitfield) for (const e of this.ns.bitfield) out = out.concat(this.exportEnumeration(e))

        if (this.ns.constant) for (const e of this.ns.constant) out = out.concat(this.exportConstant(e))

        if (this.ns.function) for (const e of this.ns.function) out = out.concat(this.exportFunction(e))

        if (this.ns.callback) for (const e of this.ns.callback) out = out.concat(this.exportCallback(e))

        if (this.ns.interface) for (const e of this.ns.interface) out = out.concat(this.exportClassInternal(e))

        const templateProcessor = new TemplateProcessor(
            { name: this.name, version: this.version },
            this.packageName,
            this.config,
        )

        // Extra interfaces if a template with the module name  (e.g. '../templates/GObject-2.0.d.ts') is found
        // E.g. used for GObject-2.0 to help define GObject classes in js;
        // these aren't part of gi.
        if (templateProcessor.exists(`${this.packageName}.d.ts`)) {
            const patches = templateProcessor.load(`${this.packageName}.d.ts`)
            out = out.concat(patches)
        }

        if (this.ns.class) for (const e of this.ns.class) out = out.concat(this.exportClassInternal(e, false))

        if (this.ns.record) for (const e of this.ns.record) out = out.concat(this.exportClassInternal(e, true))

        if (this.ns.union) for (const e of this.ns.union) out = out.concat(this.exportClassInternal(e, true))

        if (this.ns.alias)
            // GType is not a number in GJS
            for (const e of this.ns.alias)
                if (this.packageName !== 'GObject-2.0' || e.$.name !== 'Type') out = out.concat(this.exportAlias(e))

        if (this.packageName === 'GObject-2.0') out = out.concat(['export interface Type {', '    name: string', '}'])

        // END Namespace
        if (this.config.buildType === 'types') {
            out.push(`}`)
        }

        // End of file
        outStream.write(out.join('\n'))

        if (outputPath) {
            templateProcessor.prettify(outputPath)
        }
    }
}
