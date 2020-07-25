'use strict'

let express        = require('express');
let app            = express();

//Importando rutas y servicios
let publicDays_Route = require('./routes/publicsdays');

/**  Middlewares del API  **/
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With,Content-Type,Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
    res.header('Allow','GET,POST,PUT,DELETE,OPTIONS');

    next();
});

/** Ruta del API */
app.use('/api', [
    publicDays_Route
]);



module.exports = app