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
        titleBarOverlay:{
            color: 'rgb(15,23,42)',
            height:35,
            symbolColor: '#fff',
        },
        title :"Entry Managment App",
        width:1000,
        height:600,
        minWidth:600,
        minHeight:400,
        webPreferences:{
            devTools:isDev,
            nodeIntegration:false,
            contextIsolation:true,
            sandbox:false,
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