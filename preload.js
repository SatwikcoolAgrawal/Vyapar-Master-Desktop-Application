const {contextBridge, ipcMain, ipcRenderer}= require('electron')
const ipc=ipcRenderer
const dbmgr=require('./models/connection')
const filter = require('./models/queries');

// conditions = [
//     {column : 'ID', operator : '=', value : Number(123)},
//     {column : 'NAME', operator : 'LIKE', value : '%ABC%'}
// ]

// console.log(filter(conditions))

contextBridge.exposeInMainWorld('UserAPI',{
    getAllOrders:()=>ipc.invoke('getAll'),
    getOrderDetails: (orderID)=>ipc.invoke('getOrder',orderID),
    makeOrder:(orderDetails)=>ipc.invoke('createOrder',orderDetails),
})