const { Schema, model } = require('mongoose');

const Carro = require('./Carro');

const UsuarioSchema = new Schema({
    uid: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    avatar: String,
    email: {
        type: String,
        required: true
    },
    carro: String,
    telefone: String
}, {
    timestamps: true
});

module.exports = model('Usuario', UsuarioSchema);