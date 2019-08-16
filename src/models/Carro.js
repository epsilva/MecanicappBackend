const { Schema, model } = require('mongoose');

const CarroSchema = new Schema({
    modelo: {
        type: String,
        required: true
    },
    avatar: String,
    placa: {
        type: String,
        required: true
    },
    usuario: String,
    marca: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = model('Carro', CarroSchema);