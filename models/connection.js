const Database = require('better-sqlite3');
const path =require('path')

console.log(process.env.NODE_ENV);
const dbPath =
    process.env.NODE_ENV === "DEV"
        ? "models/database.db"
        : path.join(process.resourcesPath, "./database.db")

const db = new Database(dbPath, { verbose: console.log });
db.pragma("journal_mode = WAL")

module.exports=db;