const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Ola mundo' })
});

routes.post('/usuarios/',(req, res) => {
    return res.json({ ok: "ok" });
})

module.exports = routes;