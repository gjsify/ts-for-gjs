/**
 * Tracker-1.0
 */

import "node"
import type { GLib } from './GLib-2.0';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';

export declare namespace Tracker {

export enum SparqlValueType {
    UNBOUND,
    URI,
    STRING,
    INTEGER,
    DOUBLE,
    DATETIME,
    BLANK_NODE,
    BOOLEAN,
}
export enum Error {
    PARSE,
    UNKNOWN_CLASS,
    UNKNOWN_PROPERTY,
    TYPE,
    CONSTRAINT,
    NO_SPACE,
    INTERNAL,
    UNSUPPORTED,
}
export enum SparqlBuilderState {
    UPDATE,
    INSERT,
    DELETE,
    SUBJECT,
    PREDICATE,
    OBJECT,
    BLANK,
    WHERE,
    EMBEDDED_INSERT,
    GRAPH,
}
export const DBUS_SERVICE: string
export const DBUS_INTERFACE_RESOURCES: string
export const DBUS_OBJECT_RESOURCES: string
export const DBUS_INTERFACE_STATISTICS: string
export const DBUS_OBJECT_STATISTICS: string
export const DBUS_INTERFACE_STATUS: string
export const DBUS_OBJECT_STATUS: string
export const DBUS_INTERFACE_STEROIDS: string
export const DBUS_OBJECT_STEROIDS: string
export function sparqlEscapeUri(uri: string): string
export function sparqlEscapeString(literal: string): string
export function sparqlGetUuidUrn(): string
export interface SparqlBuilder_ConstructProps extends GObject.Object_ConstructProps {
    length?: number
}
export class SparqlBuilder {
    /* Properties of Tracker-1.0.Tracker.SparqlBuilder */
    readonly result: string
    length: number
    readonly state: SparqlBuilderState
    /* Fields of Tracker-1.0.Tracker.SparqlBuilder */
    parentInstance: GObject.Object
    priv: SparqlBuilderPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker-1.0.Tracker.SparqlBuilder */
    insertOpen(graph?: string | null): void
    insertSilentOpen(graph?: string | null): void
    insertClose(): void
    deleteOpen(graph?: string | null): void
    deleteClose(): void
    graphOpen(graph: string): void
    graphClose(): void
    whereOpen(): void
    whereClose(): void
    subjectVariable(varName: string): void
    objectVariable(varName: string): void
    subjectIri(iri: string): void
    subject(s: string): void
    predicateIri(iri: string): void
    predicate(s: string): void
    objectIri(iri: string): void
    object(s: string): void
    objectString(literal: string): void
    objectUnvalidated(value: string): void
    objectBoolean(literal: boolean): void
    objectInt64(literal: number): void
    objectDate(literal: number): { literal: number }
    objectDouble(literal: number): void
    objectBlankOpen(): void
    objectBlankClose(): void
    prepend(raw: string): void
    append(raw: string): void
    getResult(): string
    getLength(): number
    getState(): SparqlBuilderState
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
    connect(sigName: "notify", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::result", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::result", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SparqlBuilder_ConstructProps)
    _init (config?: SparqlBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static update(): SparqlBuilder
    static embeddedInsert(): SparqlBuilder
    static new(): SparqlBuilder
    static $gtype: GObject.Type
}
export interface SparqlConnection_ConstructProps extends GObject.Object_ConstructProps {
}
export class SparqlConnection {
    /* Fields of Tracker-1.0.Tracker.SparqlConnection */
    parentInstance: GObject.Object
    priv: SparqlConnectionPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker-1.0.Tracker.SparqlConnection */
    query(sparql: string, cancellable?: Gio.Cancellable | null): SparqlCursor
    queryAsync(sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFinish(res: Gio.AsyncResult): SparqlCursor
    update(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): void
    updateAsync(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateFinish(res: Gio.AsyncResult): void
    updateArrayAsync(sparql: string[], priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateArrayFinish(res: Gio.AsyncResult): any[] | null
    updateBlank(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): GLib.Variant | null
    updateBlankAsync(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateBlankFinish(res: Gio.AsyncResult): GLib.Variant | null
    load(file: Gio.File, cancellable?: Gio.Cancellable | null): void
    loadAsync(file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadFinish(res: Gio.AsyncResult): void
    statistics(cancellable?: Gio.Cancellable | null): SparqlCursor | null
    statisticsAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    statisticsFinish(res: Gio.AsyncResult): SparqlCursor | null
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
    connect(sigName: "notify", callback: (($obj: SparqlConnection, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SparqlConnection_ConstructProps)
    _init (config?: SparqlConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static getFinish(res: Gio.AsyncResult): SparqlConnection
    static get(cancellable?: Gio.Cancellable | null): SparqlConnection
    static getDirectAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static getDirectFinish(res: Gio.AsyncResult): SparqlConnection
    static getDirect(cancellable?: Gio.Cancellable | null): SparqlConnection
    static remoteNew(uriBase: string): SparqlConnection
    static $gtype: GObject.Type
}
export interface SparqlCursor_ConstructProps extends GObject.Object_ConstructProps {
    connection?: SparqlConnection
}
export class SparqlCursor {
    /* Properties of Tracker-1.0.Tracker.SparqlCursor */
    connection: SparqlConnection
    readonly nColumns: number
    /* Fields of Tracker-1.0.Tracker.SparqlCursor */
    parentInstance: GObject.Object
    priv: SparqlCursorPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Tracker-1.0.Tracker.SparqlCursor */
    getValueType(column: number): SparqlValueType
    getVariableName(column: number): string | null
    getString(column: number): { returnType: string | null, length: number }
    next(cancellable?: Gio.Cancellable | null): boolean
    nextAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    nextFinish(res: Gio.AsyncResult): boolean
    rewind(): void
    close(): void
    getInteger(column: number): number
    getDouble(column: number): number
    getBoolean(column: number): boolean
    isBound(column: number): boolean
    getConnection(): SparqlConnection
    setConnection(value: SparqlConnection): void
    getNColumns(): number
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
    connect(sigName: "notify", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connection", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-columns", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-columns", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SparqlCursor_ConstructProps)
    _init (config?: SparqlCursor_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class SparqlBuilderClass {
    /* Fields of Tracker-1.0.Tracker.SparqlBuilderClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class SparqlBuilderPrivate {
    static name: string
}
export abstract class SparqlConnectionClass {
    /* Fields of Tracker-1.0.Tracker.SparqlConnectionClass */
    parentClass: GObject.ObjectClass
    query: (self: SparqlConnection, sparql: string, cancellable?: Gio.Cancellable | null) => SparqlCursor
    queryAsync: (self: SparqlConnection, sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    queryFinish: (self: SparqlConnection, res: Gio.AsyncResult) => SparqlCursor
    update: (self: SparqlConnection, sparql: string, priority: number, cancellable?: Gio.Cancellable | null) => void
    updateAsync: (self: SparqlConnection, sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    updateFinish: (self: SparqlConnection, res: Gio.AsyncResult) => void
    updateArrayAsync: (self: SparqlConnection, sparql: string[], priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    updateArrayFinish: (self: SparqlConnection, res: Gio.AsyncResult) => any[] | null
    updateBlank: (self: SparqlConnection, sparql: string, priority: number, cancellable?: Gio.Cancellable | null) => GLib.Variant | null
    updateBlankAsync: (self: SparqlConnection, sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    updateBlankFinish: (self: SparqlConnection, res: Gio.AsyncResult) => GLib.Variant | null
    load: (self: SparqlConnection, file: Gio.File, cancellable?: Gio.Cancellable | null) => void
    loadAsync: (self: SparqlConnection, file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    loadFinish: (self: SparqlConnection, res: Gio.AsyncResult) => void
    statistics: (self: SparqlConnection, cancellable?: Gio.Cancellable | null) => SparqlCursor | null
    statisticsAsync: (self: SparqlConnection, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    statisticsFinish: (self: SparqlConnection, res: Gio.AsyncResult) => SparqlCursor | null
    static name: string
}
export class SparqlConnectionPrivate {
    static name: string
}
export abstract class SparqlCursorClass {
    /* Fields of Tracker-1.0.Tracker.SparqlCursorClass */
    parentClass: GObject.ObjectClass
    getValueType: (self: SparqlCursor, column: number) => SparqlValueType
    getVariableName: (self: SparqlCursor, column: number) => string | null
    getString: (self: SparqlCursor, column: number) => { returnType: string | null, length: number }
    next: (self: SparqlCursor, cancellable?: Gio.Cancellable | null) => boolean
    nextAsync: (self: SparqlCursor, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    nextFinish: (self: SparqlCursor, res: Gio.AsyncResult) => boolean
    rewind: (self: SparqlCursor) => void
    close: (self: SparqlCursor) => void
    getInteger: (self: SparqlCursor, column: number) => number
    getDouble: (self: SparqlCursor, column: number) => number
    getBoolean: (self: SparqlCursor, column: number) => boolean
    isBound: (self: SparqlCursor, column: number) => boolean
    static name: string
}
export class SparqlCursorPrivate {
    static name: string
}
}