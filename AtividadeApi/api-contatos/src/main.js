//importando a biblioteca e definindo uma aplicação tipo express
const { application } = require('express');
const express = require('express');

const app = express();
//importação dos arquivos de confg rotas
const baseRouter = require('./routes/base');
const contatoRouter = require('./routes/contato');
const autorRouter = require('./routes/autor');

app.use(express.json());


//Definindo EndPoints (Rotas)
//Rota Principal
app.use(baseRouter);

//Rota retorno autor
app.use(autorRouter);

//rota Contatos
app.use(contatoRouter);

//Iniciando A Aplicação na porta 3000
app.listen(3000, function () {
    console.log('API iniciada na porta 3000');    
});