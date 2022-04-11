const {ipcRenderer, contextBridge} = require('electron')

contextBridge.exposeInMainWorld(
    'comunicacion',
    {
        VentanaBienvenida: (datos) => ipcRenderer.send('VentanaBienvenida', datos)
        ,
        bienvenida: (callback) => ipcRenderer.on('bienvenida', callback)
        ,
        mensaje: (callback) => ipcRenderer.on('mensaje', callback)
        ,
        VentanaCerrar: (datos) => ipcRenderer.send('VentanaCerrar', datos)
    }
)