const connection = require('../configs/mysql.config');
const validacao = require('validatorjs');
const aprovacao = require('../functions/pesquisa.function');

function list(req, res) {
    connection.query('SELECT * FROM agencia', function (err, result) {
        if (err) return res.json(err.message);

        return res.json(result);
    });
}

function create(req, res){
    const regra = {
        numero :'required|min:1',
        nome : 'required|min:4',
        razao_social : 'required|min:4',
        cnpj : 'required|min:14|max:18',
        telefone : ['required', 'regex:/^\\(\\D{2}\\)\\S?\\D\\D{4}\\-\\D{4}$/'],
        email : 'required|email',
        ban_id : 'required|integer'
    }

    let teste = new validacao(req.body,regra);
    if(teste.fails()){
        return res.json(teste.errors);
    }

    const {numero, nome, razao_social, cnpj, telefone, email, ban_id} = req.body;

    if (!aprovacao.searchBanco(ban_id)){
        return res.json({erro:"Precisa ter um banco cadastrado."});
    }

    connection.query('INSERT INTO agencia VALUES (NULL, ?, ?, ?, ?, ?, ?);',{numero, nome, razao_social, cnpj, telefone, email, ban_id}, function (err, result){
        if(err){
            return res.json(err.message)
        }
        if(result.affectedRows == 0){
            return res.json({erro: "Não foi possivel inserir nova agencia."});
        }
        return res.json({id:result.insertId, razao_social, telefone});
    });
}

module.exports = { list, create };