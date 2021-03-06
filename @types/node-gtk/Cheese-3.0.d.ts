/**
 * Cheese-3.0
 */

import "node"
import type { Gst } from './Gst-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { Gio } from './Gio-2.0';
import type { Clutter } from './Clutter-1.0';
import type { cairo } from './cairo-1.0';
import type { Json } from './Json-1.0';
import type { GL } from './GL-1.0';
import type { CoglPango } from './CoglPango-1.0';
import type { PangoCairo } from './PangoCairo-1.0';
import type { Pango } from './Pango-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { Cogl } from './Cogl-1.0';
import type { Atk } from './Atk-1.0';

export declare namespace Cheese {

export enum CameraError {
    UNKNOWN,
    ELEMENT_NOT_FOUND,
    NO_DEVICE,
}
export enum MediaMode {
    PHOTO,
    VIDEO,
    BURST,
}
export const PHOTO_NAME_SUFFIX: string
export const VIDEO_NAME_SUFFIX: string
export interface Camera_ConstructProps extends GObject.Object_ConstructProps {
    device?: CameraDevice
    format?: VideoFormat
    videoTexture?: object
}
export class Camera {
    /* Properties of Cheese-3.0.Cheese.Camera */
    device: CameraDevice
    format: VideoFormat
    readonly numCameraDevices: number
    videoTexture: object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Cheese-3.0.Cheese.Camera */
    connectEffectTexture(effect: Effect, texture: Clutter.Actor): void
    getBalancePropertyRange(property: string): { returnType: boolean, min: number, max: number, def: number }
    getCameraDevices(): CameraDevice[]
    getCurrentVideoFormat(): VideoFormat
    getRecordedTime(): string
    getSelectedDevice(): CameraDevice
    getVideoFormats(): VideoFormat[]
    play(): void
    setBalanceProperty(property: string, value: number): void
    setDevice(device: CameraDevice): void
    setEffect(effect: Effect): void
    setVideoFormat(format: VideoFormat): void
    setup(device?: CameraDevice | null): void
    startVideoRecording(filename: string): void
    stop(): void
    stopVideoRecording(): void
    switchCameraDevice(): void
    takePhoto(filename: string): boolean
    takePhotoPixbuf(): boolean
    toggleEffectsPipeline(active: boolean): void
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
    /* Signals of Cheese-3.0.Cheese.Camera */
    connect(sigName: "photo-saved", callback: (($obj: Camera) => void)): number
    on(sigName: "photo-saved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "photo-saved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "photo-saved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "photo-saved"): void
    connect(sigName: "photo-taken", callback: (($obj: Camera, pixbuf: GdkPixbuf.Pixbuf) => void)): number
    on(sigName: "photo-taken", callback: (pixbuf: GdkPixbuf.Pixbuf) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "photo-taken", callback: (pixbuf: GdkPixbuf.Pixbuf) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "photo-taken", callback: (pixbuf: GdkPixbuf.Pixbuf) => void): NodeJS.EventEmitter
    emit(sigName: "photo-taken", pixbuf: GdkPixbuf.Pixbuf): void
    connect(sigName: "state-flags-changed", callback: (($obj: Camera, state: number) => void)): number
    on(sigName: "state-flags-changed", callback: (state: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (state: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (state: number) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", state: number): void
    connect(sigName: "video-saved", callback: (($obj: Camera) => void)): number
    on(sigName: "video-saved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "video-saved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "video-saved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "video-saved"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::device", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::format", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-camera-devices", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-camera-devices", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-camera-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-camera-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-camera-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::video-texture", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-texture", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::video-texture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::video-texture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::video-texture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Camera_ConstructProps)
    _init (config?: Camera_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(videoTexture: Clutter.Actor, name: string | null, xResolution: number, yResolution: number): Camera
    static $gtype: GObject.Type
}
export interface CameraDevice_ConstructProps extends GObject.Object_ConstructProps {
    device?: Gst.Device
    name?: string
    path?: string
}
export class CameraDevice {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Cheese-3.0.Cheese.CameraDevice */
    getBestFormat(): VideoFormat
    getCapsForFormat(format: VideoFormat): Gst.Caps
    getFormatList(): VideoFormat[]
    getName(): string
    getPath(): string
    getSrc(): Gst.Element
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
    connect(sigName: "notify", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CameraDevice_ConstructProps)
    _init (config?: CameraDevice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(device: Gst.Device): CameraDevice
    static supportedFormatCaps(): Gst.Caps
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface CameraDeviceMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
export class CameraDeviceMonitor {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Cheese-3.0.Cheese.CameraDeviceMonitor */
    coldplug(): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Cheese-3.0.Cheese.CameraDeviceMonitor */
    connect(sigName: "added", callback: (($obj: CameraDeviceMonitor, device: CameraDevice) => void)): number
    on(sigName: "added", callback: (device: CameraDevice) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "added", callback: (device: CameraDevice) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "added", callback: (device: CameraDevice) => void): NodeJS.EventEmitter
    emit(sigName: "added", device: CameraDevice): void
    connect(sigName: "removed", callback: (($obj: CameraDeviceMonitor, device: CameraDevice) => void)): number
    on(sigName: "removed", callback: (device: CameraDevice) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "removed", callback: (device: CameraDevice) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "removed", callback: (device: CameraDevice) => void): NodeJS.EventEmitter
    emit(sigName: "removed", device: CameraDevice): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CameraDeviceMonitor, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CameraDeviceMonitor_ConstructProps)
    _init (config?: CameraDeviceMonitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CameraDeviceMonitor
    static newFinish(result: Gio.AsyncResult): CameraDeviceMonitor
    static newAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Effect_ConstructProps extends GObject.Object_ConstructProps {
    controlValve?: Gst.Element
    name?: string
    pipelineDesc?: string
}
export class Effect {
    /* Properties of Cheese-3.0.Cheese.Effect */
    controlValve: Gst.Element
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Cheese-3.0.Cheese.Effect */
    disablePreview(): void
    enablePreview(): void
    getName(): string
    getPipelineDesc(): string
    isPreviewConnected(): boolean
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
    connect(sigName: "notify", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::control-valve", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::control-valve", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::control-valve", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::control-valve", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::control-valve", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Effect_ConstructProps)
    _init (config?: Effect_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, pipelineDesc: string): Effect
    static loadEffects(): Effect[]
    static loadFromFile(filename: string): Effect
    static $gtype: GObject.Type
}
export interface FileUtil_ConstructProps extends GObject.Object_ConstructProps {
}
export class FileUtil {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Cheese-3.0.Cheese.FileUtil */
    getNewMediaFilename(mode: MediaMode): string
    getPhotoPath(): string
    getVideoPath(): string
    resetBurst(): void
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
    connect(sigName: "notify", callback: (($obj: FileUtil, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FileUtil_ConstructProps)
    _init (config?: FileUtil_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FileUtil
    static $gtype: GObject.Type
}
export abstract class CameraClass {
    /* Fields of Cheese-3.0.Cheese.CameraClass */
    photoSaved: (camera: Camera) => void
    photoTaken: (camera: Camera, pixbuf: GdkPixbuf.Pixbuf) => void
    videoSaved: (camera: Camera) => void
    stateFlagsChanged: (camera: Camera, newState: Gst.State) => void
    static name: string
}
export abstract class CameraDeviceClass {
    /* Fields of Cheese-3.0.Cheese.CameraDeviceClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class CameraDeviceMonitorClass {
    /* Fields of Cheese-3.0.Cheese.CameraDeviceMonitorClass */
    added: (monitor: CameraDeviceMonitor, device: CameraDevice) => void
    removed: (monitor: CameraDeviceMonitor, device: CameraDevice) => void
    static name: string
}
export class CameraDeviceMonitorPrivate {
    static name: string
}
export class CameraPrivate {
    static name: string
}
export abstract class EffectClass {
    /* Fields of Cheese-3.0.Cheese.EffectClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class FileUtilClass {
    /* Fields of Cheese-3.0.Cheese.FileUtilClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class VideoFormat {
    /* Fields of Cheese-3.0.Cheese.VideoFormat */
    width: number
    height: number
    static name: string
}
}