const {contextBridge, ipcMain, ipcRenderer}= require('electron')
const dbmgr=require('./models/connection')
// contextBridge.exposeInMainWorld('UserAPI',{
//     getAllOrders: ipcRenderer.invoke('get-all'),
//     getOrderDetails: ipcRenderer.invoke('get-order',orderID),
//     makeOrder:ipcRenderer.invoke('make-order',orderDetails)
// })