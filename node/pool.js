const mysql = require("mysql");

var pool = mysql.createPool({
  host:"localhost",
  port:3306,
  user:"root",
  password:"123456yu",
  database:"keepme",
  connectionLimit:10
});


module.exports = pool;
