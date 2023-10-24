const { stringify } = require("querystring");

//dados da lista de contatos
const listContatos = [
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

//funcao lista
function list(req, res) {
    return res.json(listContatos);
}

function searchList(req, res) {
    let codigo = req.params.codigo;
    let _cond = true;   

    for (const _contato of listContatos) {
        if (_contato.id == codigo){
            _cond = false;
            return res.json(_contato);
        }        
    }

    if (_cond) {
    return res.send(`Contato #${codigo} nao foi encontrado.`)  
    }
}

//funcao criar contato
function create(req, res) {
    const nome = req.body.nome;
    const data = req.body.data;
    const telefone = req.body.telefone;
    const email = req.body.email;
    
    const quant = listContatos.length;

    const novoContato = {
        id: quant + 1,
        nome: nome,
        data: data,
        telefone: telefone,
        email: email
    }

    listContatos.push(novoContato);
    return res.json(listContatos); 
}

function update(req, res) {
    const codigo = req.params.codigo;

    let contato = null;

    for (const _contato of listContatos) {
        if (_contato.id == codigo){
            contato = _contato;
        }        
    }

    if (contato == undefined) {
        return res.send(`Contato #${codigo} nao foi encontrado.`)
    }else{
        
    const nome = req.body.nome;
    const data = req.body.data;
    const telefone = req.body.telefone;
    const email = req.body.email;
    
    if (nome == undefined || nome == '') {
        return res.send(" Nome Inválido")
    } else {
        if (data == undefined || data == '') {
            return res.send(" data Inválido")
        } else {
            if (telefone == undefined || telefone == '') {
                return res.send(" Telefone Inválido")
            } else {
                if (email == undefined || email == '') {
                    return res.send(" email Inválido")
                } else {
                    contato.nome = nome;
                    contato.data = data;
                    contato.telefone = telefone;    
                    contato.email = email; 
                } 
            }
        }   
    }
        return res.json(contato);
    }
}

function destroy(req, res) {
    const codigo = req.params.codigo;
    let _cond = true;

    for (const _contato of listContatos) {
        if (_contato.id == codigo){
            listContatos.splice(listContatos.indexOf(codigo),1)
            _cond = false;
            return res.send(`o contato ${codigo} foi Excluido`);
        }        
    }

    if (_cond) {
    return res.send(`Contato #${codigo} nao foi encontrado.`)  
    }
}
module.exports = {list, searchList, create, update, destroy};