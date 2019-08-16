const axios = require('axios');
const Carro = require("../models/Carro");

module.exports = {
    async index(req, res) {
        const idUsuario = req.params.idUsuario;

        if (idUsuario) {
            console.log('Com usuario');
            return res.json(await Carro.find({
                $and: [
                    { usuario: { $eq: idUsuario } }
                ]
            }));
        } else {
            console.log('SEM usuario');
            return res.json(await Carro.find());
        }
    },

    async store(req, res) {
        const { modelo, avatar, placa, usuario, marca } = req.body;

        const dev = await Carro.create({
            modelo,
            avatar,
            placa,
            usuario, 
            marca
        });

        return res.json(req.body);
    }
}