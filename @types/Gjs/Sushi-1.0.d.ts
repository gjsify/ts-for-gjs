/**
 * Sushi-1.0
 */

import type * as Gjs from './Gjs';
import type * as xlib from './xlib-2.0';
import type * as libxml2 from './libxml2-2.0';
import type * as freetype2 from './freetype2-2.0';
import type * as fontconfig from './fontconfig-2.0';
import type * as cairo from './cairo-1.0';
import type * as PangoFT2 from './PangoFT2-1.0';
import type * as PangoFc from './PangoFc-1.0';
import type * as Pango from './Pango-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as PangoCairo from './PangoCairo-1.0';
import type * as Json from './Json-1.0';
import type * as Gio from './Gio-2.0';
import type * as GtkSource from './GtkSource-3.0';
import type * as Gtk from './Gtk-3.0';
import type * as Gdk from './Gdk-3.0';
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as GModule from './GModule-2.0';
import type * as Atk from './Atk-1.0';
import type * as GstTag from './GstTag-0.10';
import type * as Gst from './Gst-0.10';
import type * as GstPbutils from './GstPbutils-0.10';
import type * as GstBase from './GstBase-0.10';
import type * as GL from './GL-1.0';
import type * as EvinceDocument from './EvinceDocument-3.0';
import type * as CoglPango from './CoglPango-1.0';
import type * as Cogl from './Cogl-1.0';
import type * as Clutter from './Clutter-1.0';

