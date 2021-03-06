/**
 * GitgExt-1.0
 */

import "node"
import type { Gitg } from './Gitg-1.0';
import type { cairo } from './cairo-1.0';
import type { Pango } from './Pango-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gee } from './Gee-0.8';
import type { Gio } from './Gio-2.0';
import type { Gdk } from './Gdk-3.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { GModule } from './GModule-2.0';
import type { Ggit } from './Ggit-1.0';
import type { Gtk } from './Gtk-3.0';
import type { xlib } from './xlib-2.0';
import type { Atk } from './Atk-1.0';

export declare namespace GitgExt {

export enum SelectionMode {
    NORMAL,
    SELECTION,
}
export enum ExternalChangeHint {
    NONE,
    REFS,
    INDEX,
}
export interface ForeachCommitSelectionFunc {
    (object: Ggit.Commit): boolean
}
export interface MessageCallback {
    (message: Message): void
}
export interface RefNameEditingDone {
    (newName: string, cancelled: boolean): void
}
export interface Action_ConstructProps extends UIElement_ConstructProps {
}
export class Action {
    /* Properties of GitgExt-1.0.GitgExt.UIElement */
    application: Application
    readonly id: string
    readonly displayName: string
    readonly description: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Action */
    populateMenu(menu: Gtk.Menu): void
    /* Methods of GitgExt-1.0.GitgExt.UIElement */
    negotiateOrder(other: UIElement): number
    getApplication(): Application | null
    setApplication(value?: Application | null): void
    getId(): string
    getDisplayName(): string
    getDescription(): string
    getIcon(): string | null
    getWidget(): Gtk.Widget | null
    getShortcut(): number | null
    getAvailable(): boolean
    getEnabled(): boolean
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
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
    connect(sigName: "activate", callback: (($obj: Action) => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
    connect(sigName: "activate", callback: (($obj: Action) => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    connect(sigName: "notify::application", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Action_ConstructProps)
    _init (config?: Action_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Activity_ConstructProps extends GObject.Object_ConstructProps {
}
export class Activity {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Activity */
    isDefaultFor(action: string): boolean
    onKeyPressed(event: Gdk.EventKey): boolean
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
    connect(sigName: "notify", callback: (($obj: Activity, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Activity_ConstructProps)
    _init (config?: Activity_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Application_ConstructProps extends GObject.Object_ConstructProps {
    repository?: Gitg.Repository
    busy?: boolean
}
export class Application {
    /* Properties of GitgExt-1.0.GitgExt.Application */
    repository: Gitg.Repository
    readonly messageBus: MessageBus
    readonly currentActivity: Activity
    readonly environment: Gee.Map
    readonly notifications: Notifications
    busy: boolean
    readonly remoteLookup: RemoteLookup
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Application */
    getVerifiedCommitter(): Ggit.Signature | null
    getActivityById(id: string): Activity | null
    setActivityById(id: string): Activity | null
    userQuery(query: UserQuery): void
    userQueryAsync(query: UserQuery, callback?: Gio.AsyncReadyCallback | null): void
    userQueryFinish(res: Gio.AsyncResult): Gtk.ResponseType
    showInfobar(primaryMsg: string, secondaryMsg: string, type: Gtk.MessageType): void
    openNew(repository: Ggit.Repository, hint?: string | null): Application
    openRepository(path: Gio.File): void
    getRepository(): Gitg.Repository | null
    setRepository(value?: Gitg.Repository | null): void
    getMessageBus(): MessageBus
    getCurrentActivity(): Activity | null
    getEnvironment(): Gee.Map
    getNotifications(): Notifications
    getBusy(): boolean
    setBusy(value: boolean): void
    getRemoteLookup(): RemoteLookup
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
    /* Signals of GitgExt-1.0.GitgExt.Application */
    connect(sigName: "repository-changed-externally", callback: (($obj: Application, hint: ExternalChangeHint) => void)): number
    on(sigName: "repository-changed-externally", callback: (hint: ExternalChangeHint) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "repository-changed-externally", callback: (hint: ExternalChangeHint) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "repository-changed-externally", callback: (hint: ExternalChangeHint) => void): NodeJS.EventEmitter
    emit(sigName: "repository-changed-externally", hint: ExternalChangeHint): void
    connect(sigName: "repository-commits-changed", callback: (($obj: Application) => void)): number
    on(sigName: "repository-commits-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "repository-commits-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "repository-commits-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "repository-commits-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::repository", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repository", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repository", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repository", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repository", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-bus", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-bus", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-activity", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-activity", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-activity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-activity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-activity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::environment", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::environment", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::environment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::environment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::environment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::notifications", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notifications", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::notifications", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::notifications", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::notifications", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::busy", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::busy", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remote-lookup", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-lookup", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remote-lookup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remote-lookup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remote-lookup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Application_ConstructProps)
    _init (config?: Application_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CommandLine_ConstructProps extends GObject.Object_ConstructProps {
}
export class CommandLine {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.CommandLine */
    getOptionGroup(): GLib.OptionGroup
    parseFinished(): void
    apply(application: Application): void
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
    connect(sigName: "notify", callback: (($obj: CommandLine, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CommandLine_ConstructProps)
    _init (config?: CommandLine_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CommitAction_ConstructProps extends Action_ConstructProps {
    actionInterface?: RefActionInterface
    commit?: Gitg.Commit
}
export class CommitAction {
    /* Properties of GitgExt-1.0.GitgExt.CommitAction */
    actionInterface: RefActionInterface
    commit: Gitg.Commit
    /* Properties of GitgExt-1.0.GitgExt.UIElement */
    application: Application
    readonly id: string
    readonly displayName: string
    readonly description: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.CommitAction */
    getActionInterface(): RefActionInterface
    setActionInterface(value: RefActionInterface): void
    getCommit(): Gitg.Commit
    setCommit(value: Gitg.Commit): void
    /* Methods of GitgExt-1.0.GitgExt.Action */
    populateMenu(menu: Gtk.Menu): void
    /* Methods of GitgExt-1.0.GitgExt.UIElement */
    negotiateOrder(other: UIElement): number
    getApplication(): Application | null
    setApplication(value?: Application | null): void
    getId(): string
    getDisplayName(): string
    getDescription(): string
    getIcon(): string | null
    getWidget(): Gtk.Widget | null
    getShortcut(): number | null
    getAvailable(): boolean
    getEnabled(): boolean
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
    /* Signals of GitgExt-1.0.GitgExt.CommitAction */
    connect(sigName: "finished", callback: (($obj: CommitAction) => void)): number
    on(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "finished"): void
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
    connect(sigName: "activate", callback: (($obj: CommitAction) => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
    connect(sigName: "activate", callback: (($obj: CommitAction) => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    connect(sigName: "notify::action-interface", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-interface", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::action-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::action-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::action-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::commit", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: CommitAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CommitAction_ConstructProps)
    _init (config?: CommitAction_ConstructProps): void
    static $gtype: GObject.Type
}
export interface HistoryPanel_ConstructProps extends GObject.Object_ConstructProps {
    history?: History
}
export class HistoryPanel {
    /* Properties of GitgExt-1.0.GitgExt.HistoryPanel */
    history: History
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.HistoryPanel */
    getHistory(): History | null
    setHistory(value?: History | null): void
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
    connect(sigName: "notify", callback: (($obj: HistoryPanel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::history", callback: (($obj: HistoryPanel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::history", callback: (($obj: HistoryPanel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HistoryPanel_ConstructProps)
    _init (config?: HistoryPanel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface History_ConstructProps extends GObject.Object_ConstructProps {
}
export class History {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.History */
    foreachSelected(func: ForeachCommitSelectionFunc): void
    select(commit: Gitg.Commit): void
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
    /* Signals of GitgExt-1.0.GitgExt.History */
    connect(sigName: "selection-changed", callback: (($obj: History) => void)): number
    on(sigName: "selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "selection-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: History, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: History_ConstructProps)
    _init (config?: History_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Notification_ConstructProps extends GObject.Object_ConstructProps {
}
export class Notification {
    /* Properties of GitgExt-1.0.GitgExt.Notification */
    readonly widget: Gtk.Widget
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Notification */
    getWidget(): Gtk.Widget | null
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
    /* Signals of GitgExt-1.0.GitgExt.Notification */
    connect(sigName: "close", callback: (($obj: Notification, delay: number) => void)): number
    on(sigName: "close", callback: (delay: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "close", callback: (delay: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "close", callback: (delay: number) => void): NodeJS.EventEmitter
    emit(sigName: "close", delay: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::widget", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::widget", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Notification_ConstructProps)
    _init (config?: Notification_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Notifications_ConstructProps extends GObject.Object_ConstructProps {
}
export class Notifications {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Notifications */
    add(notification: Notification): void
    remove(notification: Notification, delay: number): void
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
    connect(sigName: "notify", callback: (($obj: Notifications, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Notifications_ConstructProps)
    _init (config?: Notifications_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Preferences_ConstructProps extends GObject.Object_ConstructProps {
}
export class Preferences {
    /* Properties of GitgExt-1.0.GitgExt.Preferences */
    readonly id: string
    readonly displayName: string
    readonly widget: Gtk.Widget
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Preferences */
    getId(): string
    getDisplayName(): string
    getWidget(): Gtk.Widget
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
    connect(sigName: "notify", callback: (($obj: Preferences, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::id", callback: (($obj: Preferences, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Preferences, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: (($obj: Preferences, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Preferences, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::widget", callback: (($obj: Preferences, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::widget", callback: (($obj: Preferences, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Preferences_ConstructProps)
    _init (config?: Preferences_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RefActionInterface_ConstructProps extends GObject.Object_ConstructProps {
    application?: Application
}
export class RefActionInterface {
    /* Properties of GitgExt-1.0.GitgExt.RefActionInterface */
    application: Application
    readonly references: Gee.List
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.RefActionInterface */
    addRef(reference: Gitg.Ref): void
    removeRef(reference: Gitg.Ref): void
    replaceRef(oldRef: Gitg.Ref, newRef: Gitg.Ref): void
    setBusy(reference: Gitg.Ref, busy: boolean): void
    editRefName(reference: Gitg.Ref, callback: RefNameEditingDone): void
    refresh(): void
    getApplication(): Application
    setApplication(value: Application): void
    getReferences(): Gee.List
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
    connect(sigName: "notify", callback: (($obj: RefActionInterface, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::application", callback: (($obj: RefActionInterface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: RefActionInterface, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::references", callback: (($obj: RefActionInterface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::references", callback: (($obj: RefActionInterface, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::references", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::references", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::references", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RefActionInterface_ConstructProps)
    _init (config?: RefActionInterface_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RefAction_ConstructProps extends Action_ConstructProps {
    actionInterface?: RefActionInterface
    reference?: Gitg.Ref
}
export class RefAction {
    /* Properties of GitgExt-1.0.GitgExt.RefAction */
    actionInterface: RefActionInterface
    reference: Gitg.Ref
    /* Properties of GitgExt-1.0.GitgExt.UIElement */
    application: Application
    readonly id: string
    readonly displayName: string
    readonly description: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.RefAction */
    getActionInterface(): RefActionInterface
    setActionInterface(value: RefActionInterface): void
    getReference(): Gitg.Ref
    setReference(value: Gitg.Ref): void
    /* Methods of GitgExt-1.0.GitgExt.Action */
    populateMenu(menu: Gtk.Menu): void
    /* Methods of GitgExt-1.0.GitgExt.UIElement */
    negotiateOrder(other: UIElement): number
    getApplication(): Application | null
    setApplication(value?: Application | null): void
    getId(): string
    getDisplayName(): string
    getDescription(): string
    getIcon(): string | null
    getWidget(): Gtk.Widget | null
    getShortcut(): number | null
    getAvailable(): boolean
    getEnabled(): boolean
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
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
    connect(sigName: "activate", callback: (($obj: RefAction) => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
    connect(sigName: "activate", callback: (($obj: RefAction) => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    connect(sigName: "notify::action-interface", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-interface", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::action-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::action-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::action-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reference", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reference", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reference", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reference", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reference", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: RefAction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RefAction_ConstructProps)
    _init (config?: RefAction_ConstructProps): void
    static $gtype: GObject.Type
}
export interface RemoteLookup_ConstructProps extends GObject.Object_ConstructProps {
}
export class RemoteLookup {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.RemoteLookup */
    lookup(name: string): Gitg.Remote | null
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
    connect(sigName: "notify", callback: (($obj: RemoteLookup, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: RemoteLookup_ConstructProps)
    _init (config?: RemoteLookup_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Searchable_ConstructProps extends GObject.Object_ConstructProps {
    searchText?: string
    searchVisible?: boolean
    searchEntry?: Gtk.Entry
}
export class Searchable {
    /* Properties of GitgExt-1.0.GitgExt.Searchable */
    searchText: string
    searchVisible: boolean
    readonly searchAvailable: boolean
    searchEntry: Gtk.Entry
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Searchable */
    getSearchText(): string
    setSearchText(value: string): void
    getSearchVisible(): boolean
    setSearchVisible(value: boolean): void
    getSearchAvailable(): boolean
    setSearchEntry(value?: Gtk.Entry | null): void
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
    connect(sigName: "notify", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::search-text", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-text", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-visible", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-visible", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-available", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-available", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-entry", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-entry", callback: (($obj: Searchable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-entry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-entry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-entry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Searchable_ConstructProps)
    _init (config?: Searchable_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Selectable_ConstructProps extends GObject.Object_ConstructProps {
    selectableMode?: SelectionMode
}
export class Selectable {
    /* Properties of GitgExt-1.0.GitgExt.Selectable */
    selectableMode: SelectionMode
    readonly selectableAvailable: boolean
    readonly selectableModeTooltip: string
    readonly actionWidget: Gtk.Widget
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Selectable */
    getSelectableMode(): SelectionMode
    setSelectableMode(value: SelectionMode): void
    getSelectableAvailable(): boolean
    getSelectableModeTooltip(): string
    getActionWidget(): Gtk.Widget | null
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
    connect(sigName: "notify", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::selectable-mode", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable-mode", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selectable-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selectable-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selectable-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::selectable-available", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable-available", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selectable-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selectable-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selectable-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::selectable-mode-tooltip", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable-mode-tooltip", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selectable-mode-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selectable-mode-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selectable-mode-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::action-widget", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-widget", callback: (($obj: Selectable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::action-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::action-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::action-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Selectable_ConstructProps)
    _init (config?: Selectable_ConstructProps): void
    static $gtype: GObject.Type
}
export interface UIElement_ConstructProps extends GObject.Object_ConstructProps {
    application?: Application
}
export class UIElement {
    /* Properties of GitgExt-1.0.GitgExt.UIElement */
    application: Application
    readonly id: string
    readonly displayName: string
    readonly description: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.UIElement */
    negotiateOrder(other: UIElement): number
    getApplication(): Application | null
    setApplication(value?: Application | null): void
    getId(): string
    getDisplayName(): string
    getDescription(): string
    getIcon(): string | null
    getWidget(): Gtk.Widget | null
    getShortcut(): number | null
    getAvailable(): boolean
    getEnabled(): boolean
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
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
    connect(sigName: "activate", callback: (($obj: UIElement) => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::application", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: UIElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UIElement_ConstructProps)
    _init (config?: UIElement_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CommandLines_ConstructProps extends GObject.Object_ConstructProps {
}
export class CommandLines {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.CommandLines */
    getFor(tType: GObject.Type, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify): object | null
    parseFinished(): void
    apply(application: Application): void
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
    connect(sigName: "notify", callback: (($obj: CommandLines, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: CommandLines_ConstructProps)
    _init (config?: CommandLines_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(commandLines: CommandLine[]): CommandLines
    static $gtype: GObject.Type
}
export interface MessageBus_ConstructProps extends GObject.Object_ConstructProps {
}
export class MessageBus {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.MessageBus */
    lookup(id: MessageId): GObject.Type
    register(messageType: GObject.Type, id: MessageId): void
    unregister(id: MessageId): void
    unregisterAll(objectPath: string): void
    isRegistered(id: MessageId): boolean
    connect(id: MessageId, callback: MessageCallback): number
    disconnect(id: number): void
    block(id: number): void
    unblock(id: number): void
    sendMessage(message: Message): Message
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
    /* Signals of GitgExt-1.0.GitgExt.MessageBus */
    connect(sigName: "registered", callback: (($obj: MessageBus, id: MessageId) => void)): number
    on(sigName: "registered", callback: (id: MessageId) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "registered", callback: (id: MessageId) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "registered", callback: (id: MessageId) => void): NodeJS.EventEmitter
    emit(sigName: "registered", id: MessageId): void
    connect(sigName: "unregistered", callback: (($obj: MessageBus, id: MessageId) => void)): number
    on(sigName: "unregistered", callback: (id: MessageId) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unregistered", callback: (id: MessageId) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unregistered", callback: (id: MessageId) => void): NodeJS.EventEmitter
    emit(sigName: "unregistered", id: MessageId): void
    connect(sigName: "dispatch", callback: (($obj: MessageBus, message: Message) => void)): number
    on(sigName: "dispatch", callback: (message: Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dispatch", callback: (message: Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dispatch", callback: (message: Message) => void): NodeJS.EventEmitter
    emit(sigName: "dispatch", message: Message): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MessageBus, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MessageBus_ConstructProps)
    _init (config?: MessageBus_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MessageBus
    static getDefault(): MessageBus
    static $gtype: GObject.Type
}
export interface MessageId_ConstructProps extends GObject.Object_ConstructProps {
    objectPath?: string
    method?: string
}
export class MessageId {
    /* Properties of GitgExt-1.0.GitgExt.MessageId */
    objectPath: string
    method: string
    readonly id: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.MessageId */
    hash(): number
    equal(other: MessageId): boolean
    copy(): MessageId
    getObjectPath(): string
    setObjectPath(value: string): void
    getMethod(): string
    setMethod(value: string): void
    getId(): string
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
    connect(sigName: "notify", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::object-path", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::method", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MessageId, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MessageId_ConstructProps)
    _init (config?: MessageId_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(objectPath: string, method: string): MessageId
    static validObjectPath(path: string): boolean
    static $gtype: GObject.Type
}
export interface Message_ConstructProps extends GObject.Object_ConstructProps {
    id?: MessageId
}
export class Message {
    /* Properties of GitgExt-1.0.GitgExt.Message */
    id: MessageId
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Message */
    has(propname: string): boolean
    getId(): MessageId
    setId(value: MessageId): void
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
    connect(sigName: "notify", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::id", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Message_ConstructProps)
    _init (config?: Message_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static typeHas(type: GObject.Type, propname: string): boolean
    static typeCheck(type: GObject.Type, propname: string, valueType: GObject.Type): boolean
    static $gtype: GObject.Type
}
export class UI {
    /* Fields of GitgExt-1.0.GitgExt.UI */
    refCount: number
    static name: string
    static new(): UI
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): UI
}
export interface UserQueryResponse_ConstructProps extends GObject.Object_ConstructProps {
}
export class UserQueryResponse {
    /* Fields of GitgExt-1.0.GitgExt.UserQueryResponse */
    text: string
    responseType: Gtk.ResponseType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: UserQueryResponse, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: UserQueryResponse_ConstructProps)
    _init (config?: UserQueryResponse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(text: string, responseType: Gtk.ResponseType): UserQueryResponse
    static $gtype: GObject.Type
}
export interface UserQuery_ConstructProps extends GObject.Object_ConstructProps {
    title?: string
    message?: string
    messageType?: Gtk.MessageType
    defaultResponse?: Gtk.ResponseType
    defaultIsDestructive?: boolean
    messageUseMarkup?: boolean
}
export class UserQuery {
    /* Properties of GitgExt-1.0.GitgExt.UserQuery */
    title: string
    message: string
    messageType: Gtk.MessageType
    defaultResponse: Gtk.ResponseType
    defaultIsDestructive: boolean
    messageUseMarkup: boolean
    /* Fields of GitgExt-1.0.GitgExt.UserQuery */
    responses: UserQueryResponse[]
    responsesLength1: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.UserQuery */
    getResponses(): UserQueryResponse[]
    setResponses(value: UserQueryResponse[]): void
    getTitle(): string
    setTitle(value: string): void
    getMessage(): string
    setMessage(value: string): void
    getMessageType(): Gtk.MessageType
    setMessageType(value: Gtk.MessageType): void
    getDefaultResponse(): Gtk.ResponseType
    setDefaultResponse(value: Gtk.ResponseType): void
    getDefaultIsDestructive(): boolean
    setDefaultIsDestructive(value: boolean): void
    getMessageUseMarkup(): boolean
    setMessageUseMarkup(value: boolean): void
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
    /* Signals of GitgExt-1.0.GitgExt.UserQuery */
    connect(sigName: "quit", callback: (($obj: UserQuery) => void)): number
    on(sigName: "quit", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "quit", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "quit", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "quit"): void
    connect(sigName: "response", callback: (($obj: UserQuery, responseType: Gtk.ResponseType) => boolean)): number
    on(sigName: "response", callback: (responseType: Gtk.ResponseType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "response", callback: (responseType: Gtk.ResponseType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "response", callback: (responseType: Gtk.ResponseType) => void): NodeJS.EventEmitter
    emit(sigName: "response", responseType: Gtk.ResponseType): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::title", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-type", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-type", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-response", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-response", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-is-destructive", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-is-destructive", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-is-destructive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-is-destructive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-is-destructive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-use-markup", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-use-markup", callback: (($obj: UserQuery, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UserQuery_ConstructProps)
    _init (config?: UserQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UserQuery
    static $gtype: GObject.Type
}
export abstract class CommandLinesClass {
    static name: string
}
export class CommandLinesPrivate {
    static name: string
}
export abstract class MessageBusClass {
    /* Fields of GitgExt-1.0.GitgExt.MessageBusClass */
    dispatch: (message: Message) => void
    static name: string
}
export class MessageBusPrivate {
    static name: string
}
export abstract class MessageIdClass {
    static name: string
}
export class MessageIdPrivate {
    static name: string
}
export abstract class MessageClass {
    static name: string
}
export class MessagePrivate {
    static name: string
}
export abstract class UIClass {
    static name: string
}
export class UIPrivate {
    static name: string
}
export abstract class UserQueryResponseClass {
    static name: string
}
export class UserQueryResponsePrivate {
    static name: string
}
export abstract class UserQueryClass {
    static name: string
}
export class UserQueryPrivate {
    static name: string
}
export abstract class ActionIface {
    /* Fields of GitgExt-1.0.GitgExt.ActionIface */
    populateMenu: (menu: Gtk.Menu) => void
    static name: string
}
export abstract class ActivityIface {
    /* Fields of GitgExt-1.0.GitgExt.ActivityIface */
    isDefaultFor: (action: string) => boolean
    onKeyPressed: (event: Gdk.EventKey) => boolean
    static name: string
}
export abstract class ApplicationIface {
    /* Fields of GitgExt-1.0.GitgExt.ApplicationIface */
    getVerifiedCommitter: () => Ggit.Signature | null
    getActivityById: (id: string) => Activity | null
    setActivityById: (id: string) => Activity | null
    userQuery: (query: UserQuery) => void
    userQueryAsync: (query: UserQuery, callback?: Gio.AsyncReadyCallback | null) => void
    userQueryFinish: (res: Gio.AsyncResult) => Gtk.ResponseType
    showInfobar: (primaryMsg: string, secondaryMsg: string, type: Gtk.MessageType) => void
    openNew: (repository: Ggit.Repository, hint?: string | null) => Application
    openRepository: (path: Gio.File) => void
    getRepository: () => Gitg.Repository | null
    setRepository: (value?: Gitg.Repository | null) => void
    getMessageBus: () => MessageBus
    getCurrentActivity: () => Activity | null
    getEnvironment: () => Gee.Map
    getNotifications: () => Notifications
    getBusy: () => boolean
    setBusy: (value: boolean) => void
    getRemoteLookup: () => RemoteLookup
    static name: string
}
export abstract class CommandLineIface {
    /* Fields of GitgExt-1.0.GitgExt.CommandLineIface */
    getOptionGroup: () => GLib.OptionGroup
    parseFinished: () => void
    apply: (application: Application) => void
    static name: string
}
export abstract class CommitActionIface {
    /* Fields of GitgExt-1.0.GitgExt.CommitActionIface */
    getActionInterface: () => RefActionInterface
    setActionInterface: (value: RefActionInterface) => void
    getCommit: () => Gitg.Commit
    setCommit: (value: Gitg.Commit) => void
    static name: string
}
export abstract class HistoryPanelIface {
    /* Fields of GitgExt-1.0.GitgExt.HistoryPanelIface */
    getHistory: () => History | null
    setHistory: (value?: History | null) => void
    static name: string
}
export abstract class HistoryIface {
    /* Fields of GitgExt-1.0.GitgExt.HistoryIface */
    foreachSelected: (func: ForeachCommitSelectionFunc) => void
    select: (commit: Gitg.Commit) => void
    static name: string
}
export abstract class NotificationIface {
    /* Fields of GitgExt-1.0.GitgExt.NotificationIface */
    getWidget: () => Gtk.Widget | null
    static name: string
}
export abstract class NotificationsIface {
    /* Fields of GitgExt-1.0.GitgExt.NotificationsIface */
    add: (notification: Notification) => void
    remove: (notification: Notification, delay: number) => void
    static name: string
}
export abstract class PreferencesIface {
    /* Fields of GitgExt-1.0.GitgExt.PreferencesIface */
    getId: () => string
    getDisplayName: () => string
    getWidget: () => Gtk.Widget
    static name: string
}
export abstract class RefActionInterfaceIface {
    /* Fields of GitgExt-1.0.GitgExt.RefActionInterfaceIface */
    addRef: (reference: Gitg.Ref) => void
    removeRef: (reference: Gitg.Ref) => void
    replaceRef: (oldRef: Gitg.Ref, newRef: Gitg.Ref) => void
    setBusy: (reference: Gitg.Ref, busy: boolean) => void
    editRefName: (reference: Gitg.Ref, callback: RefNameEditingDone) => void
    refresh: () => void
    getApplication: () => Application
    setApplication: (value: Application) => void
    getReferences: () => Gee.List
    static name: string
}
export abstract class RefActionIface {
    /* Fields of GitgExt-1.0.GitgExt.RefActionIface */
    getActionInterface: () => RefActionInterface
    setActionInterface: (value: RefActionInterface) => void
    getReference: () => Gitg.Ref
    setReference: (value: Gitg.Ref) => void
    static name: string
}
export abstract class RemoteLookupIface {
    /* Fields of GitgExt-1.0.GitgExt.RemoteLookupIface */
    lookup: (name: string) => Gitg.Remote | null
    static name: string
}
export abstract class SearchableIface {
    /* Fields of GitgExt-1.0.GitgExt.SearchableIface */
    getSearchText: () => string
    setSearchText: (value: string) => void
    getSearchVisible: () => boolean
    setSearchVisible: (value: boolean) => void
    getSearchAvailable: () => boolean
    setSearchEntry: (value?: Gtk.Entry | null) => void
    static name: string
}
export abstract class SelectableIface {
    /* Fields of GitgExt-1.0.GitgExt.SelectableIface */
    getSelectableMode: () => SelectionMode
    setSelectableMode: (value: SelectionMode) => void
    getSelectableAvailable: () => boolean
    getSelectableModeTooltip: () => string
    getActionWidget: () => Gtk.Widget | null
    static name: string
}
export abstract class UIElementIface {
    /* Fields of GitgExt-1.0.GitgExt.UIElementIface */
    negotiateOrder: (other: UIElement) => number
    getApplication: () => Application | null
    setApplication: (value?: Application | null) => void
    getId: () => string
    getDisplayName: () => string
    getDescription: () => string
    getIcon: () => string | null
    getWidget: () => Gtk.Widget | null
    getShortcut: () => number | null
    getAvailable: () => boolean
    getEnabled: () => boolean
    static name: string
}
}