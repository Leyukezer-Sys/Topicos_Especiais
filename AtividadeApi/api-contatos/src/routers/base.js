const express = require('express');
const router = express.Router();
const Mustache = require('mustache');

const view = {
    title: "API",
    descricao: "Funcionando!"
};

//rotas
router.get('/', function (req, res) {
    return res.send(Mustache.render("<center><h1>{{title}}</h1><br>{{descricao}}</center>", view))
})

module.exports = router;