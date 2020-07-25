'use strict'

let express             = require('express');
let publicDayController = require('../controllers/publicdays');

let api                 = express.Router();

api.put('/feriado/:id', publicDayController.updatePublicDay);
api.get('/feriados', publicDayController.getAllPublicDays);
api.get('/feriado/:id', publicDayController.getPublicDay);

module.exports = api