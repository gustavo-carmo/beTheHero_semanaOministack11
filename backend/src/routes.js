const express = require('express');

const sessionController = require('./controllers/SessionController');
const ongController = require('./controllers/OngController');
const profileController = require('./controllers/ProfileController');
const incidentController = require('./controllers/IncidentController');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;