'use strict'

let axios    = require('axios').default;
let PublicDay = require('../models/publicday');
let dbConnection = require('../../lib/script-publicdays');

const getPublicDaysFromProvider = async (year) => {
    let url = `http://nolaborables.com.ar/api/v2/feriados/${year}?incluir=opcional`;
    axios.get(url)
        .then( async (res)=>{
            let feriados = res.data;
            await feriados.forEach( (el)=>{
                let publicDayToSave = el;
                PublicDay.find(publicDayToSave,( err, exist ) => {
                    if(err){
                        throw err;
                    }else{
                        if(!exist[0]){
                            let publicDayToSave = new PublicDay(el);
                            publicDayToSave.save((err,publicDaySaved)=>{
                                if(err){
                                    console.log(err);
                                }
                                return publicDaySaved;
                            });
                        }else{
                            console.log('este feriado ya existe');
                        }
                    }
                });
            });
        }).catch(err => console.log(err.message));
}

module.exports = {
    getPublicDaysFromProvider
}