export enum SoundPlayerState {
    UNKNOWN,
    IDLE,
    PLAYING,
    DONE,
    ERROR,
}
export function create_foreign_window(xid: number): Gdk.Window
export function create_rounded_background(): Clutter.Actor
export function query_supported_document_types(): string[]
export interface CoverArtFetcher_ConstructProps extends GObject.Object_ConstructProps {
    taglist?: Gst.TagList
}
export class CoverArtFetcher {
    /* Properties of Sushi-1.0.Sushi.CoverArtFetcher */
    readonly cover: GdkPixbuf.Pixbuf
    taglist: Gst.TagList
    /* Fields of Sushi-1.0.Sushi.CoverArtFetcher */
    parent_instance: GObject.Object
    priv: CoverArtFetcherPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CoverArtFetcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CoverArtFetcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cover", callback: (($obj: CoverArtFetcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cover", callback: (($obj: CoverArtFetcher, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::taglist", callback: (($obj: CoverArtFetcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::taglist", callback: (($obj: CoverArtFetcher, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CoverArtFetcher_ConstructProps)
    _init (config?: CoverArtFetcher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(taglist: Gst.TagList): CoverArtFetcher
    static $gtype: GObject.Type
}
export interface FileLoader_ConstructProps extends GObject.Object_ConstructProps {
    file?: Gio.File
}
export class FileLoader {
    /* Properties of Sushi-1.0.Sushi.FileLoader */
    readonly content_type: string
    file: Gio.File
    readonly icon: GdkPixbuf.Pixbuf
    readonly name: string
    readonly size: string
    readonly time: string
    /* Fields of Sushi-1.0.Sushi.FileLoader */
    parent_instance: GObject.Object
    priv: FileLoaderPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Sushi-1.0.Sushi.FileLoader */
    get_content_type_string(): string
    get_date_string(): string
    get_display_name(): string
    get_icon(): GdkPixbuf.Pixbuf
    get_loading(): boolean
    get_size_string(): string
    stop(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content-type", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::file", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileLoader_ConstructProps)
    _init (config?: FileLoader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: Gio.File): FileLoader
    static $gtype: GObject.Type
}
export interface FontWidget_ConstructProps extends Gtk.DrawingArea_ConstructProps {
    uri?: string
}
export class FontWidget {
    /* Properties of Sushi-1.0.Sushi.FontWidget */
    uri: string
    /* Properties of Gtk-3.0.Gtk.Widget */
    app_paintable: boolean
    can_default: boolean
    can_focus: boolean
    readonly composite_child: boolean
    double_buffered: boolean
    events: Gdk.EventMask
    expand: boolean
    focus_on_click: boolean
    halign: Gtk.Align
    has_default: boolean
    has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    is_focus: boolean
    margin: number
    margin_bottom: number
    margin_end: number
    margin_left: number
    margin_right: number
    margin_start: number
    margin_top: number
    name: string
    no_show_all: boolean
    opacity: number
    parent: Gtk.Container
    receives_default: boolean
    readonly scale_factor: number
    sensitive: boolean
    style: Gtk.Style
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    readonly window: Gdk.Window
    /* Fields of Sushi-1.0.Sushi.FontWidget */
    parent_instance: Gtk.DrawingArea
    priv: FontWidgetPrivate
    /* Fields of Gtk-3.0.Gtk.DrawingArea */
    widget: Gtk.Widget
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gtk-3.0.Gtk.Widget */
    activate(): boolean
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    add_events(events: number): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    can_activate_accel(signal_id: number): boolean
    child_focus(direction: Gtk.DirectionType): boolean
    child_notify(child_property: string): void
    class_path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    compute_expand(orientation: Gtk.Orientation): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widget_pointer: Gtk.Widget): /* widget_pointer */ Gtk.Widget
    device_is_shadowed(device: Gdk.Device): boolean
    drag_begin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    drag_begin_with_coordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    drag_dest_add_image_targets(): void
    drag_dest_add_text_targets(): void
    drag_dest_add_uri_targets(): void
    drag_dest_find_target(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom
    drag_dest_get_target_list(): Gtk.TargetList | null
    drag_dest_get_track_motion(): boolean
    drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    drag_dest_set_target_list(target_list?: Gtk.TargetList | null): void
    drag_dest_set_track_motion(track_motion: boolean): void
    drag_dest_unset(): void
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    drag_highlight(): void
    drag_source_add_image_targets(): void
    drag_source_add_text_targets(): void
    drag_source_add_uri_targets(): void
    drag_source_get_target_list(): Gtk.TargetList | null
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_source_set_icon_gicon(icon: Gio.Icon): void
    drag_source_set_icon_name(icon_name: string): void
    drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    drag_source_set_icon_stock(stock_id: string): void
    drag_source_set_target_list(target_list?: Gtk.TargetList | null): void
    drag_source_unset(): void
    drag_unhighlight(): void
    draw(cr: cairo.Context): void
    ensure_style(): void
    error_bell(): void
    event(event: Gdk.Event): boolean
    freeze_child_notify(): void
    get_accessible(): Atk.Object
    get_action_group(prefix: string): Gio.ActionGroup | null
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_size(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_app_paintable(): boolean
    get_can_default(): boolean
    get_can_focus(): boolean
    get_child_requisition(): /* requisition */ Gtk.Requisition
    get_child_visible(): boolean
    get_clip(): /* clip */ Gtk.Allocation
    get_clipboard(selection: Gdk.Atom): Gtk.Clipboard
    get_composite_name(): string
    get_device_enabled(device: Gdk.Device): boolean
    get_device_events(device: Gdk.Device): Gdk.EventMask
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_double_buffered(): boolean
    get_events(): number
    get_focus_on_click(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_has_window(): boolean
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_start(): number
    get_margin_top(): number
    get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    get_modifier_style(): Gtk.RcStyle
    get_name(): string
    get_no_show_all(): boolean
    get_opacity(): number
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_parent_window(): Gdk.Window | null
    get_path(): Gtk.WidgetPath
    get_pointer(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_requisition(): /* requisition */ Gtk.Requisition
    get_root_window(): Gdk.Window
    get_scale_factor(): number
    get_screen(): Gdk.Screen
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state(): Gtk.StateType
    get_state_flags(): Gtk.StateFlags
    get_style(): Gtk.Style
    get_style_context(): Gtk.StyleContext
    get_support_multidevice(): boolean
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_tooltip_window(): Gtk.Window
    get_toplevel(): Gtk.Widget
    get_valign(): Gtk.Align
    get_valign_with_baseline(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_visual(): Gdk.Visual
    get_window(): Gdk.Window | null
    grab_add(): void
    grab_default(): void
    grab_focus(): void
    grab_remove(): void
    has_grab(): boolean
    has_rc_style(): boolean
    has_screen(): boolean
    has_visible_focus(): boolean
    hide(): void
    hide_on_delete(): boolean
    in_destruction(): boolean
    init_template(): void
    input_shape_combine_region(region?: cairo.Region | null): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_composited(): boolean
    is_drawable(): boolean
    is_sensitive(): boolean
    is_toplevel(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_accel_closures(): Function[]
    list_action_prefixes(): string[]
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    mnemonic_activate(group_cycling: boolean): boolean
    modify_base(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_bg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_cursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modify_fg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_font(font_desc?: Pango.FontDescription | null): void
    modify_style(style: Gtk.RcStyle): void
    modify_text(state: Gtk.StateType, color?: Gdk.Color | null): void
    override_background_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    override_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    override_cursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void
    override_font(font_desc?: Pango.FontDescription | null): void
    override_symbolic_color(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    queue_allocate(): void
    queue_compute_expand(): void
    queue_draw(): void
    queue_draw_area(x: number, y: number, width: number, height: number): void
    queue_draw_region(region: cairo.Region): void
    queue_resize(): void
    queue_resize_no_redraw(): void
    realize(): void
    region_intersect(region: cairo.Region): cairo.Region
    register_window(window: Gdk.Window): void
    remove_accelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    render_icon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(new_parent: Gtk.Widget): void
    reset_rc_styles(): void
    reset_style(): void
    send_expose(event: Gdk.Event): number
    send_focus_change(event: Gdk.Event): boolean
    set_accel_path(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void
    set_allocation(allocation: Gtk.Allocation): void
    set_app_paintable(app_paintable: boolean): void
    set_can_default(can_default: boolean): void
    set_can_focus(can_focus: boolean): void
    set_child_visible(is_visible: boolean): void
    set_clip(clip: Gtk.Allocation): void
    set_composite_name(name: string): void
    set_device_enabled(device: Gdk.Device, enabled: boolean): void
    set_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    set_direction(dir: Gtk.TextDirection): void
    set_double_buffered(double_buffered: boolean): void
    set_events(events: number): void
    set_focus_on_click(focus_on_click: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_has_window(has_window: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_mapped(mapped: boolean): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_no_show_all(no_show_all: boolean): void
    set_opacity(opacity: number): void
    set_parent(parent: Gtk.Widget): void
    set_parent_window(parent_window: Gdk.Window): void
    set_realized(realized: boolean): void
    set_receives_default(receives_default: boolean): void
    set_redraw_on_allocate(redraw_on_allocate: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state(state: Gtk.StateType): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_style(style?: Gtk.Style | null): void
    set_support_multidevice(support_multidevice: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_tooltip_window(custom_window?: Gtk.Window | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    set_visual(visual?: Gdk.Visual | null): void
    set_window(window: Gdk.Window): void
    shape_combine_region(region?: cairo.Region | null): void
    show(): void
    show_all(): void
    show_now(): void
    size_allocate(allocation: Gtk.Allocation): void
    size_allocate_with_baseline(allocation: Gtk.Allocation, baseline: number): void
    size_request(): /* requisition */ Gtk.Requisition
    style_attach(): void
    style_get_property(property_name: string, value: any): void
    thaw_child_notify(): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregister_window(window: Gdk.Window): void
    unset_state_flags(flags: Gtk.StateFlags): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gtk-3.0.Gtk.Buildable */
    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    construct_child(builder: Gtk.Builder, name: string): GObject.Object
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    parser_finished(builder: Gtk.Builder): void
    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /* Virtual methods of Sushi-1.0.Sushi.FontWidget */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_construct_child(builder: Gtk.Builder, name: string): GObject.Object
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_get_name(): string
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_name(name: string): void
    /* Virtual methods of Gtk-3.0.Gtk.Widget */
    vfunc_adjust_baseline_allocation(baseline: number): void
    vfunc_adjust_baseline_request(minimum_baseline: number, natural_baseline: number): void
    vfunc_adjust_size_allocation(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfunc_adjust_size_request(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfunc_button_press_event(event: Gdk.EventButton): boolean
    vfunc_button_release_event(event: Gdk.EventButton): boolean
    vfunc_can_activate_accel(signal_id: number): boolean
    vfunc_child_notify(child_property: GObject.ParamSpec): void
    vfunc_composited_changed(): void
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_configure_event(event: Gdk.EventConfigure): boolean
    vfunc_damage_event(event: Gdk.EventExpose): boolean
    vfunc_delete_event(event: Gdk.EventAny): boolean
    vfunc_destroy(): void
    vfunc_destroy_event(event: Gdk.EventAny): boolean
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin(context: Gdk.DragContext): void
    vfunc_drag_data_delete(context: Gdk.DragContext): void
    vfunc_drag_data_get(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end(context: Gdk.DragContext): void
    vfunc_drag_failed(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfunc_drag_leave(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_draw(cr: cairo.Context): boolean
    vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_event(event: Gdk.Event): boolean
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(event: Gdk.EventFocus): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean
    vfunc_grab_focus(): void
    vfunc_grab_notify(was_grabbed: boolean): void
    vfunc_hide(): void
    vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event(event: Gdk.EventKey): boolean
    vfunc_key_release_event(event: Gdk.EventKey): boolean
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_map(): void
    vfunc_map_event(event: Gdk.EventAny): boolean
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_motion_notify_event(event: Gdk.EventMotion): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_parent_set(previous_parent: Gtk.Widget): void
    vfunc_popup_menu(): boolean
    vfunc_property_notify_event(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_queue_draw_region(region: cairo.Region): void
    vfunc_realize(): void
    vfunc_screen_changed(previous_screen: Gdk.Screen): void
    vfunc_scroll_event(event: Gdk.EventScroll): boolean
    vfunc_selection_clear_event(event: Gdk.EventSelection): boolean
    vfunc_selection_get(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_selection_notify_event(event: Gdk.EventSelection): boolean
    vfunc_selection_received(selection_data: Gtk.SelectionData, time_: number): void
    vfunc_selection_request_event(event: Gdk.EventSelection): boolean
    vfunc_show(): void
    vfunc_show_all(): void
    vfunc_show_help(help_type: Gtk.WidgetHelpType): boolean
    vfunc_size_allocate(allocation: Gtk.Allocation): void
    vfunc_state_changed(previous_state: Gtk.StateType): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_style_set(previous_style: Gtk.Style): void
    vfunc_style_updated(): void
    vfunc_touch_event(event: Gdk.EventTouch): boolean
    vfunc_unmap(): void
    vfunc_unmap_event(event: Gdk.EventAny): boolean
    vfunc_unrealize(): void
    vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Sushi-1.0.Sushi.FontWidget */
    connect(sigName: "loaded", callback: (($obj: FontWidget) => void)): number
    connect_after(sigName: "loaded", callback: (($obj: FontWidget) => void)): number
    emit(sigName: "loaded"): void
    /* Signals of Gtk-3.0.Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: FontWidget) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: (($obj: FontWidget) => void)): number
    emit(sigName: "accel-closures-changed"): void
    connect(sigName: "button-press-event", callback: (($obj: FontWidget, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: FontWidget, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: FontWidget, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: FontWidget, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "can-activate-accel", callback: (($obj: FontWidget, signal_id: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: (($obj: FontWidget, signal_id: number) => boolean)): number
    emit(sigName: "can-activate-accel", signal_id: number): void
    connect(sigName: "child-notify", callback: (($obj: FontWidget, child_property: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: FontWidget, child_property: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", child_property: GObject.ParamSpec): void
    connect(sigName: "composited-changed", callback: (($obj: FontWidget) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: FontWidget) => void)): number
    emit(sigName: "composited-changed"): void
    connect(sigName: "configure-event", callback: (($obj: FontWidget, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: (($obj: FontWidget, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    connect(sigName: "damage-event", callback: (($obj: FontWidget, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "damage-event", callback: (($obj: FontWidget, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    connect(sigName: "delete-event", callback: (($obj: FontWidget, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: (($obj: FontWidget, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    connect(sigName: "destroy", callback: (($obj: FontWidget) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: FontWidget) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "destroy-event", callback: (($obj: FontWidget, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: (($obj: FontWidget, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    connect(sigName: "direction-changed", callback: (($obj: FontWidget, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: FontWidget, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "drag-begin", callback: (($obj: FontWidget, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: (($obj: FontWidget, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    connect(sigName: "drag-data-delete", callback: (($obj: FontWidget, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: (($obj: FontWidget, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    connect(sigName: "drag-data-get", callback: (($obj: FontWidget, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: (($obj: FontWidget, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-data-received", callback: (($obj: FontWidget, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: (($obj: FontWidget, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-drop", callback: (($obj: FontWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: (($obj: FontWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "drag-end", callback: (($obj: FontWidget, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: (($obj: FontWidget, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    connect(sigName: "drag-failed", callback: (($obj: FontWidget, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: (($obj: FontWidget, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    connect(sigName: "drag-leave", callback: (($obj: FontWidget, context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: (($obj: FontWidget, context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    connect(sigName: "drag-motion", callback: (($obj: FontWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: (($obj: FontWidget, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "draw", callback: (($obj: FontWidget, cr: cairo.Context) => boolean)): number
    connect_after(sigName: "draw", callback: (($obj: FontWidget, cr: cairo.Context) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context): void
    connect(sigName: "enter-notify-event", callback: (($obj: FontWidget, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: FontWidget, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "event", callback: (($obj: FontWidget, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: FontWidget, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "event-after", callback: (($obj: FontWidget, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: (($obj: FontWidget, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: (($obj: FontWidget, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: (($obj: FontWidget, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    connect(sigName: "focus-in-event", callback: (($obj: FontWidget, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: FontWidget, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: FontWidget, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: FontWidget, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: FontWidget, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: FontWidget, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: (($obj: FontWidget) => void)): number
    connect_after(sigName: "grab-focus", callback: (($obj: FontWidget) => void)): number
    emit(sigName: "grab-focus"): void
    connect(sigName: "grab-notify", callback: (($obj: FontWidget, was_grabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: (($obj: FontWidget, was_grabbed: boolean) => void)): number
    emit(sigName: "grab-notify", was_grabbed: boolean): void
    connect(sigName: "hide", callback: (($obj: FontWidget) => void)): number
    connect_after(sigName: "hide", callback: (($obj: FontWidget) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "hierarchy-changed", callback: (($obj: FontWidget, previous_toplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: (($obj: FontWidget, previous_toplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previous_toplevel?: Gtk.Widget | null): void
    connect(sigName: "key-press-event", callback: (($obj: FontWidget, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: FontWidget, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: FontWidget, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: FontWidget, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    connect(sigName: "keynav-failed", callback: (($obj: FontWidget, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: FontWidget, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "leave-notify-event", callback: (($obj: FontWidget, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: FontWidget, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: (($obj: FontWidget) => void)): number
    connect_after(sigName: "map", callback: (($obj: FontWidget) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "map-event", callback: (($obj: FontWidget, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: (($obj: FontWidget, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: (($obj: FontWidget, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: FontWidget, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "motion-notify-event", callback: (($obj: FontWidget, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: FontWidget, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: (($obj: FontWidget, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: FontWidget, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "parent-set", callback: (($obj: FontWidget, old_parent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: FontWidget, old_parent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Gtk.Widget | null): void
    connect(sigName: "popup-menu", callback: (($obj: FontWidget) => boolean)): number
    connect_after(sigName: "popup-menu", callback: (($obj: FontWidget) => boolean)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "property-notify-event", callback: (($obj: FontWidget, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: (($obj: FontWidget, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    connect(sigName: "proximity-in-event", callback: (($obj: FontWidget, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: (($obj: FontWidget, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    connect(sigName: "proximity-out-event", callback: (($obj: FontWidget, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: (($obj: FontWidget, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    connect(sigName: "query-tooltip", callback: (($obj: FontWidget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: FontWidget, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: FontWidget) => void)): number
    connect_after(sigName: "realize", callback: (($obj: FontWidget) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "screen-changed", callback: (($obj: FontWidget, previous_screen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: (($obj: FontWidget, previous_screen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previous_screen?: Gdk.Screen | null): void
    connect(sigName: "scroll-event", callback: (($obj: FontWidget, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: FontWidget, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "selection-clear-event", callback: (($obj: FontWidget, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: (($obj: FontWidget, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: (($obj: FontWidget, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: (($obj: FontWidget, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: (($obj: FontWidget, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: (($obj: FontWidget, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: (($obj: FontWidget, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: (($obj: FontWidget, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    connect(sigName: "selection-request-event", callback: (($obj: FontWidget, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: (($obj: FontWidget, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: (($obj: FontWidget) => void)): number
    connect_after(sigName: "show", callback: (($obj: FontWidget) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: (($obj: FontWidget, help_type: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: (($obj: FontWidget, help_type: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", help_type: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: (($obj: FontWidget, allocation: Gtk.Allocation) => void)): number
    connect_after(sigName: "size-allocate", callback: (($obj: FontWidget, allocation: Gtk.Allocation) => void)): number
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    connect(sigName: "state-changed", callback: (($obj: FontWidget, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: FontWidget, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    connect(sigName: "state-flags-changed", callback: (($obj: FontWidget, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: FontWidget, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "style-set", callback: (($obj: FontWidget, previous_style?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: (($obj: FontWidget, previous_style?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previous_style?: Gtk.Style | null): void
    connect(sigName: "style-updated", callback: (($obj: FontWidget) => void)): number
    connect_after(sigName: "style-updated", callback: (($obj: FontWidget) => void)): number
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: (($obj: FontWidget, object: Gdk.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: FontWidget, object: Gdk.Event) => boolean)): number
    emit(sigName: "touch-event", object: Gdk.Event): void
    connect(sigName: "unmap", callback: (($obj: FontWidget) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: FontWidget) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unmap-event", callback: (($obj: FontWidget, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: (($obj: FontWidget, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: (($obj: FontWidget) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: FontWidget) => void)): number
    emit(sigName: "unrealize"): void
    connect(sigName: "visibility-notify-event", callback: (($obj: FontWidget, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: (($obj: FontWidget, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    connect(sigName: "window-state-event", callback: (($obj: FontWidget, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: (($obj: FontWidget, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::uri", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-paintable", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-default", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::composite-child", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::double-buffered", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::events", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expand", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-focus", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::no-show-all", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::style", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FontWidget_ConstructProps)
    _init (config?: FontWidget_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string): FontWidget
    static new(): FontWidget
    static $gtype: GObject.Type
}
export interface PdfLoader_ConstructProps extends GObject.Object_ConstructProps {
    uri?: string
}
export class PdfLoader {
    /* Properties of Sushi-1.0.Sushi.PdfLoader */
    readonly document: EvinceDocument.Document
    uri: string
    /* Fields of Sushi-1.0.Sushi.PdfLoader */
    parent_instance: GObject.Object
    priv: PdfLoaderPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Sushi-1.0.Sushi.PdfLoader */
    cleanup_document(): void
    get_max_page_size(): [ /* width */ number, /* height */ number ]
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PdfLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PdfLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::document", callback: (($obj: PdfLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: PdfLoader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: PdfLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: PdfLoader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PdfLoader_ConstructProps)
    _init (config?: PdfLoader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string): PdfLoader
    static $gtype: GObject.Type
}
export interface SoundPlayer_ConstructProps extends GObject.Object_ConstructProps {
    playing?: boolean
    progress?: number
    uri?: string
}
export class SoundPlayer {
    /* Properties of Sushi-1.0.Sushi.SoundPlayer */
    readonly duration: number
    playing: boolean
    progress: number
    readonly state: SoundPlayerState
    readonly taglist: Gst.TagList
    uri: string
    /* Fields of Sushi-1.0.Sushi.SoundPlayer */
    parent_instance: GObject.Object
    priv: SoundPlayerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::duration", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::playing", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playing", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::taglist", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::taglist", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SoundPlayer_ConstructProps)
    _init (config?: SoundPlayer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TextLoader_ConstructProps extends GObject.Object_ConstructProps {
    uri?: string
}
export class TextLoader {
    /* Properties of Sushi-1.0.Sushi.TextLoader */
    uri: string
    /* Fields of Sushi-1.0.Sushi.TextLoader */
    parent_instance: GObject.Object
    priv: TextLoaderPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Sushi-1.0.Sushi.TextLoader */
    connect(sigName: "loaded", callback: (($obj: TextLoader, object: GtkSource.Buffer) => void)): number
    connect_after(sigName: "loaded", callback: (($obj: TextLoader, object: GtkSource.Buffer) => void)): number
    emit(sigName: "loaded", object: GtkSource.Buffer): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TextLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TextLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::uri", callback: (($obj: TextLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: TextLoader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TextLoader_ConstructProps)
    _init (config?: TextLoader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string): TextLoader
    static $gtype: GObject.Type
}
export abstract class CoverArtFetcherClass {
    /* Fields of Sushi-1.0.Sushi.CoverArtFetcherClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class CoverArtFetcherPrivate {
    static name: string
}
export abstract class FileLoaderClass {
    /* Fields of Sushi-1.0.Sushi.FileLoaderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class FileLoaderPrivate {
    static name: string
}
export abstract class FontWidgetClass {
    /* Fields of Sushi-1.0.Sushi.FontWidgetClass */
    parent_class: Gtk.DrawingAreaClass
    static name: string
}
export class FontWidgetPrivate {
    static name: string
}
export abstract class PdfLoaderClass {
    /* Fields of Sushi-1.0.Sushi.PdfLoaderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class PdfLoaderPrivate {
    static name: string
}
export abstract class SoundPlayerClass {
    /* Fields of Sushi-1.0.Sushi.SoundPlayerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class SoundPlayerPrivate {
    static name: string
}
export abstract class TextLoaderClass {
    /* Fields of Sushi-1.0.Sushi.TextLoaderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class TextLoaderPrivate {
    static name: string
}