import * as gi from 'node-gtk'
const Gtk = gi.require('Gtk', '3.0')

gi.startLoop()
Gtk.init()

const settings = Gtk.Settings.getDefault()
settings.gtkApplicationPreferDarkTheme = true
settings.gtkThemeName = 'Adwaita'

console.log(settings.gtkEnableAccels)

const win = new Gtk.Window()
win.setTitle('node-gtk')
win.setPosition(Gtk.WindowPosition.CENTER)
win.setDefaultSize(200, 80)

win.on('show', Gtk.main)
win.on('destroy', Gtk.mainQuit)

win.add(new Gtk.Label({ label: 'Hello Gtk+' }))
win.showAll()
