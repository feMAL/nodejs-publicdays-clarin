'use strict'

let PublicDay = require('../models/publicday');

const getAllPublicDays = ( req, res ) => {
    PublicDay.find().exec((err,feriados)=>{
        if(err){
            return res.status(500).send({ _ok: false, status:'error', message: err.message });
        }
        return res.status(200).send({ _ok: true, status: 'ok', feriados });
    });
}

const getPublicDay = ( req, res ) => {
    let idPublicDay = new String();
    idPublicDay = req.params.id;
    if(!idPublicDay){
        return res.status(400).send({ _ok: false, status:'error', message: 'La request enviada no es correcta' });
    }
    if(idPublicDay.trim().length==24){
        PublicDay.findOne({_id: idPublicDay}).exec((err,feriado)=>{
            if(err){
                return res.status(500).send({ _ok: false, status:'error', message: err.message });
            }
            if(!feriado){
                return res.status(404).send({ _ok: false, status:'error', message: 'No se ha encontrado el recurso solicitado.' });
            }
            return res.status(200).send({ _ok: true, status: 'ok', feriado });
        });
    }
}

const updatePublicDay = ( req, res ) => {
    let idPublicDay = new String();
    let params      = req.body;
    
    idPublicDay = req.params.id;
    delete params._id;

    if(!validInputs(params)){
        return res.status(400).send({ _ok: false, status:'error', message: 'La request enviada no es correcta' });
    }
    if(idPublicDay.trim().length==24){
        PublicDay.findOneAndUpdate(idPublicDay,params,(err,feriadoToUpdate)=>{
            if(err){
                return res.status(500).send({ _ok: false, status:'error', message: err.message });
            }
            if(!feriadoToUpdate){
                return res.status(404).send({ _ok: false, status:'error', message: 'No se ha encontrado el feriado solicitado.' });
            }else {
                return res.status(200).send({ _ok: true, status: 'ok', feriado: feriadoToUpdate });
            }
        });
    }else{
        return res.status(400).send({ _ok: false, status:'error', message: 'La request enviada no es correcta' });
    }
}

const validInputs = (params) => {
    let status = false;
    let paramsToValidate = params;
    let tipo = [ 'inamovible', 'trasladable', 'nolaborable', 'puente' ];


    paramsToValidate.motivo != null ? status = true : status = false ;
    tipo.indexOf(paramsToValidate.tipo.trim().toLowerCase()) && status === true ? status = true : status = false ;
    paramsToValidate.dia <= 31  && paramsToValidate.dia > 0  && status === true ? status = true : status = false ;
    paramsToValidate.mes <= 12  && paramsToValidate.mes > 0  && status === true ? status = true : status = false ;
    paramsToValidate.id  && status === true ? status= true : status = false ;

    return status;
}

module.exports = {
    getAllPublicDays,
    getPublicDay,
    updatePublicDay
}