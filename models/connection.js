const Database = require('better-sqlite3');

const path =require('path')

console.log(process.env.NODE_ENV);
const dbPath = process.env.NODE_ENV === 'DEV' ? "models/database.sqlite3": path.join(process.resourcesPath, "/database.sqlite3")
console.log(dbPath)
const db = new Database(dbPath);
db.pragma("journal_mode = WAL")

module.exports=db;