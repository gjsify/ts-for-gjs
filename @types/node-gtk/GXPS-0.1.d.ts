/**
 * GXPS-0.1
 */

import "node"
import type { cairo } from './cairo-1.0';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace GXPS {

export enum Error {
    SOURCE_NOT_FOUND,
    FONT,
    IMAGE,
}
export enum FileError {
    FILE_ERROR_INVALID,
}
export enum PageError {
    INVALID,
    RENDER,
    INVALID_ANCHOR,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const VERSION_STRING: string
export function errorQuark(): GLib.Quark
export interface CoreProperties_ConstructProps extends GObject.Object_ConstructProps {
    source?: string
}
export class CoreProperties {
    /* Fields of GXPS-0.1.GXPS.CoreProperties */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXPS-0.1.GXPS.CoreProperties */
    getCategory(): string
    getContentStatus(): string
    getContentType(): string
    getCreated(): number
    getCreator(): string
    getDescription(): string
    getIdentifier(): string
    getKeywords(): string
    getLanguage(): string
    getLastModifiedBy(): string
    getLastPrinted(): number
    getModified(): number
    getRevision(): string
    getSubject(): string
    getTitle(): string
    getVersion(): string
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
    connect(sigName: "notify", callback: (($obj: CoreProperties, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CoreProperties_ConstructProps)
    _init (config?: CoreProperties_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Document_ConstructProps extends GObject.Object_ConstructProps {
    source?: string
}
export class Document {
    /* Fields of GXPS-0.1.GXPS.Document */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXPS-0.1.GXPS.Document */
    getNPages(): number
    getPage(nPage: number): Page
    getPageForAnchor(anchor: string): number
    getPageSize(nPage: number): { returnType: boolean, width: number | null, height: number | null }
    getStructure(): DocumentStructure
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
    connect(sigName: "notify", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Document_ConstructProps)
    _init (config?: Document_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface DocumentStructure_ConstructProps extends GObject.Object_ConstructProps {
    source?: string
}
export class DocumentStructure {
    /* Fields of GXPS-0.1.GXPS.DocumentStructure */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXPS-0.1.GXPS.DocumentStructure */
    hasOutline(): boolean
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
    connect(sigName: "notify", callback: (($obj: DocumentStructure, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DocumentStructure_ConstructProps)
    _init (config?: DocumentStructure_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static outlineIterInit(iter: OutlineIter, structure: DocumentStructure): boolean
    static $gtype: GObject.Type
}
export interface File_ConstructProps extends GObject.Object_ConstructProps {
    file?: Gio.File
}
export class File {
    /* Fields of GXPS-0.1.GXPS.File */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXPS-0.1.GXPS.File */
    getCoreProperties(): CoreProperties
    getDocument(nDoc: number): Document
    getDocumentForLinkTarget(target: LinkTarget): number
    getNDocuments(): number
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
    connect(sigName: "notify", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: File_ConstructProps)
    _init (config?: File_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: Gio.File): File
    static errorQuark(): GLib.Quark
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Page_ConstructProps extends GObject.Object_ConstructProps {
    source?: string
}
export class Page {
    /* Fields of GXPS-0.1.GXPS.Page */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXPS-0.1.GXPS.Page */
    getAnchorDestination(anchor: string): { returnType: boolean, area: cairo.Rectangle }
    getLinks(): Link[]
    getSize(): { width: number | null, height: number | null }
    render(cr: cairo.Context): boolean
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
    connect(sigName: "notify", callback: (($obj: Page, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Page_ConstructProps)
    _init (config?: Page_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export abstract class CorePropertiesClass {
    /* Fields of GXPS-0.1.GXPS.CorePropertiesClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class CorePropertiesPrivate {
    static name: string
}
export abstract class DocumentClass {
    /* Fields of GXPS-0.1.GXPS.DocumentClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class DocumentPrivate {
    static name: string
}
export abstract class DocumentStructureClass {
    /* Fields of GXPS-0.1.GXPS.DocumentStructureClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class DocumentStructurePrivate {
    static name: string
}
export abstract class FileClass {
    /* Fields of GXPS-0.1.GXPS.FileClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class FilePrivate {
    static name: string
}
export class Link {
    /* Methods of GXPS-0.1.GXPS.Link */
    copy(): Link
    free(): void
    getArea(): { area: cairo.Rectangle }
    getTarget(): LinkTarget
    static name: string
}
export class LinkTarget {
    /* Methods of GXPS-0.1.GXPS.LinkTarget */
    copy(): LinkTarget
    free(): void
    getAnchor(): string
    getUri(): string
    isInternal(): boolean
    static name: string
}
export class OutlineIter {
    /* Methods of GXPS-0.1.GXPS.OutlineIter */
    children(parent: OutlineIter): boolean
    getDescription(): string
    getTarget(): LinkTarget
    next(): boolean
    static name: string
}
export abstract class PageClass {
    /* Fields of GXPS-0.1.GXPS.PageClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class PagePrivate {
    static name: string
}
}