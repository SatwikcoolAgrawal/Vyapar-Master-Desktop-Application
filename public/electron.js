const {app, BrowserWindow,ipcMain}=require('electron');
const url  = require('url');
const path =require('path');
const dotenv = require('dotenv');
const ipc=ipcMain
dotenv.config();
const isDev=process.env.NODE_ENV ==='DEV'
// const { session } = require('electron')

let myWindow=null

function createMainWindow(){
    const mainWindow= new BrowserWindow({
        titleBarStyle:"hidden",
        show:false,
        titleBarOverlay:{
            color: 'rgb(15,23,42)',
            height:35,
            symbolColor: '#fff',
        },
        title :"Vyapar Master",
        width:1000,
        height:600,
        minWidth:650,
        minHeight:300,
        webPreferences:{
            devTools:!app.isPackaged,
            nodeIntegration:false,
            contextIsolation:true,
            sandbox:false,
            preload:path.join(__dirname,'preload.js')
        }
    });

    if (isDev) mainWindow.webContents.openDevTools()


    const startUrl= app.isPackaged
    ? url.format({
        pathname: path.join(__dirname, './index.html'),
        protocol: "file:"
      })
    : "http://localhost:3000";
    
    mainWindow.loadURL(startUrl);

    mainWindow.on('ready-to-show',()=>{
        mainWindow.show()
    });

    return mainWindow
}


app.whenReady().then(() => {
    myWindow=createMainWindow()
  
    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) myWindow =createMainWindow()
    })
  })
  
  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })

ipc.handle('getAll',(event)=>{
    console.log('hello');
    return 0;
})

ipc.handle('getPurchaseTotal',(event)=>{
  return 4000;
})

let isSIngleInstance=app.requestSingleInstanceLock()

if (!isSIngleInstance){
  app.quit()
}

app.on('second-instance',(event)=>{
  if (myWindow) {
    if (myWindow.isMinimized()) myWindow.restore()
    myWindow.focus()
  }
})