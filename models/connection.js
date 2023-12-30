const Database = require('better-sqlite3');
const db = new Database('models/database.db', { verbose: console.log });

module.exports=db;