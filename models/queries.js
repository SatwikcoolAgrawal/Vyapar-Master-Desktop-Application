const db = require('./connection')
// let db = connection.db;

 
// conditions = [
//     {column : 'ID', operator : '==', value : 123},
//     {column : 'NAME', operator : 'LIKE', value : '%ABC%'}
// ]


function filter(conditions){
    let query = 'SELECT * FROM USER';
    let values = []
    if(conditions && conditions.length > 0){
        query += ' WHERE ';
        conditions.forEach((condition, index) => {
            if(index > 0){
                query += ' AND ';
            }
            query += `${condition.column} ${condition.operator} ?`;
            values.push(condition.value);
        });
       // console.log(values)
    }
    /*For the given conditions the query will be
    SELECT * FROM ENTRIES WHERE ProductName LIKE ? AND PaymentStatus LIKE ?; 
    
    here question mark are place holder whose value will be inserted by .all query in the upcoming lines
    */
    // console.log(query)
    const stmt = db.prepare(query);
    const result = stmt.all(values);
    // console.log(typeof(result))
    return result;
}

function createProductTable(){
    //Creates Product table if it does not exist in the database
    //here the unitcost will store the current price of the product
    const stmt = db.prepare(`CREATE TABLE IF NOT EXISTS PRODUCTS (
        productId INTEGER PRIMARY KEY, 
        productName TEXT, 
        unitPrice REAL
    )`);
    console.log(stmt);
    const info = stmt.run();
    //console.log(info.changes)
    return info
}

function createTransactionTable(){
    //create transaction table to store all the details about the transaction
    const stmt = db.prepare(`CREATE TABLE IF NOT EXISTS TRANSACTIONS (
        transactionId INTEGER PRIMARY KEY, 
        name TEXT, 
        productId INTEGER NOT NULL,
        unitPriceAtTransaction REAL,
        quantity REAL, 
        orderDate DATETIME, 
        totalPrice REAL, 
        loadingCharge BOOLEAN, 
        deliveryLocation TEXT, 
        payementDueDate DATETIME, 
        poc TEXT, 
        pocMobile NUMERIC,
        dispatchDate DATETIME,
        paymentStatus BOOLEAN,
        transactionType BOOLEAN,
        pullingStatus BOOLEAN,
        FOREIGN KEY (productId) REFERENCES PRODUCTS (productId)
    )`);
    const info = stmt.run();
    return info;
}

/*products = {name: 'productName', unitPrice: '123.45'}*/
function insertProduct(product){
    const sizeStmt = db.prepare(`SELECT * FROM PRODUCTS`);
    const sizeInfo = sizeStmt.all();
    let length = sizeInfo.length
    
    const stmt = db.prepare(`INSERT INTO PRODUCTS (productId, productName, unitPrice) VALUES(?, ?, ?)`);
    const info = stmt.run(length+1, product.name, Number(product.unitPrice));
    return info
}



module.exports={filter, createProductTable, createTransactionTable, insertProduct};