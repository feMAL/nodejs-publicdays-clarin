'use strict'

let { dbConfig }  = require('../conf/serverconf')
let loadService   = require('../src/services/publicsdays');
let mongoose      = require('mongoose');


const ENV = process.env.NODE_ENV;
let url = `mongodb://${dbConfig.db_url}:${dbConfig.db_port}/${dbConfig.db_name}`;

if(ENV === 'production'){
    url = `mongodb://${dbConfig.db_username}:${dbConfig.db_password}@${dbConfig.db_url}/${dbConfig.db_name}`;
}

mongoose.Promise = global.Promise;

mongoose.connect(url,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}, (err)=>{
    if(err){
        throw err;
    }
    // Ejecutar Carga inicial de Feriados.
    loadService.getPublicDaysFromProvider(new Date().getFullYear());
});

module.exports ={
    stopDataBase
}