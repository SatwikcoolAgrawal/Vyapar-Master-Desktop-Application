const connection=require('./connection')
const {filter, createProductTable} = require('./queries')

module.exports={connection, filter, createProductTable};