/**
 * GSound-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace GSound {

export enum Error {
    NOTSUPPORTED,
    INVALID,
    STATE,
    OOM,
    NODRIVER,
    SYSTEM,
    CORRUPT,
    TOOBIG,
    NOTFOUND,
    DESTROYED,
    CANCELED,
    NOTAVAILABLE,
    ACCESS,
    IO,
    INTERNAL,
    DISABLED,
    FORKED,
    DISCONNECTED,
}
export const ATTR_APPLICATION_ICON: string
export const ATTR_APPLICATION_ICON_NAME: string
export const ATTR_APPLICATION_ID: string
export const ATTR_APPLICATION_LANGUAGE: string
export const ATTR_APPLICATION_NAME: string
export const ATTR_APPLICATION_PROCESS_BINARY: string
export const ATTR_APPLICATION_PROCESS_HOST: string
export const ATTR_APPLICATION_PROCESS_ID: string
export const ATTR_APPLICATION_PROCESS_USER: string
export const ATTR_APPLICATION_VERSION: string
export const ATTR_CANBERRA_CACHE_CONTROL: string
export const ATTR_CANBERRA_ENABLE: string
export const ATTR_CANBERRA_FORCE_CHANNEL: string
export const ATTR_CANBERRA_VOLUME: string
export const ATTR_CANBERRA_XDG_THEME_NAME: string
export const ATTR_CANBERRA_XDG_THEME_OUTPUT_PROFILE: string
export const ATTR_EVENT_DESCRIPTION: string
export const ATTR_EVENT_ID: string
export const ATTR_EVENT_MOUSE_BUTTON: string
export const ATTR_EVENT_MOUSE_HPOS: string
export const ATTR_EVENT_MOUSE_VPOS: string
export const ATTR_EVENT_MOUSE_X: string
export const ATTR_EVENT_MOUSE_Y: string
export const ATTR_MEDIA_ARTIST: string
export const ATTR_MEDIA_FILENAME: string
export const ATTR_MEDIA_ICON: string
export const ATTR_MEDIA_ICON_NAME: string
export const ATTR_MEDIA_LANGUAGE: string
export const ATTR_MEDIA_NAME: string
export const ATTR_MEDIA_ROLE: string
export const ATTR_MEDIA_TITLE: string
export const ATTR_WINDOW_DESKTOP: string
export const ATTR_WINDOW_HEIGHT: string
export const ATTR_WINDOW_HPOS: string
export const ATTR_WINDOW_ICON: string
export const ATTR_WINDOW_ICON_NAME: string
export const ATTR_WINDOW_ID: string
export const ATTR_WINDOW_NAME: string
export const ATTR_WINDOW_VPOS: string
export const ATTR_WINDOW_WIDTH: string
export const ATTR_WINDOW_X: string
export const ATTR_WINDOW_X11_DISPLAY: string
export const ATTR_WINDOW_X11_MONITOR: string
export const ATTR_WINDOW_X11_SCREEN: string
export const ATTR_WINDOW_X11_XID: string
export const ATTR_WINDOW_Y: string
export function errorQuark(): GLib.Quark
export interface Context_ConstructProps extends GObject.Object_ConstructProps {
}
export class Context {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GSound-1.0.GSound.Context */
    cache(attrs: GLib.HashTable): boolean
    open(): boolean
    playFullFinish(result: Gio.AsyncResult): boolean
    playFull(attrs: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    playSimple(attrs: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
    setAttributes(attrs: GLib.HashTable): boolean
    setDriver(driver: string): boolean
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Context_ConstructProps)
    _init (config?: Context_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cancellable?: Gio.Cancellable | null): Context
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export abstract class ContextClass {
    static name: string
}
}