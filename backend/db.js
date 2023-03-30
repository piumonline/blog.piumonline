const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql123',
    database: 'myblogsite'
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = db;