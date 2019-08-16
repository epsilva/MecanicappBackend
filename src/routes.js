const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');

const AgendaController = require('./controllers/AgendaController');
const CarroController = require('./controllers/CarroController');


const routes = express.Router();

routes.post('/usuario', UsuarioController.store);
routes.get('/usuarios', UsuarioController.index);

routes.get('/agendas', AgendaController.index);
routes.get('/agendas/:idUsuario', AgendaController.index);
routes.post('/agenda', AgendaController.store);

routes.get('/carros', CarroController.index);
routes.get('/carros/:idUsuario', CarroController.index);
routes.post('/carro', CarroController.store);


module.exports = routes;