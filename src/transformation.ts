import * as changeCase from 'change-case'
import { Transformations, Environment, Construct, TypeSuffix, CTypeMap, GType } from './types'
import Path from 'path'
import { Utils } from './utils'
import { Logger } from './logger'

export const POD_TYPE_MAP_ARRAY = (environment: Environment): { guint8: string; gint8: string; gunichar: string } => {
    return {
        guint8: environment === 'gjs' ? 'Gjs.byteArray.ByteArray' : 'any', // TODO
        gint8: environment === 'gjs' ? 'Gjs.byteArray.ByteArray' : 'any', // TODO
        gunichar: 'string',
    }
}

export const POD_TYPE_MAP = {
    utf8: 'string',
    none: 'void',
    double: 'number',
    guint32: 'number',
    guint16: 'number',
    gint16: 'number',
    gunichar: 'number',
    gint8: 'number',
    gint32: 'number',
    gushort: 'number',
    gfloat: 'number',
    gboolean: 'boolean',
    gpointer: 'object',
    gchar: 'number',
    guint: 'number',
    glong: 'number',
    gulong: 'number',
    gint: 'number',
    guint8: 'number',
    guint64: 'number',
    gint64: 'number',
    gdouble: 'number',
    gssize: 'number',
    gsize: 'number',
    long: 'number',
    object: 'any',
    gshort: 'number',
    filename: 'string',
    // eslint-disable-next-line @typescript-eslint/camelcase
    va_list: 'any',
}

export const C_TYPE_MAP = (targetNamespaceName: string | null, suffix: TypeSuffix): CTypeMap => {
    return {
        'char*': 'string',
        'gchar*': 'string',
        'gchar**': 'any', // FIXME
        GType: ((targetNamespaceName == 'GObject_2_0' ? 'Type' : 'GObject_2_0.Type') + suffix) as GType,
    }
}

export const NAME_TO_NAMESPACES = {
    GObject: 'GObject_2_0',
    GLib: 'GLib_2_0',
}

export const FULL_TYPE_MAP = (
    environment: Environment,
): { 'GObject_2_0.Value': string; 'GObject_2_0.Closure': string; 'GLib.ByteArray': string; 'GLib.Bytes': string } => {
    return {
        'GObject_2_0.Value': 'any',
        'GObject_2_0.Closure': 'Function',
        'GLib.ByteArray': environment === 'gjs' ? 'Gjs.byteArray.ByteArray' : 'any', // TODO
        'GLib.Bytes': environment === 'gjs' ? 'Gjs.byteArray.ByteArray' : 'any', // TODO
    }
}

export const RESERVED_VARIABLE_NAMES = {
    in: 1,
    function: 1,
    true: 1,
    false: 1,
    break: 1,
    arguments: 1,
    eval: 1,
    default: 1,
    new: 1,
    extends: 1,
    with: 1,
    var: 1,
    class: 1,
    delete: 1,
    return: 1,
}

export const RESERVED_CLASS_NAMES = {
    break: 1,
    boolean: 1,
    case: 1,
    catch: 1,
    class: 1,
    const: 1,
    continue: 1,
    debugger: 1,
    default: 1,
    delete: 1,
    do: 1,
    else: 1,
    enum: 1,
    export: 1,
    extends: 1,
    false: 1,
    finally: 1,
    for: 1,
    function: 1,
    if: 1,
    implements: 1,
    import: 1,
    in: 1,
    instanceof: 1,
    interface: 1,
    let: 1,
    new: 1,
    number: 1,
    package: 1,
    private: 1,
    protected: 1,
    public: 1,
    return: 1,
    static: 1,
    super: 1,
    switch: 1,
    string: 1,
    this: 1,
    throw: 1,
    true: 1,
    try: 1,
    typeof: 1,
    var: 1,
    void: 1,
    while: 1,
    with: 1,
    yield: 1,
}

export const RESERVED_NAMESPACE_NAMES = {}

