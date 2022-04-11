const { app, BrowserWindow, ipcMain} = require('electron');
const path = require('path')

let ventana;
function createWindow() {
    ventana = new BrowserWindow({
        width: 600,
        height: 650,
        webPreferences:{
            preload: path.join(app.getAppPath(), "preload.js")
        }
    });
    ventana.loadFile('form.html')
}

let ventana2;
function createWindow2() {
    ventana2 = new BrowserWindow({
        width: 600,
        height: 650,
        webPreferences:{
            preload: path.join(app.getAppPath(), 'preload.js')
        }
    })
    ventana2.loadFile('bienvenida.html')
}

app.whenReady().then(createWindow)

// VALIDAR SI EL USUARIO INGRESADO EN EL FORMULARIO ESTA O NO DISPONIBLE
let datos = ["felipe", "abelardo", "velasquez", "afv", "abelardof", "felipev", "velasquez123", "felipe123", "abelardo502", "afelipe"]
ipcMain.on('VentanaBienvenida', (event, args) =>{
        if(datos[0] == args[0] || datos[1] == args[0] || datos[2] == args[0] || datos[3] == args[0] || datos[4] == args[0] || datos[5] == args[0] || datos[6] == args[0] || datos[7] == args[0] || datos[8] == args[0] || datos[9] == args[0]){
            ventana.webContents.send('mensaje', '*Usuario no disponible')
        }else{
            createWindow2()
            ventana.close()
            ventana2.webContents.on('did-finish-load', () => {
                ventana2.webContents.send('bienvenida', args[0])
            })
        }
})

ipcMain.on('VentanaCerrar', (event, args) => {
    ventana2.close()
})