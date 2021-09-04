const mysql = require('mysql');

const env = process.env;

const conn = mysql.createPool({
    host: env.MYSQL_HOST,
    user: env.MYSQL_USER,
    password: env.MYSQL_PASS,
    database: env.MYSQL_DB,
});

module.exports = conn;
