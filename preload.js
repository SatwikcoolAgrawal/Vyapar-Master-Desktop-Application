const {contextBridge, ipcMain, ipcRenderer}= require('electron')
const ipc=ipcRenderer
const dbmgr=require('./models/connection')
contextBridge.exposeInMainWorld('UserAPI',{
    getAllOrders:()=>ipc.invoke('getAll'),
    getOrderDetails: (orderID)=>ipc.invoke('getOrder',orderID),
    makeOrder:(orderDetails)=>ipc.invoke('createOrder',orderDetails),
    closeApp: ()=>ipc.send('closeApp'),
    maximizeApp: ()=>ipc.send('maximizeApp'),
    minimizeApp:()=>ipc.send('minimizeApp')
    
})