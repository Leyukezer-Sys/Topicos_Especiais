const connection = require('../configs/mysql.config');
const validacao = require('validatorjs');

function list(req, res) {
    connection.query('SELECT * FROM banco', function (err, result) {
        if (err) return res.json(err.message);

        return res.json(result);
    });
}

function create(req,res){
    const regra = {
        nome_fantasia : 'required|min:4',
        razao_social: 'required|min:4',
        cnpj : 'required|min:14|max:18',
        numero :'required|min:1|max:3|integer'
    }

    let teste = new validacao(req.body, regra);

    if (teste.fails()) return res.json(teste.errors); 

    const {nome, razao_social, cnpj, numero} = req.body;

    connection.query('INSERT INTO banco VALUES (NULL, ?, ?, ?, ?);',{nome, razao_social, cnpj, numero}, function (err, result) {

        if (err) return res.json(err.message);

        if (result.affectedRows == 0) return res.json({erro: "ocorreu um erro ao inserir o novo banco."});

        return res.json({id:result.insertId, nome, razao_social, cnpj, numero});
    });
}

module.exports = { list };