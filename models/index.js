const connection=require('./connection')
const {filter, createProductTable, createTransactionTable, insertProduct} = require('./queries')

module.exports={connection, filter, createProductTable, createTransactionTable, insertProduct};