const {contextBridge,ipcRenderer}= require('electron')
const ipc=ipcRenderer
const {createProductTable}=require('../models')

console.log(createProductTable())
// let conditions = [
//     {column : 'ID', operator : '=', value : Number(123)},
//     {column : 'NAME', operator : 'LIKE', value : '%ABC%'}
// ]

// console.log(filter(conditions))

contextBridge.exposeInMainWorld('UserAPI',{
    getAllOrders:()=>ipc.invoke('getAll'),
    getOrderDetails: (orderID)=>ipc.invoke('getOrder',orderID),
    makeOrder:(orderDetails)=>ipc.invoke('createOrder',orderDetails),
    getPurchaseTotal:()=>ipc.invoke('getPurchaseTotal')
})