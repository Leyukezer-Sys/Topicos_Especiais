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
        renda : 'required|double',
        endereco : 'required|min:4',
        email : 'required|email',
        telefone :['required', 'regex:/^\\(\\d{2}\\)\\S?\\D\\D{4}\\-\\D{4}$/']
    }

    let teste = new validacao(req.body, regra);

    if (teste.fails()) return res.json(teste.errors);

    const {nome, cpf_cnpj, rg, sexo, data_nasc, renda, endereco, email, telefone} = req.body;

    connection.query('INSERT INTO cliente VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?);', {nome,cpf_cnpj, rg, sexo, data_nasc, renda, endereco, email, telefone},function(err, result) {
        if(err) return res.json(err.message);

        if(result.affectedRows == 0) return res.json({erro: "nao foi possivel inserir o cliente"});
        
        return res.json({id:result.insertId, nome, sexo, renda, email, telefone});   
    });
}

module.exports = { list };