const {app, BrowserWindow,session}=require('electron');
const url  = require('url');
const path =require('path');
const dotenv = require('dotenv');
dotenv.config();
const isDev=process.env.NODE_ENV ==='DEV'

// const { session } = require('electron')

console.log(isDev);

function createMainWindow(){
    const mainWindow= new BrowserWindow({
        // titleBarStyle:"hidden",
        autoHideMenuBar: true,
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
}

app.whenReady().then(createMainWindow);