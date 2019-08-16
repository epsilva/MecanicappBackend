const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');

const routes = express.Router();

routes.post('/usuario', UsuarioController.store);
routes.get('/usuarios', UsuarioController.index);


module.exports = routes;