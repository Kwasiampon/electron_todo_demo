console.log("saaaaaaaa")
const {app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

function CreateMainWindow(){

    const mainWindow = new BrowserWindow({title:"MyTodo",width:1000,height:600,
                    webPreferences: {
                        contextIsolation: true,
                        nodeIntegration: true,
                        preload: path.join(__dirname, 'preloads.js'),
                    },
        })
    mainWindow.webContents.openDevTools()
    const startUrl = url.format({
        // pathname:path.join(__dirname,'index.html'),
        pathname:path.join(__dirname,'./my-app/build/index.html'),
        protocol:'file'
    })
    mainWindow.loadURL(startUrl)
    // mainWindow.loadURL('http://localhost:3000/')
}

app.whenReady().then(CreateMainWindow)
// app.on('ready',CreateMainWindow)
