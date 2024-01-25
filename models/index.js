const db=require('./connection')
const {filter, createProductTable, createTransactionTable, insertProduct,selectProduct} = require('./queries')

module.exports={db, filter, createProductTable, createTransactionTable, insertProduct,selectProduct};