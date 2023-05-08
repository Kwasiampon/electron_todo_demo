console.log("saaaaaaaa")
const {app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

function CreateMainWindow(){

    const mainWindow = new BrowserWindow({title:"MyTodo",width:1000,height:600,
                    webPreferences: {
                        contextIsolation: true,
                        nodeIntegration: true,
                        preload: path.join(__dirname, 'preload.js'),
                    },
        })

    const startUrl = url.format({pathname:path.join(__dirname,'index.html'),protocol:'file'})
    mainWindow.loadURL(startUrl)
}

app.whenReady().then(CreateMainWindow)
// app.on('ready',CreateMainWindow)
