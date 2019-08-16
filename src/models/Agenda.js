const { Schema, model } = require('mongoose');

const AgendaSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    dataInicio: {
        type: Date,
        required: true
    },
    dataFim: {
        type: Date,
        required: true
    },
    usuario: String,
    descricao: String,

}, {
    timestamps: true
});

module.exports = model('Agenda', AgendaSchema);