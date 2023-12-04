const connection = require('../configs/mysql.config');
const validacao = require('validatorjs');

function list(req, res) {
    connection.query('SELECT * FROM cliente', function (err, result) {
        if (err) return res.json(err.message);

        return res.json(result);
    });
}
function create(req, res) {
    regra = {
        nome: 'required|min:4',
        cpf_cnpj: 'required|min:11|max:18',
        rg : 'required|min:4',
        sexo : 'required|max:1',
        data_nasc : 'required|date',
        renda : 'required',
        endereco : 'required|min:4',
        email : 'required|email',
        telefone :['required', 'regex:/^\\(\\d{2}\\)\\s?\\d\\d{4}\\-\\d{4}$/']
    }

    let teste = new validacao(req.body, regra);

    if (teste.fails()) return res.json(teste.errors);

    const {nome, cpf_cnpj, rg, sexo, data_nasc, renda, endereco, email, telefone} = req.body;

    connection.query('INSERT INTO cliente VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?);', [nome,cpf_cnpj, rg, sexo, data_nasc, renda, endereco, email, telefone],function(err, result) {
        if(err) return res.json(err.message);

        if(result.affectedRows == 0) return res.json({erro: "nao foi possivel inserir o cliente"});
        
        return res.json({id:result.insertId, nome, sexo, renda, email, telefone});   
    });
}

function update(req, res){
    regra = {
        nome: 'required|min:4',
        cpf_cnpj: 'required|min:11|max:18',
        rg : 'required|min:4',
        sexo : 'required|max:1',
        data_nasc : 'required|date',
        renda : 'required',
        endereco : 'required|min:4',
        email : 'required|email',
        telefone :['required', 'regex:/^\\(\\d{2}\\)\\s?\\d\\d{4}\\-\\d{4}$/']
    }

    let teste = new validacao(req.body, regra);

    if (teste.fails()) return res.json(teste.errors);

    const id_cli = req.params.codigo;
    const {nome, cpf_cnpj, rg, sexo, data_nasc, renda, endereco, email, telefone} = req.body;

    connection.query('UPDATE cliente SET nome = ?, cpf_cnpj = ?, rg = ?, sexo = ?, data_nasc = ?, renda = ?, endereco = ?, email = ?, telefone = ? WHERE id_cli = ?;', [nome,cpf_cnpj, rg, sexo, data_nasc, renda, endereco, email, telefone, id_cli],function(err, result) {
        if(err) return res.json(err.message);

        if(result.affectedRows == 0) return res.json({erro: "nao foi possivel atualizar o cliente"});
        
        return res.json({id:result.insertId, nome, sexo, renda, email, telefone});   
    });
}

function destroy(req,res){
    const id_cli = req.params.codigo;
    connection.query('DELETE FROM cliente WHERE id_cli = ?;', [ id_cli],function(err, result) {
        if(err) return res.json(err.message);

        if(result.affectedRows == 0) return res.json({erro: "nao foi possivel EXCLUIR o cliente"});
        
        return res.json({sucess:"Cliente excluido"});   
    });
}

module.exports = { list, create, update, destroy };