const validacoes = require('validatorjs');
const funcoes = require('./contato.functions');
const connection = require('../configs/mysql.config');

//funcao lista
function list(req, res) {
    connection.query('SELECT C.*, CA.nome categoria FROM contatos C, categorias CA WHERE c.id_categoria_fk = CA.id', function (err, result) {
        if(err){
            return res.json({erro: 'Ocorreram erros ao buscar os dados'});
        }
        return res.json(result);
    });
}

function searchList(req, res) {
    let codigo = req.params.codigo;
    connection.query('SELECT C.*, CA.nome categoria FROM contatos C, categorias CA WHERE c.id_categoria_fk = CA.id AND id = ?',[codigo], function (err, result) {
        if(err){
            return res.json({erro: 'Ocorreram erros ao buscar contato'});
        }
        return res.json(result);
    });
}

//funcao criar contato
function create(req, res) {

    let regras = {
        nome: 'required|min:5',
        data: 'required|date',
        telefone: ['required', 'regex:/^\\(\\d{2}\\)\\s?\\d\\d{4}\\-\\d{4}$/'],
        email: 'required|email',
        categoria: 'required|integer'
    };

    let validacao = new validacoes(req.body, regras);

    if (validacao.fails()) {
        return res.json(validacao.errors);
    }
        const {nome, data, telefone, email, categoria} = req.body;
        connection.query('INSERT INTO contatos VALUES (NULL,?,?,?,?,?);',[nome,data,telefone,email,categoria], function (err, result) {
            if (err) {
                return res.json({erro: err.message})
            }
            if(result.affectedRows == 0){
                return res.json({erro: 'Falha ao tentar Cadastrar'});
            }else return res.json({id: result.insertId, nome, data, telefone, email, categoria});
        });
}

function update(req, res) {
    let regras = {
        nome: 'required|min:5',
        data: 'required|date',
        telefone: ['required','regex:/^\\(\\d{2}\\)\\s?\\d\\d{4}\\-\\d{4}$/'],
        email: 'required|email',
        categoria: 'integer'
    };

    let validacao = new validacoes(req.body, regras);

    if (validacao.fails()) {
        return res.json(validacao.errors)
    }
    const codigo = req.params.codigo;
    const {nome, data, telefone, email, categoria} = req.body;
    
        connection.query('UPDATE contatos SET nome = ?, data_nascimento = ?, telefone = ?, email = ?, id_categoria_fk = ? WHERE id = ?;',[nome,data,telefone,email,categoria, codigo], function (err, result) {
            if (err) {
                return res.json({erro: err.message})
            }
            if(result.affectedRows == 0){
                return res.json({erro: 'Falha ao tentar Atualizar'});
            }else return res.json({nome, data, telefone, email});
        });
}

function destroy(req, res) {
    const codigo = req.params.codigo;
    connection.query('DELETE FROM contatos WHERE id = ?;',[codigo], function (err, result) {
        if (err) {
            return res.json({erro: err.message})
        }
        return res.json({information: 'Excluido com sucesso!'})
    })
}
module.exports = {list, searchList, create, update, destroy};