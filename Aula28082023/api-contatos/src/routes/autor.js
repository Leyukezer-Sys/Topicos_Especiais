const express = require('express');
const router = express.Router();

router.get('/autor', function(req,res){
    return res.send("Autor: Leyukezer Cruz de Lima");
});

router.get('/autor/sobre', function (request, response) {
    const info = {
        autor: "Leyukezer Cruz",
        email: "leyukezer.c@ifro.edu.br",
        telefone: "(69) 99354-2265"
    };
    return response.json(info);
});

module.exports = router;