export class Transformation {
    /**
     * Rules for the name conventions
     * For node-gtk naming conventions see https://github.com/romgrk/node-gtk#naming-conventions
     * For gjs see https://gjs-docs.gnome.org/ and https://wiki.gnome.org/Attic/Gjs
     */
    private transformations: Transformations = {
        functionName: {
            node: {
                transformation: 'camelCase',
            },
            gjs: {
                transformation: 'none',
            },
        },
        enumName: {
            node: {
                transformation: 'pascalCase',
            },
            gjs: {
                transformation: 'none',
            },
        },
        enumValue: {
            node: {
                transformation: 'upperCase',
            },
            gjs: {
                transformation: 'upperCase',
            },
        },
        signalName: {
            node: {
                transformation: 'paramCase',
            },
            gjs: {
                transformation: 'none',
            },
        },
        // GJS always re-writes - to _ (I think?)
        variableName: {
            node: {
                transformation: 'camelCase',
            },
            gjs: {
                transformation: 'underscores',
            },
        },
        namespaceName: {
            node: {
                transformation: 'pascalCase',
            },
            gjs: {
                transformation: 'pascalCase',
            },
        },
    }

    private log = Logger.getInstance()

    constructor(private readonly environment: Environment) {
        //
    }

    public transformModuleNamespaceName(name: string): string {
        // name = name.split('-')[0]
        name = this.transformNumericName(name)

        name = this.transform('namespaceName', name)

        if (RESERVED_NAMESPACE_NAMES[name]) {
            name = `${name}_`
        }

        return name
    }

    public transformClassName(name: string): string {
        name = this.transformNumericName(name)

        if (RESERVED_CLASS_NAMES[name]) {
            name = `${name}_`
        }

        return name
    }

    public transformEnumName(name: string): string {
        name = this.transform('enumName', name)
        // Replace this if enums need special handling
        return this.transformClassName(name)
    }

    public transformFunctionName(name: string): string {
        name = this.transform('functionName', name)
        // Replace this if enums need special handling
        return this.transformClassName(name)
    }

    /**
     * E.g. GstVideo-1.0 has a class `VideoScaler` with a method called `2d`
     * or NetworkManager-1.0 has methods starting with `80211`
     */
    public transformVariableName(name: string, allowQuotes: boolean): string {
        name = this.transform('variableName', name)

        if (RESERVED_VARIABLE_NAMES[name]) {
            if (allowQuotes) return `"${name}"`
            else return `${name}_`
        }

        name = this.transformNumericName(name, allowQuotes)

        return name
    }

    public transformParameterName(name: string, allowQuotes: boolean): string {
        // Such a variable name exists in `GConf-2.0.d.ts` class `Engine` method `change_set_from_current`
        if (name === '...') {
            return '...args'
        }
        return this.transformVariableName(name, allowQuotes)
    }

    /**
     * Fixes type names, e.g. Return types or enum definitions can not start with numbers
     * @param typeName
     */
    public transformTypeName(name: string): string {
        const originalName = `${name}`
        name = this.transformNumericName(name)
        if (originalName !== name) {
            this.log.warn(`Type name changed to ${name}`)
        }
        return name
    }

    public transform(construct: Construct, transformMe: string): string {
        const transformations = this.transformations[construct][this.environment].transformation
        if (transformations === 'none') {
            return transformMe
        }
        if (transformations === 'upperCase') {
            return transformMe.toUpperCase()
        }
        if (transformations === 'lowerCase') {
            return transformMe.toLowerCase()
        }
        if (transformations === 'underscores') {
            return transformMe.replace(/-|_/g, '_')
        }
        return changeCase[transformations](transformMe)
    }

    /**
     * In JavaScript there can be no variables, methods, class names or enum names that start with a number.
     * This method converts such names.
     * TODO ala prepends an `@` to numeric starting names how does gjs and node-gtk do that?
     * @param name
     * @param allowQuotes
     */
    private transformNumericName(name: string, allowQuotes = false): string {
        if (Utils.isFirstCharNumeric(name)) {
            if (allowQuotes) name = `"${name}"`
            else name = `TODO_${name}`
        }
        return name
    }

    static getEnvironmentDir(environment: Environment, baseDir: string): string {
        if (environment == 'gjs') {
            return Path.join(baseDir, 'Gjs')
        }
        if (environment == 'node') {
            return Path.join(baseDir, 'node-gtk')
        }
        return baseDir
    }

    getEnvironmentDir(baseDir: string): string {
        return Transformation.getEnvironmentDir(this.environment, baseDir)
    }
}
