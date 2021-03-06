/**
 * GUdev-1.0
 */

import "node"
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace GUdev {

export enum DeviceType {
    NONE,
    BLOCK,
    CHAR,
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
    subsystems?: string[]
}
export class Client {
    /* Fields of GUdev-1.0.GUdev.Client */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUdev-1.0.GUdev.Client */
    queryByDeviceFile(deviceFile: string): Device | null
    queryByDeviceNumber(type: DeviceType, number: DeviceNumber): Device | null
    queryBySubsystem(subsystem?: string | null): Device[] | null
    queryBySubsystemAndName(subsystem: string, name: string): Device | null
    queryBySysfsPath(sysfsPath: string): Device | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GUdev-1.0.GUdev.Client */
    connect(sigName: "uevent", callback: (($obj: Client, action: string, device: Device) => void)): number
    on(sigName: "uevent", callback: (action: string, device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "uevent", callback: (action: string, device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "uevent", callback: (action: string, device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "uevent", action: string, device: Device): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(subsystems?: string[] | null): Client
    static $gtype: GObject.Type
}
export interface Device_ConstructProps extends GObject.Object_ConstructProps {
}
export class Device {
    /* Fields of GUdev-1.0.GUdev.Device */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUdev-1.0.GUdev.Device */
    getAction(): string
    getDeviceFile(): string | null
    getDeviceFileSymlinks(): string[]
    getDeviceNumber(): DeviceNumber
    getDeviceType(): DeviceType
    getDevtype(): string
    getDriver(): string | null
    getIsInitialized(): boolean
    getName(): string
    getNumber(): string
    getParent(): Device | null
    getParentWithSubsystem(subsystem: string, devtype?: string | null): Device | null
    getProperty(key: string): string | null
    getPropertyAsBoolean(key: string): boolean
    getPropertyAsDouble(key: string): number
    getPropertyAsInt(key: string): number
    getPropertyAsStrv(key: string): string[] | null
    getPropertyAsUint64(key: string): number
    getPropertyKeys(): string[]
    getSeqnum(): number
    getSubsystem(): string
    getSysfsAttr(name: string): string | null
    getSysfsAttrAsBoolean(name: string): boolean
    getSysfsAttrAsBooleanUncached(name: string): boolean
    getSysfsAttrAsDouble(name: string): number
    getSysfsAttrAsDoubleUncached(name: string): number
    getSysfsAttrAsInt(name: string): number
    getSysfsAttrAsIntUncached(name: string): number
    getSysfsAttrAsStrv(name: string): string[] | null
    getSysfsAttrAsStrvUncached(name: string): string[] | null
    getSysfsAttrAsUint64(name: string): number
    getSysfsAttrAsUint64Uncached(name: string): number
    getSysfsAttrKeys(): string[]
    getSysfsAttrUncached(name: string): string | null
    getSysfsPath(): string
    getTags(): string[]
    getUsecSinceInitialized(): number
    hasProperty(key: string): boolean
    hasSysfsAttr(key: string): boolean
    hasSysfsAttrUncached(key: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Enumerator_ConstructProps extends GObject.Object_ConstructProps {
    client?: Client
}
export class Enumerator {
    /* Fields of GUdev-1.0.GUdev.Enumerator */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUdev-1.0.GUdev.Enumerator */
    addMatchIsInitialized(): Enumerator
    addMatchName(name: string): Enumerator
    addMatchProperty(name: string, value: string): Enumerator
    addMatchSubsystem(subsystem: string): Enumerator
    addMatchSysfsAttr(name: string, value: string): Enumerator
    addMatchTag(tag: string): Enumerator
    addNomatchSubsystem(subsystem: string): Enumerator
    addNomatchSysfsAttr(name: string, value: string): Enumerator
    addSysfsPath(sysfsPath: string): Enumerator
    execute(): Device[]
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Enumerator_ConstructProps)
    _init (config?: Enumerator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(client: Client): Enumerator
    static $gtype: GObject.Type
}
export abstract class ClientClass {
    /* Fields of GUdev-1.0.GUdev.ClientClass */
    parentClass: GObject.ObjectClass
    uevent: (client: Client, action: string, device: Device) => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
    static name: string
}
export class ClientPrivate {
    static name: string
}
export abstract class DeviceClass {
    /* Fields of GUdev-1.0.GUdev.DeviceClass */
    parentClass: GObject.ObjectClass
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
    static name: string
}
export class DevicePrivate {
    static name: string
}
export abstract class EnumeratorClass {
    /* Fields of GUdev-1.0.GUdev.EnumeratorClass */
    parentClass: GObject.ObjectClass
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
    static name: string
}
export class EnumeratorPrivate {
    static name: string
}
export type DeviceNumber = number
}