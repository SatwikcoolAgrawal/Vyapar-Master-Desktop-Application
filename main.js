const {app, BrowserWindow,session}=require('electron');
const url  = require('url');
const path =require('path');


// const { session } = require('electron')



function createMainWindow(){
    const mainWindow= new BrowserWindow({
        // titleBarStyle:"hidden",
        title :"Entry Managment App",
        width:1000,
        height:600,
        minWidth:500,
        minHeight:300,
        webPreferences:{
            // devTools:false,
            preload:path.join(__dirname,'preload.js')
        }
    });
    mainWindow.webContents.openDevTools()

    const startUrl=url.format({
        pathname: path.join(__dirname,'./app/build/index.html'),
        protocol:'file',
    });


    
    mainWindow.loadURL(startUrl);
}

app.whenReady().then(createMainWindow);