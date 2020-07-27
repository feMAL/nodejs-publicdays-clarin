'use strict'

let { dbConfig }  = require('../conf/serverconf')
let { appConfig } = require('../conf/serverconf')
let app           = require('./app')
let mongoose      = require('mongoose');

const ENV = process.env.NODE_ENV;
let url = `mongodb://${dbConfig.db_url}:${dbConfig.db_port}/${dbConfig.db_name}`;
let port  = appConfig.app_port; 

if(ENV === 'production'){
    url = `mongodb+srv://${dbConfig.db_username}:${dbConfig.db_password}@${dbConfig.db_url}/${dbConfig.db_name}`;
}

mongoose.Promise = global.Promise;

mongoose.connect(url,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}, (err)=>{
    if(err){
        throw err;
    }else{
        console.log('#- Database MongoDB running..');
        /**  Ejecución del API  **/
        app.listen(port, ( ) => {
            console.log( `#- Application Server running on ${port}` );
        })
    }
});
