const {app, BrowserWindow,ipcMain}=require('electron');
const url  = require('url');
const path =require('path');
const dotenv = require('dotenv');
const ipc=ipcMain
dotenv.config();
const isDev=process.env.NODE_ENV ==='DEV'

// const { session } = require('electron')

console.log(isDev);

function createMainWindow(){
    const mainWindow= new BrowserWindow({
        titleBarStyle:"hidden",
        // autoHideMenuBar: true,
        title :"Entry Managment App",
        width:1000,
        height:600,
        minWidth:500,
        minHeight:300,
        webPreferences:{
            devTools:isDev,
            nodeIntegration:true,
            contextIsolation:true,
            preload:path.join(__dirname,'preload.js')
        }
    });
    if (isDev) mainWindow.webContents.openDevTools()

    const startUrl=url.format({
        pathname: path.join(__dirname,'./app/build/index.html'),
    });
      
    mainWindow.loadURL(startUrl);
    mainWindow.on('ready-to-show',()=>{
        mainWindow.show()
    });
   
    ipc.on('closeApp',(event)=>{
        mainWindow.close();
    })

    ipc.on('maximizeApp',(event)=>{
        if (mainWindow.isMaximized()){
            mainWindow.restore();
        }
        else {
        mainWindow.maximize();
        }
    })

    ipc.on('minimizeApp',(event)=>{
        mainWindow.minimize();        
    })
}


app.whenReady().then(() => {
    createMainWindow()
  
    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
    })
  })
  
  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })

ipc.handle('getAll',(event)=>{
    console.log('hello');
    return 0;
})