const axios = require('axios');
const Usuario = require("../models/Usuario");

module.exports = {
    async index(req, res){
        const usuarios = await Usuario.find();

        return res.json(usuarios);
    },

    async store(req, res) {
        const { uid, nome, avatar, email, telefone} = req.body;
        const userExist = await Usuario.findOne({ uid });

        if(userExist){
            return res.json(userExist);
        }

        const dev =  await Usuario.create({
            uid, 
            nome, 
            avatar, 
            email, 
            telefone
        });

        return res.json(req.body);
    }
}