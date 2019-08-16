const { Schema, model } = require('mongoose');

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
    telefone: String
}, {
    timestamps: true
});

module.exports = model('Usuario', UsuarioSchema);