require('dotenv').config();
const env = process.env;


module.exports = {
    "development": {
        "username": env.DB_USER,
        "password": env.DB_PASS,
        "database": env.DB_NAME,
        "host": env.DB_HOST,
        "dialect": "postgres"
    },
    "test": {
        "username": env.DB_USER,
        "password": env.DB_PASS,
        "database": env.DB_NAME,
        "host": env.DB_HOST,
        "dialect": "postgres"
    },
    "production": {
        "username": env.DB_USER,
        "password": env.DB_PASS,
        "database": env.DB_NAME,
        "host": env.DB_HOST,
        "dialect": "postgres",
        "dialectOptions": {
            "ssl": {
              "require": true,
              "rejectUnauthorized": false
            },
        }
    }
};
