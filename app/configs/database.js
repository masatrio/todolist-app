require('dotenv').config();
const env = process.env;


module.exports = {
    "development": {
        "username": env.DB_USER,
        "password": env.DB_PASS,
        "database": env.DB_NAME,
        "host": env.DB_HOST,
        "dialect": "mysql"
    },
    "test": {
        "username": env.DB_USER,
        "password": env.DB_PASS,
        "database": env.DB_NAME,
        "host": env.DB_HOST,
        "dialect": "mysql"
    },
    "production": {
        "username": env.DB_USER,
        "password": env.DB_PASS,
        "database": env.DB_NAME,
        "host": env.DB_HOST,
        "dialect": "mysql"
    }
};
