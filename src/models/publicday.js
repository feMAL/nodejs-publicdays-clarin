'use strict'

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let type = {
    values: [ 'inamovible', 'trasladable', 'nolaborable', 'puente' ],
    message: '{values} no es un tipo valido'
};

let Feriado_Schema = new Schema({
    motivo   : { 
        type: String,
        required: [true, 'El campo Motivo es necesario']
    },
    tipo     : {  // String // inamovible | trasladable | nolaborable | puente
        type: String,
        enum: type,
        required: [true, 'El campo Tipo es necesario']
     },
    dia      : { // Number // Día del mes
        type: Number,
        required: [true, 'El campo Dia es necesario']
    },
    mes      : { // Number // Número de mes en base 1 (enero = 1)
        type: Number,
        required: [true, 'El campo Mes es necesario']
    }, 
    id       : { // String // Identificador único de feriado
        type: String,
        required: [true, 'El campo Id es necesario']
    },
    info : {
        type: String
    },
    original : { type: String },// en caso de tipo = trasladable
    // en caso de opcional
    opcional : { type: String },// String // Propiedad con valor de opción
    // Ejemplo opcional
    // "opcional": "religion",
    religion: { type: String },
    origen   : { type: String } //Origne del feriado (pais)
});

module.exports = mongoose.model('publicday', Feriado_Schema);