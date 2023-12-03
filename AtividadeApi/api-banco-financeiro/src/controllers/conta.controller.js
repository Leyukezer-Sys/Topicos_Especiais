const connection = require('../configs/mysql.config');
const validacao = require('validatorjs');

function list(req, res) {
    connection.query('SELECT * FROM conta, agencia, cliente WHERE agencia_id = id_age AND cliente_id = id_cli;', function (err, result) {
        if (err) return res.json(err.message);

        return res.json(result);
    });
}
function create(req, res){
    regra = {
        numero : 'required|min:3',
        data_abertura :'required|date',
        saldo :'required',
        valor_limite :'required|double',
        agencia_id : 'required|integer',
        cliente_id : 'required|integer'
    }

    let teste = new validacao(req.body, regra);

    if(teste.fails()) return res.json(teste.errors);

    const {numero, data_abertura, saldo, valor_limite, agencia_id, cliente_id} = req.body;

    connection.query('INSERT INTO conta VALUES (NULL, ?, ?, ?, ?, ?, ?);', {numero, data_abertura, saldo, valor_limite, agencia_id, cliente_id}, function(err, result){
        if (err) return res.json(err.message);
        
        if(result.affectedRows == 0) return res.json({erro: 'nao foi possivel inserir uma conta.'});

        return res.json({id: result.insertId, numero, data_abertura, saldo, valor_limite});
    });
}
module.exports = { list };