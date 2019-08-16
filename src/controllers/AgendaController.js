const axios = require('axios');
const Agenda = require("../models/Agenda");

module.exports = {
    async index(req, res) {
        const idUsuario = req.params.idUsuario;

        if (idUsuario) {
            return res.json(await Agenda.find({
                $and: [
                    { usuario: { $eq: idUsuario } }
                ]
            }));
        } else {
            return res.json(await Agenda.find());
        }
    },

    async store(req, res) {
        const { titulo, dataInicio, dataFim, usuario, descricao } = req.body;

        const dev = await Agenda.create({
            titulo, 
            dataInicio,
            dataFim, 
            usuario,
            descricao
        });

        return res.json(req.body);
    }
}