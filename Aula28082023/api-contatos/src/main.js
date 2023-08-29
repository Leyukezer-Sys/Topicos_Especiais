const { application } = require('express');
const express = require('express');

const app = express();

//Rota Principal
app.get('/', function (request, response) {
    response.send('SHOW! A API FUNCIONA!');
});

//Rota retorno autor
app.get('/autor', function (request, response) {
    response.send('Autor Responsavel: Leyukezer Cruz');
});

app.get('/sobre', function (request, response) {
    const info = {
        autor: "Leyukezer Cruz",
        email: "leyukezer.c@ifro.edu.br",
        telefone: "(69) 99354-2265"
    };

    response.json(info.autor);
});

//Iniciando A Aplicação na porta 3000
app.listen(3000, function () {
    console.log('API iniciada na porta 3000');    
});