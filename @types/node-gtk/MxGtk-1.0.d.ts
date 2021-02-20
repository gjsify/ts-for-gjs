/**
 * MxGtk-1.0
 */

import "node"
import type { cairo } from './cairo-1.0';
import type { Pango } from './Pango-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gtk } from './Gtk-2.0';
import type { Gdk } from './Gdk-2.0';
import type { Gio } from './Gio-2.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { GModule } from './GModule-2.0';
import type { Atk } from './Atk-1.0';

export declare namespace MxGtk {

export interface Frame_ConstructProps extends Gtk.Frame_ConstructProps {
}
export class Frame {
    /* Properties of Gtk.Frame */
    label: string
    labelWidget: Gtk.Widget
    labelXalign: number
    labelYalign: number
    shadow: Gtk.ShadowType
    shadowType: Gtk.ShadowType
    /* Properties of Gtk.Container */
    borderWidth: number
    child: Gtk.Widget
    resizeMode: Gtk.ResizeMode
    /* Properties of Gtk.Widget */
    appPaintable: boolean
    canDefault: boolean
    canFocus: boolean
    readonly compositeChild: boolean
    doubleBuffered: boolean
    events: Gdk.EventMask
    extensionEvents: Gdk.ExtensionMode
    hasDefault: boolean
    hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    isFocus: boolean
    name: string
    noShowAll: boolean
    parent: Gtk.Container
    receivesDefault: boolean
    sensitive: boolean
    style: Gtk.Style
    tooltipMarkup: string
    tooltipText: string
    visible: boolean
    widthRequest: number
    readonly window: Gdk.Window
    /* Properties of Gtk.Object */
    userData: object
    /* Fields of Gtk.Frame */
    bin: Gtk.Bin
    childAllocation: Gtk.Allocation
    /* Fields of Gtk.Bin */
    container: Gtk.Container
    /* Fields of Gtk.Container */
    widget: Gtk.Widget
    focusChild: Gtk.Widget
    /* Fields of Gtk.Widget */
    object: Gtk.Object
    privateFlags: number
    state: number
    savedState: number
    requisition: Gtk.Requisition
    allocation: Gtk.Allocation
    /* Fields of Gtk.Object */
    parentInstance: GObject.InitiallyUnowned
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gtk.Frame */
    getLabel(): string
    getLabelAlign(): [ /* xalign */ number | null, /* yalign */ number | null ]
    getLabelWidget(): Gtk.Widget
    getShadowType(): Gtk.ShadowType
    setLabel(label?: string | null): void
    setLabelAlign(xalign: number, yalign: number): void
    setLabelWidget(labelWidget: Gtk.Widget): void
    setShadowType(type: Gtk.ShadowType): void
    /* Methods of Gtk.Bin */
    getChild(): Gtk.Widget
    /* Methods of Gtk.Container */
    add(widget: Gtk.Widget): void
    checkResize(): void
    childGetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childSetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childType(): GObject.Type
    foreach(callback: Gtk.Callback): void
    getBorderWidth(): number
    getChildren(): Gtk.Widget[]
    getFocusChain(): [ /* returnType */ boolean, /* focusableWidgets */ Gtk.Widget[] ]
    getFocusChild(): Gtk.Widget
    getFocusHadjustment(): Gtk.Adjustment
    getFocusVadjustment(): Gtk.Adjustment
    getResizeMode(): Gtk.ResizeMode
    propagateExpose(child: Gtk.Widget, event: Gdk.EventExpose): void
    remove(widget: Gtk.Widget): void
    resizeChildren(): void
    setBorderWidth(borderWidth: number): void
    setFocusChain(focusableWidgets: Gtk.Widget[]): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusHadjustment(adjustment: Gtk.Adjustment): void
    setFocusVadjustment(adjustment: Gtk.Adjustment): void
    setReallocateRedraws(needsRedraws: boolean): void
    setResizeMode(resizeMode: Gtk.ResizeMode): void
    unsetFocusChain(): void
    /* Methods of Gtk.Widget */
    activate(): boolean
    addAccelerator(accelSignal: string, accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType, accelFlags: Gtk.AccelFlags): void
    addEvents(events: number): void
    addMnemonicLabel(label: Gtk.Widget): void
    canActivateAccel(signalId: number): boolean
    childFocus(direction: Gtk.DirectionType): boolean
    childNotify(childProperty: string): void
    classPath(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    createPangoContext(): Pango.Context
    createPangoLayout(text: string): Pango.Layout
    destroy(): void
    destroyed(widgetPointer: Gtk.Widget): /* widgetPointer */ Gtk.Widget
    draw(area: Gdk.Rectangle): void
    ensureStyle(): void
    errorBell(): void
    event(event: Gdk.Event): boolean
    freezeChildNotify(): void
    getAccessible(): Atk.Object
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget
    getAppPaintable(): boolean
    getCanDefault(): boolean
    getCanFocus(): boolean
    getChildRequisition(requisition: Gtk.Requisition): void
    getChildVisible(): boolean
    getClipboard(selection: Gdk.Atom): Gtk.Clipboard
    getColormap(): Gdk.Colormap
    getCompositeName(): string
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getDoubleBuffered(): boolean
    getEvents(): number
    getExtensionEvents(): Gdk.ExtensionMode
    getHasTooltip(): boolean
    getHasWindow(): boolean
    getMapped(): boolean
    getModifierStyle(): Gtk.RcStyle
    getName(): string
    getNoShowAll(): boolean
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget
    getParentWindow(): Gdk.Window
    getPointer(): [ /* x */ number | null, /* y */ number | null ]
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequisition(): /* requisition */ Gtk.Requisition
    getRootWindow(): Gdk.Window
    getScreen(): Gdk.Screen
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getState(): Gtk.StateType
    getStyle(): Gtk.Style
    getTooltipMarkup(): string
    getTooltipText(): string
    getTooltipWindow(): Gtk.Window
    getToplevel(): Gtk.Widget
    getVisible(): boolean
    getVisual(): Gdk.Visual
    getWindow(): Gdk.Window
    grabDefault(): void
    grabFocus(): void
    hasGrab(): boolean
    hasRcStyle(): boolean
    hasScreen(): boolean
    hide(): void
    hideAll(): void
    hideOnDelete(): boolean
    inputShapeCombineMask(shapeMask: Gdk.Bitmap | null, offsetX: number, offsetY: number): void
    intersect(area: Gdk.Rectangle, intersection: Gdk.Rectangle): boolean
    isAncestor(ancestor: Gtk.Widget): boolean
    isComposited(): boolean
    isDrawable(): boolean
    isSensitive(): boolean
    isToplevel(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listAccelClosures(): Function[]
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    mnemonicActivate(groupCycling: boolean): boolean
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyCursor(primary: Gdk.Color, secondary: Gdk.Color): void
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyFont(fontDesc?: Pango.FontDescription | null): void
    modifyStyle(style: Gtk.RcStyle): void
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    path(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    queueClear(): void
    queueClearArea(x: number, y: number, width: number, height: number): void
    queueDraw(): void
    queueDrawArea(x: number, y: number, width: number, height: number): void
    queueResize(): void
    queueResizeNoRedraw(): void
    realize(): void
    removeAccelerator(accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType): boolean
    removeMnemonicLabel(label: Gtk.Widget): void
    renderIcon(stockId: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf
    reparent(newParent: Gtk.Widget): void
    resetRcStyles(): void
    resetShapes(): void
    sendExpose(event: Gdk.Event): number
    sendFocusChange(event: Gdk.Event): boolean
    setAccelPath(accelPath?: string | null, accelGroup?: Gtk.AccelGroup | null): void
    setAllocation(allocation: Gtk.Allocation): void
    setAppPaintable(appPaintable: boolean): void
    setCanDefault(canDefault: boolean): void
    setCanFocus(canFocus: boolean): void
    setChildVisible(isVisible: boolean): void
    setColormap(colormap: Gdk.Colormap): void
    setCompositeName(name: string): void
    setDirection(dir: Gtk.TextDirection): void
    setDoubleBuffered(doubleBuffered: boolean): void
    setEvents(events: number): void
    setExtensionEvents(mode: Gdk.ExtensionMode): void
    setHasTooltip(hasTooltip: boolean): void
    setHasWindow(hasWindow: boolean): void
    setMapped(mapped: boolean): void
    setName(name: string): void
    setNoShowAll(noShowAll: boolean): void
    setParent(parent: Gtk.Widget): void
    setParentWindow(parentWindow: Gdk.Window): void
    setRealized(realized: boolean): void
    setReceivesDefault(receivesDefault: boolean): void
    setRedrawOnAllocate(redrawOnAllocate: boolean): void
    setScrollAdjustments(hadjustment?: Gtk.Adjustment | null, vadjustment?: Gtk.Adjustment | null): boolean
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setState(state: Gtk.StateType): void
    setStyle(style?: Gtk.Style | null): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text: string): void
    setTooltipWindow(customWindow?: Gtk.Window | null): void
    setUposition(x: number, y: number): void
    setUsize(width: number, height: number): void
    setVisible(visible: boolean): void
    setWindow(window: Gdk.Window): void
    shapeCombineMask(shapeMask: Gdk.Bitmap | null, offsetX: number, offsetY: number): void
    show(): void
    showAll(): void
    showNow(): void
    sizeAllocate(allocation: Gtk.Allocation): void
    sizeRequest(requisition: Gtk.Requisition): void
    styleAttach(): void
    styleGetProperty(propertyName: string, value: any): void
    thawChildNotify(): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number, /* destY */ number ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unref(): void
    /* Methods of Gtk.Object */
    getData(key: string): object | null
    getDataById(dataId: GLib.Quark): object | null
    getUserData(): object | null
    removeData(key: string): void
    removeDataById(dataId: GLib.Quark): void
    removeNoNotify(key: string): void
    removeNoNotifyById(keyId: GLib.Quark): void
    setData(key: string, data?: object | null): void
    setDataById(dataId: GLib.Quark, data?: object | null): void
    setDataByIdFull(dataId: GLib.Quark, data: object | null, destroy: GLib.DestroyNotify): void
    setDataFull(key: string, data: object | null, destroy: GLib.DestroyNotify): void
    setUserData(data?: object | null): void
    sink(): void
    weakref(notify: GLib.DestroyNotify, data?: object | null): void
    weakunref(notify: GLib.DestroyNotify, data?: object | null): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gtk.Buildable */
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    /* Virtual methods of MxGtk.Frame */
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncConstructChild(builder: Gtk.Builder, name: string): GObject.Object
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncGetName(): string
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetName(name: string): void
    /* Virtual methods of Gtk.Frame */
    vfuncComputeChildAllocation(allocation: Gtk.Allocation): void
    /* Virtual methods of Gtk.Container */
    vfuncAdd(widget: Gtk.Widget): void
    vfuncCheckResize(): void
    vfuncChildType(): GObject.Type
    vfuncCompositeName(child: Gtk.Widget): string
    vfuncGetChildProperty(child: Gtk.Widget, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncRemove(widget: Gtk.Widget): void
    vfuncSetChildProperty(child: Gtk.Widget, propertyId: number, value: any, pspec: GObject.ParamSpec): void
    vfuncSetFocusChild(widget: Gtk.Widget): void
    /* Virtual methods of Gtk.Widget */
    vfuncButtonPressEvent(event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent(event: Gdk.EventButton): boolean
    vfuncCanActivateAccel(signalId: number): boolean
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncClientEvent(event: Gdk.EventClient): boolean
    vfuncCompositedChanged(): void
    vfuncConfigureEvent(event: Gdk.EventConfigure): boolean
    vfuncDeleteEvent(event: Gdk.EventAny): boolean
    vfuncDestroyEvent(event: Gdk.EventAny): boolean
    vfuncDirectionChanged(previousDirection: Gtk.TextDirection): void
    vfuncDispatchChildPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDragBegin(context: Gdk.DragContext): void
    vfuncDragDataDelete(context: Gdk.DragContext): void
    vfuncDragDataGet(context: Gdk.DragContext, selectionData: Gtk.SelectionData, info: number, time: number): void
    vfuncDragDataReceived(context: Gdk.DragContext, x: number, y: number, selectionData: Gtk.SelectionData, info: number, time: number): void
    vfuncDragDrop(context: Gdk.DragContext, x: number, y: number, time: number): boolean
    vfuncDragEnd(context: Gdk.DragContext): void
    vfuncDragLeave(context: Gdk.DragContext, time: number): void
    vfuncDragMotion(context: Gdk.DragContext, x: number, y: number, time: number): boolean
    vfuncEnterNotifyEvent(event: Gdk.EventCrossing): boolean
    vfuncEvent(event: Gdk.Event): boolean
    vfuncExposeEvent(event: Gdk.EventExpose): boolean
    vfuncFocus(direction: Gtk.DirectionType): boolean
    vfuncFocusInEvent(event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent(event: Gdk.EventFocus): boolean
    vfuncGetAccessible(): Atk.Object
    vfuncGrabBrokenEvent(event: Gdk.EventGrabBroken): boolean
    vfuncGrabFocus(): void
    vfuncGrabNotify(wasGrabbed: boolean): void
    vfuncHide(): void
    vfuncHideAll(): void
    vfuncHierarchyChanged(previousToplevel: Gtk.Widget): void
    vfuncKeyPressEvent(event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent(event: Gdk.EventKey): boolean
    vfuncLeaveNotifyEvent(event: Gdk.EventCrossing): boolean
    vfuncMap(): void
    vfuncMapEvent(event: Gdk.EventAny): boolean
    vfuncMnemonicActivate(groupCycling: boolean): boolean
    vfuncMotionNotifyEvent(event: Gdk.EventMotion): boolean
    vfuncNoExposeEvent(event: Gdk.EventAny): boolean
    vfuncParentSet(previousParent: Gtk.Widget): void
    vfuncPopupMenu(): boolean
    vfuncPropertyNotifyEvent(event: Gdk.EventProperty): boolean
    vfuncProximityInEvent(event: Gdk.EventProximity): boolean
    vfuncProximityOutEvent(event: Gdk.EventProximity): boolean
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncRealize(): void
    vfuncScreenChanged(previousScreen: Gdk.Screen): void
    vfuncScrollEvent(event: Gdk.EventScroll): boolean
    vfuncSelectionClearEvent(event: Gdk.EventSelection): boolean
    vfuncSelectionGet(selectionData: Gtk.SelectionData, info: number, time: number): void
    vfuncSelectionNotifyEvent(event: Gdk.EventSelection): boolean
    vfuncSelectionReceived(selectionData: Gtk.SelectionData, time: number): void
    vfuncSelectionRequestEvent(event: Gdk.EventSelection): boolean
    vfuncShow(): void
    vfuncShowAll(): void
    vfuncShowHelp(helpType: Gtk.WidgetHelpType): boolean
    vfuncSizeAllocate(allocation: Gtk.Allocation): void
    vfuncSizeRequest(requisition: Gtk.Requisition): void
    vfuncStateChanged(previousState: Gtk.StateType): void
    vfuncStyleSet(previousStyle: Gtk.Style): void
    vfuncUnmap(): void
    vfuncUnmapEvent(event: Gdk.EventAny): boolean
    vfuncUnrealize(): void
    vfuncVisibilityNotifyEvent(event: Gdk.EventVisibility): boolean
    vfuncWindowStateEvent(event: Gdk.EventWindowState): boolean
    /* Virtual methods of Gtk.Object */
    vfuncDestroy(): void
    vfuncGetArg(arg: Gtk.Arg, argId: number): void
    vfuncSetArg(arg: Gtk.Arg, argId: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: (($obj: Frame, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: Frame, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    on(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "add", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "check-resize", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: Frame) => void)): number
    emit(sigName: "check-resize"): void
    on(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "check-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "remove", callback: (($obj: Frame, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: Frame, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    on(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "set-focus-child", callback: (($obj: Frame, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: Frame, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    on(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "set-focus-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: (($obj: Frame) => void)): number
    emit(sigName: "accel-closures-changed"): void
    on(sigName: "accel-closures-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "accel-closures-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "accel-closures-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-press-event", callback: (($obj: Frame, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Frame, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: Frame, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Frame, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "can-activate-accel", callback: (($obj: Frame, signalId: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: (($obj: Frame, signalId: number) => boolean)): number
    emit(sigName: "can-activate-accel", signalId: number): void
    on(sigName: "can-activate-accel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "can-activate-accel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "can-activate-accel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "client-event", callback: (($obj: Frame, event: Gdk.EventClient) => boolean)): number
    connect_after(sigName: "client-event", callback: (($obj: Frame, event: Gdk.EventClient) => boolean)): number
    emit(sigName: "client-event", event: Gdk.EventClient): void
    on(sigName: "client-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "client-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "client-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "composited-changed", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: Frame) => void)): number
    emit(sigName: "composited-changed"): void
    on(sigName: "composited-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "composited-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "composited-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "configure-event", callback: (($obj: Frame, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: (($obj: Frame, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    on(sigName: "configure-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "configure-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "configure-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "damage-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "damage-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.Event): void
    on(sigName: "damage-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "damage-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "damage-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "delete-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    on(sigName: "delete-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "delete-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "delete-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "destroy-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    on(sigName: "destroy-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: Frame, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Frame, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-begin", callback: (($obj: Frame, dragContext: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: (($obj: Frame, dragContext: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", dragContext: Gdk.DragContext): void
    on(sigName: "drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-data-delete", callback: (($obj: Frame, dragContext: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: (($obj: Frame, dragContext: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", dragContext: Gdk.DragContext): void
    on(sigName: "drag-data-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-data-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-data-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-data-get", callback: (($obj: Frame, dragContext: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: (($obj: Frame, dragContext: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", dragContext: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "drag-data-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-data-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-data-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-data-received", callback: (($obj: Frame, dragContext: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: (($obj: Frame, dragContext: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", dragContext: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "drag-data-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-data-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-data-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-drop", callback: (($obj: Frame, dragContext: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: (($obj: Frame, dragContext: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", dragContext: Gdk.DragContext, x: number, y: number, time: number): void
    on(sigName: "drag-drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-end", callback: (($obj: Frame, dragContext: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: (($obj: Frame, dragContext: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", dragContext: Gdk.DragContext): void
    on(sigName: "drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-failed", callback: (($obj: Frame, dragContext: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: (($obj: Frame, dragContext: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", dragContext: Gdk.DragContext, result: Gtk.DragResult): void
    on(sigName: "drag-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-leave", callback: (($obj: Frame, dragContext: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: (($obj: Frame, dragContext: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", dragContext: Gdk.DragContext, time: number): void
    on(sigName: "drag-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-motion", callback: (($obj: Frame, dragContext: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: (($obj: Frame, dragContext: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", dragContext: Gdk.DragContext, x: number, y: number, time: number): void
    on(sigName: "drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-notify-event", callback: (($obj: Frame, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: Frame, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    on(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event-after", callback: (($obj: Frame, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: (($obj: Frame, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    on(sigName: "event-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "expose-event", callback: (($obj: Frame, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "expose-event", callback: (($obj: Frame, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "expose-event", event: Gdk.EventExpose): void
    on(sigName: "expose-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "expose-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "expose-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus", callback: (($obj: Frame, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: (($obj: Frame, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    on(sigName: "focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-in-event", callback: (($obj: Frame, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: Frame, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    on(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-out-event", callback: (($obj: Frame, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: Frame, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    on(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-broken-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.Event): void
    on(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-focus", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "grab-focus", callback: (($obj: Frame) => void)): number
    emit(sigName: "grab-focus"): void
    on(sigName: "grab-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-notify", callback: (($obj: Frame, wasGrabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: (($obj: Frame, wasGrabbed: boolean) => void)): number
    emit(sigName: "grab-notify", wasGrabbed: boolean): void
    on(sigName: "grab-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "hide", callback: (($obj: Frame) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hierarchy-changed", callback: (($obj: Frame, previousToplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: (($obj: Frame, previousToplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previousToplevel?: Gtk.Widget | null): void
    on(sigName: "hierarchy-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hierarchy-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hierarchy-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: Frame, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: Frame, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: Frame, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: Frame, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: Frame, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: Frame, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-notify-event", callback: (($obj: Frame, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: Frame, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    on(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "map", callback: (($obj: Frame) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map-event", callback: (($obj: Frame, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: (($obj: Frame, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    on(sigName: "map-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: Frame, arg1: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: Frame, arg1: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", arg1: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-notify-event", callback: (($obj: Frame, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: Frame, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    on(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: Frame, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: Frame, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "no-expose-event", callback: (($obj: Frame, event: Gdk.EventNoExpose) => boolean)): number
    connect_after(sigName: "no-expose-event", callback: (($obj: Frame, event: Gdk.EventNoExpose) => boolean)): number
    emit(sigName: "no-expose-event", event: Gdk.EventNoExpose): void
    on(sigName: "no-expose-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-expose-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-expose-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "parent-set", callback: (($obj: Frame, oldParent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Frame, oldParent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", oldParent?: Gtk.Widget | null): void
    on(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "popup-menu", callback: (($obj: Frame) => boolean)): number
    connect_after(sigName: "popup-menu", callback: (($obj: Frame) => boolean)): number
    emit(sigName: "popup-menu"): void
    on(sigName: "popup-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "popup-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "popup-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-notify-event", callback: (($obj: Frame, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: (($obj: Frame, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    on(sigName: "property-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "proximity-in-event", callback: (($obj: Frame, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: (($obj: Frame, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    on(sigName: "proximity-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "proximity-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "proximity-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "proximity-out-event", callback: (($obj: Frame, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: (($obj: Frame, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    on(sigName: "proximity-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "proximity-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "proximity-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: Frame, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: Frame, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "realize", callback: (($obj: Frame) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "screen-changed", callback: (($obj: Frame, previousScreen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: (($obj: Frame, previousScreen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previousScreen?: Gdk.Screen | null): void
    on(sigName: "screen-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "screen-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "screen-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: Frame, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Frame, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-clear-event", callback: (($obj: Frame, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: (($obj: Frame, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    on(sigName: "selection-clear-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-clear-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-clear-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-get", callback: (($obj: Frame, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: (($obj: Frame, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "selection-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-notify-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: (($obj: Frame, event: Gdk.Event) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.Event): void
    on(sigName: "selection-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-received", callback: (($obj: Frame, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: (($obj: Frame, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    on(sigName: "selection-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-request-event", callback: (($obj: Frame, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: (($obj: Frame, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    on(sigName: "selection-request-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-request-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-request-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "show", callback: (($obj: Frame) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show-help", callback: (($obj: Frame, helpType: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: (($obj: Frame, helpType: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", helpType: Gtk.WidgetHelpType): void
    on(sigName: "show-help", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show-help", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show-help", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "size-allocate", callback: (($obj: Frame, allocation: Gdk.Rectangle) => void)): number
    connect_after(sigName: "size-allocate", callback: (($obj: Frame, allocation: Gdk.Rectangle) => void)): number
    emit(sigName: "size-allocate", allocation: Gdk.Rectangle): void
    on(sigName: "size-allocate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "size-allocate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "size-allocate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "size-request", callback: (($obj: Frame, requisition: Gtk.Requisition) => void)): number
    connect_after(sigName: "size-request", callback: (($obj: Frame, requisition: Gtk.Requisition) => void)): number
    emit(sigName: "size-request", requisition: Gtk.Requisition): void
    on(sigName: "size-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "size-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "size-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-changed", callback: (($obj: Frame, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: Frame, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "style-set", callback: (($obj: Frame, previousStyle?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: (($obj: Frame, previousStyle?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previousStyle?: Gtk.Style | null): void
    on(sigName: "style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: Frame) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap-event", callback: (($obj: Frame, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: (($obj: Frame, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    on(sigName: "unmap-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: Frame) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visibility-notify-event", callback: (($obj: Frame, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: (($obj: Frame, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    on(sigName: "visibility-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visibility-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visibility-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "window-state-event", callback: (($obj: Frame, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: (($obj: Frame, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    on(sigName: "window-state-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-state-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-state-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Object */
    connect(sigName: "destroy", callback: (($obj: Frame) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Frame) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label-widget", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label-widget", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label-xalign", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label-xalign", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label-xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label-xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label-xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label-yalign", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label-yalign", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label-yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label-yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label-yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shadow", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shadow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shadow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shadow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shadow-type", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shadow-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shadow-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shadow-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-width", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resize-mode", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-paintable", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-default", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::composite-child", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::double-buffered", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::events", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::extension-events", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extension-events", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::extension-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::extension-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::extension-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-focus", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::no-show-all", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::style", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-data", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-data", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Frame_ConstructProps)
    _init (config?: Frame_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Frame
    static new(label: string): Frame
    static $gtype: GObject.Type
}
export interface LightSwitch_ConstructProps extends Gtk.DrawingArea_ConstructProps {
    active?: boolean
}
export class LightSwitch {
    /* Properties of MxGtk.LightSwitch */
    active: boolean
    /* Properties of Gtk.Widget */
    appPaintable: boolean
    canDefault: boolean
    canFocus: boolean
    readonly compositeChild: boolean
    doubleBuffered: boolean
    events: Gdk.EventMask
    extensionEvents: Gdk.ExtensionMode
    hasDefault: boolean
    hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    isFocus: boolean
    name: string
    noShowAll: boolean
    parent: Gtk.Container
    receivesDefault: boolean
    sensitive: boolean
    style: Gtk.Style
    tooltipMarkup: string
    tooltipText: string
    visible: boolean
    widthRequest: number
    readonly window: Gdk.Window
    /* Properties of Gtk.Object */
    userData: object
    /* Fields of Gtk.DrawingArea */
    widget: Gtk.Widget
    drawData: object
    /* Fields of Gtk.Widget */
    object: Gtk.Object
    privateFlags: number
    state: number
    savedState: number
    requisition: Gtk.Requisition
    allocation: Gtk.Allocation
    /* Fields of Gtk.Object */
    parentInstance: GObject.InitiallyUnowned
    flags: number
    /* Fields of GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of MxGtk.LightSwitch */
    getActive(): boolean
    setActive(active: boolean): void
    /* Methods of Gtk.DrawingArea */
    size(width: number, height: number): void
    /* Methods of Gtk.Widget */
    activate(): boolean
    addAccelerator(accelSignal: string, accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType, accelFlags: Gtk.AccelFlags): void
    addEvents(events: number): void
    addMnemonicLabel(label: Gtk.Widget): void
    canActivateAccel(signalId: number): boolean
    childFocus(direction: Gtk.DirectionType): boolean
    childNotify(childProperty: string): void
    classPath(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    createPangoContext(): Pango.Context
    createPangoLayout(text: string): Pango.Layout
    destroy(): void
    destroyed(widgetPointer: Gtk.Widget): /* widgetPointer */ Gtk.Widget
    draw(area: Gdk.Rectangle): void
    ensureStyle(): void
    errorBell(): void
    event(event: Gdk.Event): boolean
    freezeChildNotify(): void
    getAccessible(): Atk.Object
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget
    getAppPaintable(): boolean
    getCanDefault(): boolean
    getCanFocus(): boolean
    getChildRequisition(requisition: Gtk.Requisition): void
    getChildVisible(): boolean
    getClipboard(selection: Gdk.Atom): Gtk.Clipboard
    getColormap(): Gdk.Colormap
    getCompositeName(): string
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getDoubleBuffered(): boolean
    getEvents(): number
    getExtensionEvents(): Gdk.ExtensionMode
    getHasTooltip(): boolean
    getHasWindow(): boolean
    getMapped(): boolean
    getModifierStyle(): Gtk.RcStyle
    getName(): string
    getNoShowAll(): boolean
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget
    getParentWindow(): Gdk.Window
    getPointer(): [ /* x */ number | null, /* y */ number | null ]
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequisition(): /* requisition */ Gtk.Requisition
    getRootWindow(): Gdk.Window
    getScreen(): Gdk.Screen
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getState(): Gtk.StateType
    getStyle(): Gtk.Style
    getTooltipMarkup(): string
    getTooltipText(): string
    getTooltipWindow(): Gtk.Window
    getToplevel(): Gtk.Widget
    getVisible(): boolean
    getVisual(): Gdk.Visual
    getWindow(): Gdk.Window
    grabDefault(): void
    grabFocus(): void
    hasGrab(): boolean
    hasRcStyle(): boolean
    hasScreen(): boolean
    hide(): void
    hideAll(): void
    hideOnDelete(): boolean
    inputShapeCombineMask(shapeMask: Gdk.Bitmap | null, offsetX: number, offsetY: number): void
    intersect(area: Gdk.Rectangle, intersection: Gdk.Rectangle): boolean
    isAncestor(ancestor: Gtk.Widget): boolean
    isComposited(): boolean
    isDrawable(): boolean
    isSensitive(): boolean
    isToplevel(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listAccelClosures(): Function[]
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    mnemonicActivate(groupCycling: boolean): boolean
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyCursor(primary: Gdk.Color, secondary: Gdk.Color): void
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyFont(fontDesc?: Pango.FontDescription | null): void
    modifyStyle(style: Gtk.RcStyle): void
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    path(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    queueClear(): void
    queueClearArea(x: number, y: number, width: number, height: number): void
    queueDraw(): void
    queueDrawArea(x: number, y: number, width: number, height: number): void
    queueResize(): void
    queueResizeNoRedraw(): void
    realize(): void
    removeAccelerator(accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType): boolean
    removeMnemonicLabel(label: Gtk.Widget): void
    renderIcon(stockId: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf
    reparent(newParent: Gtk.Widget): void
    resetRcStyles(): void
    resetShapes(): void
    sendExpose(event: Gdk.Event): number
    sendFocusChange(event: Gdk.Event): boolean
    setAccelPath(accelPath?: string | null, accelGroup?: Gtk.AccelGroup | null): void
    setAllocation(allocation: Gtk.Allocation): void
    setAppPaintable(appPaintable: boolean): void
    setCanDefault(canDefault: boolean): void
    setCanFocus(canFocus: boolean): void
    setChildVisible(isVisible: boolean): void
    setColormap(colormap: Gdk.Colormap): void
    setCompositeName(name: string): void
    setDirection(dir: Gtk.TextDirection): void
    setDoubleBuffered(doubleBuffered: boolean): void
    setEvents(events: number): void
    setExtensionEvents(mode: Gdk.ExtensionMode): void
    setHasTooltip(hasTooltip: boolean): void
    setHasWindow(hasWindow: boolean): void
    setMapped(mapped: boolean): void
    setName(name: string): void
    setNoShowAll(noShowAll: boolean): void
    setParent(parent: Gtk.Widget): void
    setParentWindow(parentWindow: Gdk.Window): void
    setRealized(realized: boolean): void
    setReceivesDefault(receivesDefault: boolean): void
    setRedrawOnAllocate(redrawOnAllocate: boolean): void
    setScrollAdjustments(hadjustment?: Gtk.Adjustment | null, vadjustment?: Gtk.Adjustment | null): boolean
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setState(state: Gtk.StateType): void
    setStyle(style?: Gtk.Style | null): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text: string): void
    setTooltipWindow(customWindow?: Gtk.Window | null): void
    setUposition(x: number, y: number): void
    setUsize(width: number, height: number): void
    setVisible(visible: boolean): void
    setWindow(window: Gdk.Window): void
    shapeCombineMask(shapeMask: Gdk.Bitmap | null, offsetX: number, offsetY: number): void
    show(): void
    showAll(): void
    showNow(): void
    sizeAllocate(allocation: Gtk.Allocation): void
    sizeRequest(requisition: Gtk.Requisition): void
    styleAttach(): void
    styleGetProperty(propertyName: string, value: any): void
    thawChildNotify(): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number, /* destY */ number ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unref(): void
    /* Methods of Gtk.Object */
    getData(key: string): object | null
    getDataById(dataId: GLib.Quark): object | null
    getUserData(): object | null
    removeData(key: string): void
    removeDataById(dataId: GLib.Quark): void
    removeNoNotify(key: string): void
    removeNoNotifyById(keyId: GLib.Quark): void
    setData(key: string, data?: object | null): void
    setDataById(dataId: GLib.Quark, data?: object | null): void
    setDataByIdFull(dataId: GLib.Quark, data: object | null, destroy: GLib.DestroyNotify): void
    setDataFull(key: string, data: object | null, destroy: GLib.DestroyNotify): void
    setUserData(data?: object | null): void
    sink(): void
    weakref(notify: GLib.DestroyNotify, data?: object | null): void
    weakunref(notify: GLib.DestroyNotify, data?: object | null): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gtk.Buildable */
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    /* Virtual methods of MxGtk.LightSwitch */
    vfuncSwitchFlipped(state: boolean): void
    vfuncAddChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfuncConstructChild(builder: Gtk.Builder, name: string): GObject.Object
    vfuncCustomFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfuncCustomTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    vfuncGetInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    vfuncGetName(): string
    vfuncParserFinished(builder: Gtk.Builder): void
    vfuncSetBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    vfuncSetName(name: string): void
    /* Virtual methods of Gtk.Widget */
    vfuncButtonPressEvent(event: Gdk.EventButton): boolean
    vfuncButtonReleaseEvent(event: Gdk.EventButton): boolean
    vfuncCanActivateAccel(signalId: number): boolean
    vfuncChildNotify(pspec: GObject.ParamSpec): void
    vfuncClientEvent(event: Gdk.EventClient): boolean
    vfuncCompositedChanged(): void
    vfuncConfigureEvent(event: Gdk.EventConfigure): boolean
    vfuncDeleteEvent(event: Gdk.EventAny): boolean
    vfuncDestroyEvent(event: Gdk.EventAny): boolean
    vfuncDirectionChanged(previousDirection: Gtk.TextDirection): void
    vfuncDispatchChildPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDragBegin(context: Gdk.DragContext): void
    vfuncDragDataDelete(context: Gdk.DragContext): void
    vfuncDragDataGet(context: Gdk.DragContext, selectionData: Gtk.SelectionData, info: number, time: number): void
    vfuncDragDataReceived(context: Gdk.DragContext, x: number, y: number, selectionData: Gtk.SelectionData, info: number, time: number): void
    vfuncDragDrop(context: Gdk.DragContext, x: number, y: number, time: number): boolean
    vfuncDragEnd(context: Gdk.DragContext): void
    vfuncDragLeave(context: Gdk.DragContext, time: number): void
    vfuncDragMotion(context: Gdk.DragContext, x: number, y: number, time: number): boolean
    vfuncEnterNotifyEvent(event: Gdk.EventCrossing): boolean
    vfuncEvent(event: Gdk.Event): boolean
    vfuncExposeEvent(event: Gdk.EventExpose): boolean
    vfuncFocus(direction: Gtk.DirectionType): boolean
    vfuncFocusInEvent(event: Gdk.EventFocus): boolean
    vfuncFocusOutEvent(event: Gdk.EventFocus): boolean
    vfuncGetAccessible(): Atk.Object
    vfuncGrabBrokenEvent(event: Gdk.EventGrabBroken): boolean
    vfuncGrabFocus(): void
    vfuncGrabNotify(wasGrabbed: boolean): void
    vfuncHide(): void
    vfuncHideAll(): void
    vfuncHierarchyChanged(previousToplevel: Gtk.Widget): void
    vfuncKeyPressEvent(event: Gdk.EventKey): boolean
    vfuncKeyReleaseEvent(event: Gdk.EventKey): boolean
    vfuncLeaveNotifyEvent(event: Gdk.EventCrossing): boolean
    vfuncMap(): void
    vfuncMapEvent(event: Gdk.EventAny): boolean
    vfuncMnemonicActivate(groupCycling: boolean): boolean
    vfuncMotionNotifyEvent(event: Gdk.EventMotion): boolean
    vfuncNoExposeEvent(event: Gdk.EventAny): boolean
    vfuncParentSet(previousParent: Gtk.Widget): void
    vfuncPopupMenu(): boolean
    vfuncPropertyNotifyEvent(event: Gdk.EventProperty): boolean
    vfuncProximityInEvent(event: Gdk.EventProximity): boolean
    vfuncProximityOutEvent(event: Gdk.EventProximity): boolean
    vfuncQueryTooltip(x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfuncRealize(): void
    vfuncScreenChanged(previousScreen: Gdk.Screen): void
    vfuncScrollEvent(event: Gdk.EventScroll): boolean
    vfuncSelectionClearEvent(event: Gdk.EventSelection): boolean
    vfuncSelectionGet(selectionData: Gtk.SelectionData, info: number, time: number): void
    vfuncSelectionNotifyEvent(event: Gdk.EventSelection): boolean
    vfuncSelectionReceived(selectionData: Gtk.SelectionData, time: number): void
    vfuncSelectionRequestEvent(event: Gdk.EventSelection): boolean
    vfuncShow(): void
    vfuncShowAll(): void
    vfuncShowHelp(helpType: Gtk.WidgetHelpType): boolean
    vfuncSizeAllocate(allocation: Gtk.Allocation): void
    vfuncSizeRequest(requisition: Gtk.Requisition): void
    vfuncStateChanged(previousState: Gtk.StateType): void
    vfuncStyleSet(previousStyle: Gtk.Style): void
    vfuncUnmap(): void
    vfuncUnmapEvent(event: Gdk.EventAny): boolean
    vfuncUnrealize(): void
    vfuncVisibilityNotifyEvent(event: Gdk.EventVisibility): boolean
    vfuncWindowStateEvent(event: Gdk.EventWindowState): boolean
    /* Virtual methods of Gtk.Object */
    vfuncDestroy(): void
    vfuncGetArg(arg: Gtk.Arg, argId: number): void
    vfuncSetArg(arg: Gtk.Arg, argId: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of MxGtk.LightSwitch */
    connect(sigName: "switch-flipped", callback: (($obj: LightSwitch, object: boolean) => void)): number
    connect_after(sigName: "switch-flipped", callback: (($obj: LightSwitch, object: boolean) => void)): number
    emit(sigName: "switch-flipped", object: boolean): void
    on(sigName: "switch-flipped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "switch-flipped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "switch-flipped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "accel-closures-changed"): void
    on(sigName: "accel-closures-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "accel-closures-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "accel-closures-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-press-event", callback: (($obj: LightSwitch, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: LightSwitch, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    on(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "button-release-event", callback: (($obj: LightSwitch, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: LightSwitch, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    on(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "can-activate-accel", callback: (($obj: LightSwitch, signalId: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: (($obj: LightSwitch, signalId: number) => boolean)): number
    emit(sigName: "can-activate-accel", signalId: number): void
    on(sigName: "can-activate-accel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "can-activate-accel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "can-activate-accel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "child-notify", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    on(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "client-event", callback: (($obj: LightSwitch, event: Gdk.EventClient) => boolean)): number
    connect_after(sigName: "client-event", callback: (($obj: LightSwitch, event: Gdk.EventClient) => boolean)): number
    emit(sigName: "client-event", event: Gdk.EventClient): void
    on(sigName: "client-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "client-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "client-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "composited-changed", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "composited-changed"): void
    on(sigName: "composited-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "composited-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "composited-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "configure-event", callback: (($obj: LightSwitch, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: (($obj: LightSwitch, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    on(sigName: "configure-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "configure-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "configure-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "damage-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "damage-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.Event): void
    on(sigName: "damage-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "damage-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "damage-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "delete-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    on(sigName: "delete-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "delete-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "delete-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "destroy-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    on(sigName: "destroy-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "direction-changed", callback: (($obj: LightSwitch, previousDirection: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: LightSwitch, previousDirection: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    on(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-begin", callback: (($obj: LightSwitch, dragContext: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: (($obj: LightSwitch, dragContext: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", dragContext: Gdk.DragContext): void
    on(sigName: "drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-begin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-data-delete", callback: (($obj: LightSwitch, dragContext: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: (($obj: LightSwitch, dragContext: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", dragContext: Gdk.DragContext): void
    on(sigName: "drag-data-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-data-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-data-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-data-get", callback: (($obj: LightSwitch, dragContext: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: (($obj: LightSwitch, dragContext: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", dragContext: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "drag-data-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-data-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-data-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-data-received", callback: (($obj: LightSwitch, dragContext: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: (($obj: LightSwitch, dragContext: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", dragContext: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "drag-data-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-data-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-data-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-drop", callback: (($obj: LightSwitch, dragContext: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: (($obj: LightSwitch, dragContext: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", dragContext: Gdk.DragContext, x: number, y: number, time: number): void
    on(sigName: "drag-drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-end", callback: (($obj: LightSwitch, dragContext: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: (($obj: LightSwitch, dragContext: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", dragContext: Gdk.DragContext): void
    on(sigName: "drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-failed", callback: (($obj: LightSwitch, dragContext: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: (($obj: LightSwitch, dragContext: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", dragContext: Gdk.DragContext, result: Gtk.DragResult): void
    on(sigName: "drag-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-leave", callback: (($obj: LightSwitch, dragContext: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: (($obj: LightSwitch, dragContext: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", dragContext: Gdk.DragContext, time: number): void
    on(sigName: "drag-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-leave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "drag-motion", callback: (($obj: LightSwitch, dragContext: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: (($obj: LightSwitch, dragContext: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", dragContext: Gdk.DragContext, x: number, y: number, time: number): void
    on(sigName: "drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "drag-motion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "enter-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    on(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    on(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "event-after", callback: (($obj: LightSwitch, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: (($obj: LightSwitch, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    on(sigName: "event-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "event-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "event-after", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "expose-event", callback: (($obj: LightSwitch, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "expose-event", callback: (($obj: LightSwitch, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "expose-event", event: Gdk.EventExpose): void
    on(sigName: "expose-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "expose-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "expose-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus", callback: (($obj: LightSwitch, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: (($obj: LightSwitch, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    on(sigName: "focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-in-event", callback: (($obj: LightSwitch, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: LightSwitch, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    on(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "focus-out-event", callback: (($obj: LightSwitch, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: LightSwitch, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    on(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-broken-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.Event): void
    on(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-focus", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "grab-focus", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "grab-focus"): void
    on(sigName: "grab-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "grab-notify", callback: (($obj: LightSwitch, wasGrabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: (($obj: LightSwitch, wasGrabbed: boolean) => void)): number
    emit(sigName: "grab-notify", wasGrabbed: boolean): void
    on(sigName: "grab-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "grab-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "grab-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hide", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "hide", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "hide"): void
    on(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hide", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "hierarchy-changed", callback: (($obj: LightSwitch, previousToplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: (($obj: LightSwitch, previousToplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previousToplevel?: Gtk.Widget | null): void
    on(sigName: "hierarchy-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "hierarchy-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "hierarchy-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-press-event", callback: (($obj: LightSwitch, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: LightSwitch, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    on(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "key-release-event", callback: (($obj: LightSwitch, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: LightSwitch, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    on(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "keynav-failed", callback: (($obj: LightSwitch, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: LightSwitch, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    on(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "leave-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    on(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "map", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "map"): void
    on(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "map-event", callback: (($obj: LightSwitch, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: (($obj: LightSwitch, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    on(sigName: "map-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "map-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "map-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mnemonic-activate", callback: (($obj: LightSwitch, arg1: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: LightSwitch, arg1: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", arg1: boolean): void
    on(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "motion-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    on(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "move-focus", callback: (($obj: LightSwitch, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: LightSwitch, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    on(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "no-expose-event", callback: (($obj: LightSwitch, event: Gdk.EventNoExpose) => boolean)): number
    connect_after(sigName: "no-expose-event", callback: (($obj: LightSwitch, event: Gdk.EventNoExpose) => boolean)): number
    emit(sigName: "no-expose-event", event: Gdk.EventNoExpose): void
    on(sigName: "no-expose-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "no-expose-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "no-expose-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "parent-set", callback: (($obj: LightSwitch, oldParent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: LightSwitch, oldParent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", oldParent?: Gtk.Widget | null): void
    on(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "popup-menu", callback: (($obj: LightSwitch) => boolean)): number
    connect_after(sigName: "popup-menu", callback: (($obj: LightSwitch) => boolean)): number
    emit(sigName: "popup-menu"): void
    on(sigName: "popup-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "popup-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "popup-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "property-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    on(sigName: "property-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "property-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "property-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "proximity-in-event", callback: (($obj: LightSwitch, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: (($obj: LightSwitch, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    on(sigName: "proximity-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "proximity-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "proximity-in-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "proximity-out-event", callback: (($obj: LightSwitch, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: (($obj: LightSwitch, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    on(sigName: "proximity-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "proximity-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "proximity-out-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "query-tooltip", callback: (($obj: LightSwitch, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: LightSwitch, x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    on(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "realize", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "realize", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "realize"): void
    on(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "realize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "screen-changed", callback: (($obj: LightSwitch, previousScreen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: (($obj: LightSwitch, previousScreen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previousScreen?: Gdk.Screen | null): void
    on(sigName: "screen-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "screen-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "screen-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "scroll-event", callback: (($obj: LightSwitch, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: LightSwitch, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    on(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-clear-event", callback: (($obj: LightSwitch, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: (($obj: LightSwitch, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    on(sigName: "selection-clear-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-clear-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-clear-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-get", callback: (($obj: LightSwitch, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: (($obj: LightSwitch, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    on(sigName: "selection-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-get", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-notify-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: (($obj: LightSwitch, event: Gdk.Event) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.Event): void
    on(sigName: "selection-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-received", callback: (($obj: LightSwitch, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: (($obj: LightSwitch, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    on(sigName: "selection-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selection-request-event", callback: (($obj: LightSwitch, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: (($obj: LightSwitch, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    on(sigName: "selection-request-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selection-request-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selection-request-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "show", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "show"): void
    on(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "show-help", callback: (($obj: LightSwitch, helpType: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: (($obj: LightSwitch, helpType: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", helpType: Gtk.WidgetHelpType): void
    on(sigName: "show-help", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "show-help", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "show-help", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "size-allocate", callback: (($obj: LightSwitch, allocation: Gdk.Rectangle) => void)): number
    connect_after(sigName: "size-allocate", callback: (($obj: LightSwitch, allocation: Gdk.Rectangle) => void)): number
    emit(sigName: "size-allocate", allocation: Gdk.Rectangle): void
    on(sigName: "size-allocate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "size-allocate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "size-allocate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "size-request", callback: (($obj: LightSwitch, requisition: Gtk.Requisition) => void)): number
    connect_after(sigName: "size-request", callback: (($obj: LightSwitch, requisition: Gtk.Requisition) => void)): number
    emit(sigName: "size-request", requisition: Gtk.Requisition): void
    on(sigName: "size-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "size-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "size-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "state-changed", callback: (($obj: LightSwitch, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: LightSwitch, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    on(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "style-set", callback: (($obj: LightSwitch, previousStyle?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: (($obj: LightSwitch, previousStyle?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previousStyle?: Gtk.Style | null): void
    on(sigName: "style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "unmap"): void
    on(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unmap-event", callback: (($obj: LightSwitch, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: (($obj: LightSwitch, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    on(sigName: "unmap-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unmap-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unmap-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "unrealize", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "unrealize"): void
    on(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "visibility-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: (($obj: LightSwitch, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    on(sigName: "visibility-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "visibility-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "visibility-notify-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "window-state-event", callback: (($obj: LightSwitch, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: (($obj: LightSwitch, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    on(sigName: "window-state-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "window-state-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "window-state-event", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gtk.Object */
    connect(sigName: "destroy", callback: (($obj: LightSwitch) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: LightSwitch) => void)): number
    emit(sigName: "destroy"): void
    on(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-paintable", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-default", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::composite-child", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::double-buffered", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::events", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::extension-events", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extension-events", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::extension-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::extension-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::extension-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-focus", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::no-show-all", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::style", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-data", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-data", callback: (($obj: LightSwitch, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LightSwitch_ConstructProps)
    _init (config?: LightSwitch_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LightSwitch
    static $gtype: GObject.Type
}
export abstract class FrameClass {
    /* Fields of MxGtk.FrameClass */
    parentClass: Gtk.FrameClass
    static name: string
}
export abstract class LightSwitchClass {
    /* Fields of MxGtk.LightSwitchClass */
    parentClass: Gtk.DrawingAreaClass
    switchFlipped: (lightswitch: LightSwitch, state: boolean) => void
    static name: string
}
}