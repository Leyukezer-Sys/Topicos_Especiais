//importando a biblioteca e definindo uma aplicação tipo express
const { application } = require('express');
const express = require('express');

const app = express();

app.use(express.json());

const listaContatos = [
    {
        id: 1,
        nome: "christine Ray",
        data: "2023-02-06",
        telefone: "(284) 901-8328",
        email: "mauris@protonmail.ca"
    },
    {
        id: 2,
        nome: "Eagan Hutchinson",
        data: "2023-02-04",
        telefone: "(892) 511-7166",
        email: "eget.odio@icloud.org"
    },
    {
        id: 3,
        nome: "Brock Lambert",
        data: "2023-03-09",
        telefone: "(145) 7158-4122",
        email: "nullam.vitae.diam@yahoo.org"
    },
    {
        id: 4,
        nome: "Craig Vinson",
        data: "2024-06-21",
        telefone: "(437) 598-0259",
        email: "nunc.sed@google.ca"
    }
];
//Definindo EndPoints (Rotas)
//Rota Principal
app.get('/', function (request, response) {
    response.send('SHOW! A API FUNCIONA!');
});

//Rota retorno autor
app.get('/autor', function (request, response) {
    response.send('Autor Responsavel: Leyukezer Cruz');
});

app.get('/autor/sobre', function (request, response) {
    const info = {
        autor: "Leyukezer Cruz",
        email: "leyukezer.c@ifro.edu.br",
        telefone: "(69) 99354-2265"
    };
    return response.json(info);
});
//Listar todos os contatos
app.get('/contatos', function (req,res) {   
    return res.json({dados: listaContatos})    
})

//criar um novo contato
app.post('/contato', function (req, res) {
    const nome = req.body.nome;
    const data = req.body.data;
    const telefone = req.body.telefone;
    const email = req.body.email;
    
    const quant = listaContatos.length;

    const novoContato = {
        id: quant + 1,
        nome: nome,
        data: data,
        telefone: telefone,
        email: email
    }

    listaContatos.push(novoContato);
    return res.json(novoContato);    
})

//Editar um contato Existente
app.put('/contato/:codigo', function (req, res){
    const codigo = req.params.codigo;

    let contato = null;

    for (const _contato of listaContatos) {
        if (_contato.id == codigo){
            contato = _contato;
        }        
    }

    if (contato == undefined) {
        return res.json({erro: `Contato #${codigo} nao foi encontrado.`})
    }else{
        
    const nome = req.body.nome;
    const data = req.body.data;
    const telefone = req.body.telefone;
    const email = req.body.email;

    contato.nome = nome;
    contato.data = data;
    contato.telefone = telefone;
    contato.email = email

    return res.json(contato);
    } 
})

//excluir um contato ja existente
app.delete('/contato/:codigo', function (req, res) {
    const codigo = req.params.codigo;
    let _cond = true;
    for (const _contato of listaContatos) {
        if (_contato.id == codigo){
            listaContatos.splice(listaContatos.indexOf(codigo),1)
            _cond = false;
            return res.send(`o contato: ${codigo} Excluido`);
        }        
    }
    if (_cond) {
    return res.json({erro: `Contato #${codigo} nao foi encontrado.`})  
    }
})

//Iniciando A Aplicação na porta 3000
app.listen(3000, function () {
    console.log('API iniciada na porta 3000');    
});