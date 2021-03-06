/**
 * ClutterGst-2.0
 */

import type * as Gjs from './Gjs';
import type * as GstVideo from './GstVideo-1.0';
import type * as GstBase from './GstBase-1.0';
import type * as Gst from './Gst-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';
import type * as GstAudio from './GstAudio-1.0';
import type * as Clutter from './Clutter-1.0';
import type * as cairo from './cairo-1.0';
import type * as Json from './Json-1.0';
import type * as Gio from './Gio-2.0';
import type * as GL from './GL-1.0';
import type * as CoglPango from './CoglPango-1.0';
import type * as PangoCairo from './PangoCairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';
import type * as Cogl from './Cogl-1.0';
import type * as Atk from './Atk-1.0';

export enum BufferingMode {
    STREAM,
    DOWNLOAD,
}
export enum SeekFlags {
    NONE,
    ACCURATE,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const VERSION_HEX: number
export const VERSION_S: string
export function init(argv?: string[] | null): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
export function init_with_args(argv: string[] | null, parameter_string: string, entries: GLib.OptionEntry, translation_domain: string): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
export function player_class_init(object_class: GObject.ObjectClass): void
export class Player {
    /* Properties of ClutterGst-2.0.ClutterGst.Player */
    audio_stream: number
    readonly audio_streams: object
    readonly idle: boolean
    readonly in_seek: boolean
    seek_flags: SeekFlags
    subtitle_track: number
    readonly subtitle_tracks: object
    user_agent: string
    /* Properties of Clutter-1.0.Clutter.Media */
    audio_volume: number
    readonly buffer_fill: number
    readonly can_seek: boolean
    readonly duration: number
    playing: boolean
    progress: number
    subtitle_font_name: string
    subtitle_uri: string
    uri: string
    /* Methods of ClutterGst-2.0.ClutterGst.Player */
    deinit(): void
    get_audio_stream(): number
    get_audio_streams(): string[]
    get_buffering_mode(): BufferingMode
    get_idle(): boolean
    get_in_seek(): boolean
    get_pipeline(): Gst.Element
    get_seek_flags(): SeekFlags
    get_subtitle_track(): number
    get_subtitle_tracks(): string[]
    get_user_agent(): string
    init(): boolean
    set_audio_stream(index_: number): void
    set_buffering_mode(mode: BufferingMode): void
    set_seek_flags(flags: SeekFlags): void
    set_subtitle_track(index_: number): void
    set_user_agent(user_agent: string): void
    /* Methods of Clutter-1.0.Clutter.Media */
    get_audio_volume(): number
    get_buffer_fill(): number
    get_can_seek(): boolean
    get_duration(): number
    get_playing(): boolean
    get_progress(): number
    get_subtitle_font_name(): string
    get_subtitle_uri(): string
    get_uri(): string
    set_audio_volume(volume: number): void
    set_filename(filename: string): void
    set_playing(playing: boolean): void
    set_progress(progress: number): void
    set_subtitle_font_name(font_name: string): void
    set_subtitle_uri(uri: string): void
    set_uri(uri: string): void
    /* Virtual methods of ClutterGst-2.0.ClutterGst.Player */
    vfunc_download_buffering(start: number, stop: number): void
    vfunc_get_audio_stream(): number
    vfunc_get_audio_streams(): string[]
    vfunc_get_buffering_mode(): BufferingMode
    vfunc_get_idle(): boolean
    vfunc_get_in_seek(): boolean
    vfunc_get_pipeline(): Gst.Element
    vfunc_get_seek_flags(): SeekFlags
    vfunc_get_subtitle_track(): number
    vfunc_get_subtitle_tracks(): string[]
    vfunc_get_user_agent(): string
    vfunc_set_audio_stream(index_: number): void
    vfunc_set_buffering_mode(mode: BufferingMode): void
    vfunc_set_seek_flags(flags: SeekFlags): void
    vfunc_set_subtitle_track(index_: number): void
    vfunc_set_user_agent(user_agent: string): void
    /* Virtual methods of Clutter-1.0.Clutter.Media */
    vfunc_eos(): void
    vfunc_error(error: GLib.Error): void
    /* Signals of ClutterGst-2.0.ClutterGst.Player */
    connect(sigName: "download-buffering", callback: (($obj: Player, start: number, stop: number) => void)): number
    connect_after(sigName: "download-buffering", callback: (($obj: Player, start: number, stop: number) => void)): number
    emit(sigName: "download-buffering", start: number, stop: number): void
    /* Signals of Clutter-1.0.Clutter.Media */
    connect(sigName: "eos", callback: (($obj: Player) => void)): number
    connect_after(sigName: "eos", callback: (($obj: Player) => void)): number
    emit(sigName: "eos"): void
    connect(sigName: "error", callback: (($obj: Player, error: GLib.Error) => void)): number
    connect_after(sigName: "error", callback: (($obj: Player, error: GLib.Error) => void)): number
    emit(sigName: "error", error: GLib.Error): void
    static name: string
    /* Static methods and pseudo-constructors */
    static class_init(object_class: GObject.ObjectClass): void
}
export interface VideoSink_ConstructProps extends GstBase.BaseSink_ConstructProps {
    texture?: Clutter.Texture
    update_priority?: number
}
export class VideoSink {
    /* Properties of ClutterGst-2.0.ClutterGst.VideoSink */
    texture: Clutter.Texture
    update_priority: number
    /* Properties of GstBase-1.0.GstBase.BaseSink */
    async: boolean
    blocksize: number
    enable_last_sample: boolean
    readonly last_sample: Gst.Sample
    max_bitrate: number
    max_lateness: number
    processing_deadline: number
    qos: boolean
    render_delay: number
    readonly stats: Gst.Structure
    sync: boolean
    throttle_time: number
    ts_offset: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstBase-1.0.GstBase.BaseSink */
    element: Gst.Element
    sinkpad: Gst.Pad
    pad_mode: Gst.PadMode
    offset: number
    can_activate_pull: boolean
    can_activate_push: boolean
    preroll_lock: GLib.Mutex
    preroll_cond: GLib.Cond
    eos: boolean
    need_preroll: boolean
    have_preroll: boolean
    playing_async: boolean
    have_newsegment: boolean
    segment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Element */
    object: Gst.Object
    state_lock: GLib.RecMutex
    state_cond: GLib.Cond
    state_cookie: number
    target_state: Gst.State
    current_state: Gst.State
    next_state: Gst.State
    pending_state: Gst.State
    last_return: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    base_time: Gst.ClockTimeDiff
    start_time: Gst.ClockTime
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    pads_cookie: number
    contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.BaseSink */
    do_preroll(obj: Gst.MiniObject): Gst.FlowReturn
    get_blocksize(): number
    get_drop_out_of_segment(): boolean
    get_last_sample(): Gst.Sample | null
    get_latency(): Gst.ClockTime
    get_max_bitrate(): number
    get_max_lateness(): number
    get_processing_deadline(): Gst.ClockTime
    get_render_delay(): Gst.ClockTime
    get_stats(): Gst.Structure
    get_sync(): boolean
    get_throttle_time(): number
    get_ts_offset(): Gst.ClockTimeDiff
    is_async_enabled(): boolean
    is_last_sample_enabled(): boolean
    is_qos_enabled(): boolean
    query_latency(): [ /* returnType */ boolean, /* live */ boolean | null, /* upstream_live */ boolean | null, /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    set_async_enabled(enabled: boolean): void
    set_blocksize(blocksize: number): void
    set_drop_out_of_segment(drop_out_of_segment: boolean): void
    set_last_sample_enabled(enabled: boolean): void
    set_max_bitrate(max_bitrate: number): void
    set_max_lateness(max_lateness: number): void
    set_processing_deadline(processing_deadline: Gst.ClockTime): void
    set_qos_enabled(enabled: boolean): void
    set_render_delay(delay: Gst.ClockTime): void
    set_sync(sync: boolean): void
    set_throttle_time(throttle: number): void
    set_ts_offset(offset: Gst.ClockTimeDiff): void
    wait(time: Gst.ClockTime): [ /* returnType */ Gst.FlowReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    wait_clock(time: Gst.ClockTime): [ /* returnType */ Gst.ClockReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    wait_preroll(): Gst.FlowReturn
    /* Methods of Gst-1.0.Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Methods of GstVideo-1.0.GstVideo.Navigation */
    send_command(command: GstVideo.NavigationCommand): void
    send_event(structure: Gst.Structure): void
    send_key_event(event: string, key: string): void
    send_mouse_event(event: string, button: number, x: number, y: number): void
    send_mouse_scroll_event(x: number, y: number, delta_x: number, delta_y: number): void
    /* Virtual methods of ClutterGst-2.0.ClutterGst.VideoSink */
    vfunc_send_event(structure: Gst.Structure): void
    vfunc_send_event(event: Gst.Event): boolean
    /* Virtual methods of GstBase-1.0.GstBase.BaseSink */
    vfunc_activate_pull(active: boolean): boolean
    vfunc_event(event: Gst.Event): boolean
    vfunc_fixate(caps: Gst.Caps): Gst.Caps
    vfunc_get_caps(filter: Gst.Caps): Gst.Caps
    vfunc_get_times(buffer: Gst.Buffer, start: Gst.ClockTime, end: Gst.ClockTime): void
    vfunc_prepare(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_prepare_list(buffer_list: Gst.BufferList): Gst.FlowReturn
    vfunc_preroll(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_propose_allocation(query: Gst.Query): boolean
    vfunc_query(query: Gst.Query): boolean
    vfunc_render(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_render_list(buffer_list: Gst.BufferList): Gst.FlowReturn
    vfunc_set_caps(caps: Gst.Caps): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_unlock(): boolean
    vfunc_unlock_stop(): boolean
    vfunc_wait_event(event: Gst.Event): Gst.FlowReturn
    /* Virtual methods of Gst-1.0.Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: VideoSink) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: VideoSink) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: VideoSink, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: VideoSink, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: VideoSink, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: VideoSink, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoSink, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoSink, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::texture", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::texture", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-priority", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-priority", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::async", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::blocksize", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-bitrate", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-lateness", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::processing-deadline", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::render-delay", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stats", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::throttle-time", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ts-offset", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoSink_ConstructProps)
    _init (config?: VideoSink_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(texture: Clutter.Texture): VideoSink
    static event_get_type(event: Gst.Event): GstVideo.NavigationEventType
    static event_parse_command(event: Gst.Event): [ /* returnType */ boolean, /* command */ GstVideo.NavigationCommand | null ]
    static event_parse_key_event(event: Gst.Event): [ /* returnType */ boolean, /* key */ string | null ]
    static event_parse_mouse_button_event(event: Gst.Event): [ /* returnType */ boolean, /* button */ number | null, /* x */ number | null, /* y */ number | null ]
    static event_parse_mouse_move_event(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    static event_parse_mouse_scroll_event(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* delta_x */ number | null, /* delta_y */ number | null ]
    static message_get_type(message: Gst.Message): GstVideo.NavigationMessageType
    static message_new_angles_changed(src: Gst.Object, cur_angle: number, n_angles: number): Gst.Message
    static message_new_commands_changed(src: Gst.Object): Gst.Message
    static message_new_event(src: Gst.Object, event: Gst.Event): Gst.Message
    static message_new_mouse_over(src: Gst.Object, active: boolean): Gst.Message
    static message_parse_angles_changed(message: Gst.Message): [ /* returnType */ boolean, /* cur_angle */ number | null, /* n_angles */ number | null ]
    static message_parse_event(message: Gst.Message): [ /* returnType */ boolean, /* event */ Gst.Event | null ]
    static message_parse_mouse_over(message: Gst.Message): [ /* returnType */ boolean, /* active */ boolean | null ]
    static query_get_type(query: Gst.Query): GstVideo.NavigationQueryType
    static query_new_angles(): Gst.Query
    static query_new_commands(): Gst.Query
    static query_parse_angles(query: Gst.Query): [ /* returnType */ boolean, /* cur_angle */ number | null, /* n_angles */ number | null ]
    static query_parse_commands_length(query: Gst.Query): [ /* returnType */ boolean, /* n_cmds */ number | null ]
    static query_parse_commands_nth(query: Gst.Query, nth: number): [ /* returnType */ boolean, /* cmd */ GstVideo.NavigationCommand | null ]
    static query_set_angles(query: Gst.Query, cur_angle: number, n_angles: number): void
    static query_set_commandsv(query: Gst.Query, cmds: GstVideo.NavigationCommand[]): void
    static $gtype: GObject.Type
}
export interface VideoTexture_ConstructProps extends Clutter.Texture_ConstructProps {
    pixel_aspect_ratio?: Gst.Fraction
    audio_volume?: number
    playing?: boolean
    progress?: number
    subtitle_font_name?: string
    subtitle_uri?: string
    uri?: string
    audio_stream?: number
    seek_flags?: SeekFlags
    subtitle_track?: number
    user_agent?: string
}
export class VideoTexture {
    /* Properties of ClutterGst-2.0.ClutterGst.VideoTexture */
    pixel_aspect_ratio: Gst.Fraction
    /* Properties of Clutter-1.0.Clutter.Texture */
    filename: string
    filter_quality: Clutter.TextureQuality
    keep_aspect_ratio: boolean
    load_async: boolean
    load_data_async: boolean
    pick_with_alpha: boolean
    readonly pixel_format: Cogl.PixelFormat
    repeat_x: boolean
    repeat_y: boolean
    sync_size: boolean
    readonly tile_waste: number
    /* Properties of Clutter-1.0.Clutter.Actor */
    actions: Clutter.Action
    readonly allocation: Clutter.ActorBox
    anchor_gravity: Clutter.Gravity
    anchor_x: number
    anchor_y: number
    background_color: Clutter.Color
    readonly background_color_set: boolean
    child_transform: Clutter.Matrix
    readonly child_transform_set: boolean
    clip: Clutter.Geometry
    clip_rect: Clutter.Rect
    clip_to_allocation: boolean
    constraints: Clutter.Constraint
    content: Clutter.Content
    readonly content_box: Clutter.ActorBox
    content_gravity: Clutter.ContentGravity
    content_repeat: Clutter.ContentRepeat
    depth: number
    effect: Clutter.Effect
    readonly first_child: Clutter.Actor
    fixed_position_set: boolean
    fixed_x: number
    fixed_y: number
    readonly has_clip: boolean
    readonly has_pointer: boolean
    height: number
    readonly last_child: Clutter.Actor
    layout_manager: Clutter.LayoutManager
    magnification_filter: Clutter.ScalingFilter
    readonly mapped: boolean
    margin_bottom: number
    margin_left: number
    margin_right: number
    margin_top: number
    min_height: number
    min_height_set: boolean
    min_width: number
    min_width_set: boolean
    minification_filter: Clutter.ScalingFilter
    name: string
    natural_height: number
    natural_height_set: boolean
    natural_width: number
    natural_width_set: boolean
    offscreen_redirect: Clutter.OffscreenRedirect
    opacity: number
    pivot_point: Clutter.Point
    pivot_point_z: number
    position: Clutter.Point
    reactive: boolean
    readonly realized: boolean
    request_mode: Clutter.RequestMode
    rotation_angle_x: number
    rotation_angle_y: number
    rotation_angle_z: number
    rotation_center_x: Clutter.Vertex
    rotation_center_y: Clutter.Vertex
    rotation_center_z: Clutter.Vertex
    rotation_center_z_gravity: Clutter.Gravity
    scale_center_x: number
    scale_center_y: number
    scale_gravity: Clutter.Gravity
    scale_x: number
    scale_y: number
    scale_z: number
    show_on_set_parent: boolean
    size: Clutter.Size
    text_direction: Clutter.TextDirection
    transform: Clutter.Matrix
    readonly transform_set: boolean
    translation_x: number
    translation_y: number
    translation_z: number
    visible: boolean
    width: number
    x: number
    x_align: Clutter.ActorAlign
    x_expand: boolean
    y: number
    y_align: Clutter.ActorAlign
    y_expand: boolean
    z_position: number
    /* Properties of Clutter-1.0.Clutter.Media */
    audio_volume: number
    readonly buffer_fill: number
    readonly can_seek: boolean
    readonly duration: number
    playing: boolean
    progress: number
    subtitle_font_name: string
    subtitle_uri: string
    uri: string
    /* Properties of ClutterGst-2.0.ClutterGst.Player */
    audio_stream: number
    readonly audio_streams: object
    readonly idle: boolean
    readonly in_seek: boolean
    seek_flags: SeekFlags
    subtitle_track: number
    readonly subtitle_tracks: object
    user_agent: string
    /* Fields of Clutter-1.0.Clutter.Actor */
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of ClutterGst-2.0.ClutterGst.VideoTexture */
    get_audio_stream(): number
    get_audio_streams(): Gst.TagList[]
    get_buffering_mode(): BufferingMode
    get_idle_material(): Cogl.Handle
    get_pipeline(): Gst.Element
    get_seek_flags(): SeekFlags
    get_subtitle_track(): number
    get_subtitle_tracks(): Gst.TagList[]
    get_user_agent(): string
    set_audio_stream(index_: number): void
    set_buffering_mode(mode: BufferingMode): void
    set_idle_material(material: Cogl.Handle): void
    set_seek_flags(flags: SeekFlags): void
    set_subtitle_track(index_: number): void
    set_user_agent(user_agent: string): void
    /* Methods of Clutter-1.0.Clutter.Texture */
    get_base_size(): [ /* width */ number, /* height */ number ]
    get_cogl_material(): Cogl.Handle
    get_cogl_texture(): Cogl.Handle
    get_filter_quality(): Clutter.TextureQuality
    get_keep_aspect_ratio(): boolean
    get_load_async(): boolean
    get_load_data_async(): boolean
    get_max_tile_waste(): number
    get_pick_with_alpha(): boolean
    get_pixel_format(): Cogl.PixelFormat
    get_repeat(): [ /* repeat_x */ boolean, /* repeat_y */ boolean ]
    get_sync_size(): boolean
    set_area_from_rgb_data(data: Uint8Array[], has_alpha: boolean, x: number, y: number, width: number, height: number, rowstride: number, bpp: number, flags: Clutter.TextureFlags): boolean
    set_cogl_material(cogl_material: Cogl.Handle): void
    set_cogl_texture(cogl_tex: Cogl.Handle): void
    set_filter_quality(filter_quality: Clutter.TextureQuality): void
    set_from_file(filename: string): boolean
    set_from_rgb_data(data: Uint8Array[], has_alpha: boolean, width: number, height: number, rowstride: number, bpp: number, flags: Clutter.TextureFlags): boolean
    set_from_yuv_data(data: Uint8Array[], width: number, height: number, flags: Clutter.TextureFlags): boolean
    set_keep_aspect_ratio(keep_aspect: boolean): void
    set_load_async(load_async: boolean): void
    set_load_data_async(load_async: boolean): void
    set_pick_with_alpha(pick_with_alpha: boolean): void
    set_repeat(repeat_x: boolean, repeat_y: boolean): void
    set_sync_size(sync_size: boolean): void
    /* Methods of Clutter-1.0.Clutter.Actor */
    add_action(action: Clutter.Action): void
    add_action_with_name(name: string, action: Clutter.Action): void
    add_child(child: Clutter.Actor): void
    add_constraint(constraint: Clutter.Constraint): void
    add_constraint_with_name(name: string, constraint: Clutter.Constraint): void
    add_effect(effect: Clutter.Effect): void
    add_effect_with_name(name: string, effect: Clutter.Effect): void
    add_transition(name: string, transition: Clutter.Transition): void
    allocate(box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    allocate_align_fill(box: Clutter.ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean, flags: Clutter.AllocationFlags): void
    allocate_available_size(x: number, y: number, available_width: number, available_height: number, flags: Clutter.AllocationFlags): void
    allocate_preferred_size(flags: Clutter.AllocationFlags): void
    animate_with_alphav(alpha: Clutter.Alpha, properties: string[], values: any[]): Clutter.Animation
    animate_with_timelinev(mode: number, timeline: Clutter.Timeline, properties: string[], values: any[]): Clutter.Animation
    animatev(mode: number, duration: number, properties: string[], values: any[]): Clutter.Animation
    apply_relative_transform_to_point(ancestor: Clutter.Actor | null, point: Clutter.Vertex): /* vertex */ Clutter.Vertex
    apply_transform_to_point(point: Clutter.Vertex): /* vertex */ Clutter.Vertex
    bind_model(model: Gio.ListModel | null, create_child_func: Clutter.ActorCreateChildFunc): void
    clear_actions(): void
    clear_constraints(): void
    clear_effects(): void
    contains(descendant: Clutter.Actor): boolean
    continue_paint(): void
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    destroy(): void
    destroy_all_children(): void
    detach_animation(): void
    event(event: Clutter.Event, capture: boolean): boolean
    get_abs_allocation_vertices(): /* verts */ Clutter.Vertex[]
    get_accessible(): Atk.Object
    get_action(name: string): Clutter.Action
    get_actions(): Clutter.Action[]
    get_allocation_box(): /* box */ Clutter.ActorBox
    get_allocation_geometry(): /* geom */ Clutter.Geometry
    get_allocation_vertices(ancestor?: Clutter.Actor | null): /* verts */ Clutter.Vertex[]
    get_anchor_point(): [ /* anchor_x */ number, /* anchor_y */ number ]
    get_anchor_point_gravity(): Clutter.Gravity
    get_animation(): Clutter.Animation
    get_background_color(): /* color */ Clutter.Color
    get_child_at_index(index_: number): Clutter.Actor
    get_child_transform(): /* transform */ Clutter.Matrix
    get_children(): Clutter.Actor[]
    get_clip(): [ /* xoff */ number | null, /* yoff */ number | null, /* width */ number | null, /* height */ number | null ]
    get_clip_to_allocation(): boolean
    get_constraint(name: string): Clutter.Constraint
    get_constraints(): Clutter.Constraint[]
    get_content(): Clutter.Content
    get_content_box(): /* box */ Clutter.ActorBox
    get_content_gravity(): Clutter.ContentGravity
    get_content_repeat(): Clutter.ContentRepeat
    get_content_scaling_filters(): [ /* min_filter */ Clutter.ScalingFilter | null, /* mag_filter */ Clutter.ScalingFilter | null ]
    get_default_paint_volume(): Clutter.PaintVolume
    get_depth(): number
    get_easing_delay(): number
    get_easing_duration(): number
    get_easing_mode(): Clutter.AnimationMode
    get_effect(name: string): Clutter.Effect
    get_effects(): Clutter.Effect[]
    get_first_child(): Clutter.Actor
    get_fixed_position_set(): boolean
    get_flags(): Clutter.ActorFlags
    get_geometry(): /* geometry */ Clutter.Geometry
    get_gid(): number
    get_height(): number
    get_last_child(): Clutter.Actor
    get_layout_manager(): Clutter.LayoutManager
    get_margin(): /* margin */ Clutter.Margin
    get_margin_bottom(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_top(): number
    get_n_children(): number
    get_name(): string
    get_next_sibling(): Clutter.Actor
    get_offscreen_redirect(): Clutter.OffscreenRedirect
    get_opacity(): number
    get_paint_box(): [ /* returnType */ boolean, /* box */ Clutter.ActorBox ]
    get_paint_opacity(): number
    get_paint_visibility(): boolean
    get_paint_volume(): Clutter.PaintVolume
    get_pango_context(): Pango.Context
    get_parent(): Clutter.Actor
    get_pivot_point(): [ /* pivot_x */ number | null, /* pivot_y */ number | null ]
    get_pivot_point_z(): number
    get_position(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_size(): [ /* min_width_p */ number | null, /* min_height_p */ number | null, /* natural_width_p */ number | null, /* natural_height_p */ number | null ]
    get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    get_previous_sibling(): Clutter.Actor
    get_reactive(): boolean
    get_request_mode(): Clutter.RequestMode
    get_rotation(axis: Clutter.RotateAxis): [ /* returnType */ number, /* x */ number, /* y */ number, /* z */ number ]
    get_rotation_angle(axis: Clutter.RotateAxis): number
    get_scale(): [ /* scale_x */ number | null, /* scale_y */ number | null ]
    get_scale_center(): [ /* center_x */ number | null, /* center_y */ number | null ]
    get_scale_gravity(): Clutter.Gravity
    get_scale_z(): number
    get_shader(): Clutter.Shader
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    get_stage(): Clutter.Stage
    get_text_direction(): Clutter.TextDirection
    get_transform(): /* transform */ Clutter.Matrix
    get_transformation_matrix(): /* matrix */ Clutter.Matrix
    get_transformed_paint_volume(relative_to_ancestor: Clutter.Actor): Clutter.PaintVolume
    get_transformed_position(): [ /* x */ number | null, /* y */ number | null ]
    get_transformed_size(): [ /* width */ number | null, /* height */ number | null ]
    get_transition(name: string): Clutter.Transition
    get_translation(): [ /* translate_x */ number | null, /* translate_y */ number | null, /* translate_z */ number | null ]
    get_width(): number
    get_x(): number
    get_x_align(): Clutter.ActorAlign
    get_x_expand(): boolean
    get_y(): number
    get_y_align(): Clutter.ActorAlign
    get_y_expand(): boolean
    get_z_position(): number
    get_z_rotation_gravity(): Clutter.Gravity
    grab_key_focus(): void
    has_actions(): boolean
    has_allocation(): boolean
    has_constraints(): boolean
    has_effects(): boolean
    has_key_focus(): boolean
    has_overlaps(): boolean
    hide(): void
    hide_all(): void
    insert_child_above(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    insert_child_at_index(child: Clutter.Actor, index_: number): void
    insert_child_below(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    is_in_clone_paint(): boolean
    is_mapped(): boolean
    is_realized(): boolean
    is_rotated(): boolean
    is_scaled(): boolean
    is_visible(): boolean
    lower(above?: Clutter.Actor | null): void
    lower_bottom(): void
    map(): void
    move_anchor_point(anchor_x: number, anchor_y: number): void
    move_anchor_point_from_gravity(gravity: Clutter.Gravity): void
    move_by(dx: number, dy: number): void
    needs_expand(orientation: Clutter.Orientation): boolean
    paint(): void
    pop_internal(): void
    push_internal(): void
    queue_redraw(): void
    queue_redraw_with_clip(clip?: cairo.RectangleInt | null): void
    queue_relayout(): void
    raise(below?: Clutter.Actor | null): void
    raise_top(): void
    realize(): void
    remove_action(action: Clutter.Action): void
    remove_action_by_name(name: string): void
    remove_all_children(): void
    remove_all_transitions(): void
    remove_child(child: Clutter.Actor): void
    remove_clip(): void
    remove_constraint(constraint: Clutter.Constraint): void
    remove_constraint_by_name(name: string): void
    remove_effect(effect: Clutter.Effect): void
    remove_effect_by_name(name: string): void
    remove_transition(name: string): void
    reparent(new_parent: Clutter.Actor): void
    replace_child(old_child: Clutter.Actor, new_child: Clutter.Actor): void
    restore_easing_state(): void
    save_easing_state(): void
    set_allocation(box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    set_anchor_point(anchor_x: number, anchor_y: number): void
    set_anchor_point_from_gravity(gravity: Clutter.Gravity): void
    set_background_color(color?: Clutter.Color | null): void
    set_child_above_sibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    set_child_at_index(child: Clutter.Actor, index_: number): void
    set_child_below_sibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    set_child_transform(transform?: Clutter.Matrix | null): void
    set_clip(xoff: number, yoff: number, width: number, height: number): void
    set_clip_to_allocation(clip_set: boolean): void
    set_content(content?: Clutter.Content | null): void
    set_content_gravity(gravity: Clutter.ContentGravity): void
    set_content_repeat(repeat: Clutter.ContentRepeat): void
    set_content_scaling_filters(min_filter: Clutter.ScalingFilter, mag_filter: Clutter.ScalingFilter): void
    set_depth(depth: number): void
    set_easing_delay(msecs: number): void
    set_easing_duration(msecs: number): void
    set_easing_mode(mode: Clutter.AnimationMode): void
    set_fixed_position_set(is_set: boolean): void
    set_flags(flags: Clutter.ActorFlags): void
    set_geometry(geometry: Clutter.Geometry): void
    set_height(height: number): void
    set_layout_manager(manager?: Clutter.LayoutManager | null): void
    set_margin(margin: Clutter.Margin): void
    set_margin_bottom(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_offscreen_redirect(redirect: Clutter.OffscreenRedirect): void
    set_opacity(opacity: number): void
    set_parent(parent: Clutter.Actor): void
    set_pivot_point(pivot_x: number, pivot_y: number): void
    set_pivot_point_z(pivot_z: number): void
    set_position(x: number, y: number): void
    set_reactive(reactive: boolean): void
    set_request_mode(mode: Clutter.RequestMode): void
    set_rotation(axis: Clutter.RotateAxis, angle: number, x: number, y: number, z: number): void
    set_rotation_angle(axis: Clutter.RotateAxis, angle: number): void
    set_scale(scale_x: number, scale_y: number): void
    set_scale_full(scale_x: number, scale_y: number, center_x: number, center_y: number): void
    set_scale_with_gravity(scale_x: number, scale_y: number, gravity: Clutter.Gravity): void
    set_scale_z(scale_z: number): void
    set_shader(shader?: Clutter.Shader | null): boolean
    set_shader_param(param: string, value: any): void
    set_shader_param_float(param: string, value: number): void
    set_shader_param_int(param: string, value: number): void
    set_size(width: number, height: number): void
    set_text_direction(text_dir: Clutter.TextDirection): void
    set_transform(transform?: Clutter.Matrix | null): void
    set_translation(translate_x: number, translate_y: number, translate_z: number): void
    set_width(width: number): void
    set_x(x: number): void
    set_x_align(x_align: Clutter.ActorAlign): void
    set_x_expand(expand: boolean): void
    set_y(y: number): void
    set_y_align(y_align: Clutter.ActorAlign): void
    set_y_expand(expand: boolean): void
    set_z_position(z_position: number): void
    set_z_rotation_from_gravity(angle: number, gravity: Clutter.Gravity): void
    should_pick_paint(): boolean
    show(): void
    show_all(): void
    transform_stage_point(x: number, y: number): [ /* returnType */ boolean, /* x_out */ number, /* y_out */ number ]
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_flags(flags: Clutter.ActorFlags): void
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
    /* Methods of Clutter-1.0.Clutter.Animatable */
    animate_property(animation: Clutter.Animation, property_name: string, initial_value: any, final_value: any, progress: number, value: any): boolean
    find_property(property_name: string): GObject.ParamSpec
    get_initial_state(property_name: string, value: any): void
    interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    set_final_state(property_name: string, value: any): void
    /* Methods of Clutter-1.0.Clutter.Container */
    add_actor(actor: Clutter.Actor): void
    child_get_property(child: Clutter.Actor, property: string, value: any): void
    child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    child_set_property(child: Clutter.Actor, property: string, value: any): void
    create_child_meta(actor: Clutter.Actor): void
    destroy_child_meta(actor: Clutter.Actor): void
    find_child_by_name(child_name: string): Clutter.Actor
    foreach(callback: Clutter.Callback): void
    foreach_with_internals(callback: Clutter.Callback): void
    get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta
    lower_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    raise_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    remove_actor(actor: Clutter.Actor): void
    sort_depth_order(): void
    /* Methods of Clutter-1.0.Clutter.Media */
    get_audio_volume(): number
    get_buffer_fill(): number
    get_can_seek(): boolean
    get_duration(): number
    get_playing(): boolean
    get_progress(): number
    get_subtitle_font_name(): string
    get_subtitle_uri(): string
    get_uri(): string
    set_audio_volume(volume: number): void
    set_filename(filename: string): void
    set_playing(playing: boolean): void
    set_progress(progress: number): void
    set_subtitle_font_name(font_name: string): void
    set_subtitle_uri(uri: string): void
    set_uri(uri: string): void
    /* Methods of Clutter-1.0.Clutter.Scriptable */
    get_id(): string
    parse_custom_node(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    set_custom_property(script: Clutter.Script, name: string, value: any): void
    set_id(id_: string): void
    /* Methods of ClutterGst-2.0.ClutterGst.Player */
    deinit(): void
    get_audio_streams(): string[]
    get_idle(): boolean
    get_in_seek(): boolean
    get_subtitle_tracks(): string[]
    init(): boolean
    /* Virtual methods of ClutterGst-2.0.ClutterGst.VideoTexture */
    vfunc_animate_property(animation: Clutter.Animation, property_name: string, initial_value: any, final_value: any, progress: number, value: any): boolean
    vfunc_find_property(property_name: string): GObject.ParamSpec
    vfunc_get_initial_state(property_name: string, value: any): void
    vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    vfunc_set_final_state(property_name: string, value: any): void
    vfunc_actor_added(actor: Clutter.Actor): void
    vfunc_actor_removed(actor: Clutter.Actor): void
    vfunc_add(actor: Clutter.Actor): void
    vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    vfunc_create_child_meta(actor: Clutter.Actor): void
    vfunc_destroy_child_meta(actor: Clutter.Actor): void
    vfunc_foreach(callback: Clutter.Callback): void
    vfunc_foreach_with_internals(callback: Clutter.Callback): void
    vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta
    vfunc_lower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfunc_raise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    vfunc_remove(actor: Clutter.Actor): void
    vfunc_sort_depth_order(): void
    vfunc_eos(): void
    vfunc_error(error: GLib.Error): void
    vfunc_get_id(): string
    vfunc_parse_custom_node(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    vfunc_set_custom_property(script: Clutter.Script, name: string, value: any): void
    vfunc_set_id(id_: string): void
    vfunc_download_buffering(start: number, stop: number): void
    vfunc_get_audio_stream(): number
    vfunc_get_audio_streams(): string[]
    vfunc_get_buffering_mode(): BufferingMode
    vfunc_get_idle(): boolean
    vfunc_get_in_seek(): boolean
    vfunc_get_pipeline(): Gst.Element
    vfunc_get_seek_flags(): SeekFlags
    vfunc_get_subtitle_track(): number
    vfunc_get_subtitle_tracks(): string[]
    vfunc_get_user_agent(): string
    vfunc_set_audio_stream(index_: number): void
    vfunc_set_buffering_mode(mode: BufferingMode): void
    vfunc_set_seek_flags(flags: SeekFlags): void
    vfunc_set_subtitle_track(index_: number): void
    vfunc_set_user_agent(user_agent: string): void
    /* Virtual methods of Clutter-1.0.Clutter.Texture */
    vfunc_load_finished(error: GLib.Error): void
    vfunc_pixbuf_change(): void
    vfunc_size_change(width: number, height: number): void
    /* Virtual methods of Clutter-1.0.Clutter.Actor */
    vfunc_allocate(box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    vfunc_apply_transform(matrix: Clutter.Matrix): void
    vfunc_button_press_event(event: Clutter.ButtonEvent): boolean
    vfunc_button_release_event(event: Clutter.ButtonEvent): boolean
    vfunc_captured_event(event: Clutter.Event): boolean
    vfunc_destroy(): void
    vfunc_enter_event(event: Clutter.CrossingEvent): boolean
    vfunc_event(event: Clutter.Event): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_get_paint_volume(volume: Clutter.PaintVolume): boolean
    vfunc_get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    vfunc_get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    vfunc_has_overlaps(): boolean
    vfunc_hide(): void
    vfunc_hide_all(): void
    vfunc_key_focus_in(): void
    vfunc_key_focus_out(): void
    vfunc_key_press_event(event: Clutter.KeyEvent): boolean
    vfunc_key_release_event(event: Clutter.KeyEvent): boolean
    vfunc_leave_event(event: Clutter.CrossingEvent): boolean
    vfunc_map(): void
    vfunc_motion_event(event: Clutter.MotionEvent): boolean
    vfunc_paint(): void
    vfunc_paint_node(root: Clutter.PaintNode): void
    vfunc_parent_set(old_parent: Clutter.Actor): void
    vfunc_pick(color: Clutter.Color): void
    vfunc_queue_redraw(leaf_that_queued: Clutter.Actor): void
    vfunc_queue_relayout(): void
    vfunc_realize(): void
    vfunc_scroll_event(event: Clutter.ScrollEvent): boolean
    vfunc_show(): void
    vfunc_show_all(): void
    vfunc_touch_event(event: Clutter.TouchEvent): boolean
    vfunc_unmap(): void
    vfunc_unrealize(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Clutter-1.0.Clutter.Texture */
    connect(sigName: "load-finished", callback: (($obj: VideoTexture, error: GLib.Error) => void)): number
    connect_after(sigName: "load-finished", callback: (($obj: VideoTexture, error: GLib.Error) => void)): number
    emit(sigName: "load-finished", error: GLib.Error): void
    connect(sigName: "pixbuf-change", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "pixbuf-change", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "pixbuf-change"): void
    connect(sigName: "size-change", callback: (($obj: VideoTexture, width: number, height: number) => void)): number
    connect_after(sigName: "size-change", callback: (($obj: VideoTexture, width: number, height: number) => void)): number
    emit(sigName: "size-change", width: number, height: number): void
    /* Signals of Clutter-1.0.Clutter.Actor */
    connect(sigName: "allocation-changed", callback: (($obj: VideoTexture, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: VideoTexture, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    connect(sigName: "button-press-event", callback: (($obj: VideoTexture, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: VideoTexture, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: (($obj: VideoTexture, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: VideoTexture, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: (($obj: VideoTexture, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: VideoTexture, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: (($obj: VideoTexture, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: VideoTexture, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: (($obj: VideoTexture, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: VideoTexture, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "hide", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: (($obj: VideoTexture, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: VideoTexture, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: (($obj: VideoTexture, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: VideoTexture, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: (($obj: VideoTexture, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: VideoTexture, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: (($obj: VideoTexture, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: VideoTexture, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "paint", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "paint", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "paint"): void
    connect(sigName: "parent-set", callback: (($obj: VideoTexture, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: VideoTexture, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: (($obj: VideoTexture, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: VideoTexture, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    connect(sigName: "queue-redraw", callback: (($obj: VideoTexture, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: VideoTexture, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    connect(sigName: "queue-relayout", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "realize", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "scroll-event", callback: (($obj: VideoTexture, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: VideoTexture, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "show", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "touch-event", callback: (($obj: VideoTexture, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: VideoTexture, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: (($obj: VideoTexture, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: VideoTexture, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    connect(sigName: "transitions-completed", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter-1.0.Clutter.Container */
    connect(sigName: "actor-added", callback: (($obj: VideoTexture, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: VideoTexture, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: (($obj: VideoTexture, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: VideoTexture, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: (($obj: VideoTexture, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: VideoTexture, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    /* Signals of Clutter-1.0.Clutter.Media */
    connect(sigName: "eos", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "eos", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "eos"): void
    connect(sigName: "error", callback: (($obj: VideoTexture, error: GLib.Error) => void)): number
    connect_after(sigName: "error", callback: (($obj: VideoTexture, error: GLib.Error) => void)): number
    emit(sigName: "error", error: GLib.Error): void
    /* Signals of ClutterGst-2.0.ClutterGst.Player */
    connect(sigName: "download-buffering", callback: (($obj: VideoTexture, start: number, stop: number) => void)): number
    connect_after(sigName: "download-buffering", callback: (($obj: VideoTexture, start: number, stop: number) => void)): number
    emit(sigName: "download-buffering", start: number, stop: number): void
    connect(sigName: "notify::pixel-aspect-ratio", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixel-aspect-ratio", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filename", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter-quality", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-quality", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keep-aspect-ratio", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keep-aspect-ratio", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::load-async", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::load-async", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::load-data-async", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::load-data-async", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pick-with-alpha", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pick-with-alpha", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixel-format", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixel-format", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::repeat-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::repeat-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync-size", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-size", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tile-waste", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-waste", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::audio-volume", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-volume", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-fill", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-fill", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-seek", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::playing", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playing", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle-font-name", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-font-name", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle-uri", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-uri", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::audio-stream", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-stream", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::audio-streams", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-streams", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::idle", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-seek", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-seek", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seek-flags", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seek-flags", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle-track", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-track", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle-tracks", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-tracks", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoTexture_ConstructProps)
    _init (config?: VideoTexture_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VideoTexture
    static class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    static class_list_child_properties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static class_init(object_class: GObject.ObjectClass): void
    static $gtype: GObject.Type
}
export abstract class PlayerIface {
    /* Fields of ClutterGst-2.0.ClutterGst.PlayerIface */
    get_pipeline: (player: Player) => Gst.Element
    get_user_agent: (player: Player) => string
    set_user_agent: (player: Player, user_agent: string) => void
    get_seek_flags: (player: Player) => SeekFlags
    set_seek_flags: (player: Player, flags: SeekFlags) => void
    get_buffering_mode: (player: Player) => BufferingMode
    set_buffering_mode: (player: Player, mode: BufferingMode) => void
    get_audio_streams: (player: Player) => string[]
    get_audio_stream: (player: Player) => number
    set_audio_stream: (player: Player, index_: number) => void
    get_subtitle_tracks: (player: Player) => string[]
    get_subtitle_track: (player: Player) => number
    set_subtitle_track: (player: Player, index_: number) => void
    get_idle: (player: Player) => boolean
    get_in_seek: (player: Player) => boolean
    download_buffering: (player: Player, start: number, stop: number) => void
    static name: string
}
export class PlayerIfacePrivate {
    static name: string
}
export abstract class VideoSinkClass {
    static name: string
}
export class VideoSinkPrivate {
    static name: string
}
export abstract class VideoTextureClass {
    static name: string
}
export class VideoTexturePrivate {
    static name: string
}