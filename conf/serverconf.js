'use strict'

module.exports.appConfig = {
    app_port: process.env.PORT || 5000
}

module.exports.dbConfig = {
    db_url      : process.env.DB_URL  || 'localhost',
    db_port     : process.env.DB_PORT || 27017,
    db_name     : process.env.DB_NAME || 'clarin',
    db_username : process.env.DB_USER,
    db_password : process.env.DB_PASS,
}