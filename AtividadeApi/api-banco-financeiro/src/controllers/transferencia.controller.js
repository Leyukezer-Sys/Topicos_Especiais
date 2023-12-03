const connection = require('../configs/mysql.config');
const validacao = require('validatorjs');

function list(req, res) {
    connection.query('SELECT t.*, conta.*, cliente.nome FROM transferencia t, conta, cliente WHERE (conta_origem_id = id_con OR conta_destino_id = id_con) AND cliente_id = id_cli', function (err, result) {
        if (err) return res.json({ erro: err.sqlMessage });

        return res.json(result);
    });
}

function create(req,res){
    regras= {
        valor: 'required|double',
        data_hora: 'required|datetime',
        descricao: 'required|min:4',
        conta_origem_id : 'required|integer',
        conta_destino_id: 'required|integer',
    }

    let teste = new validacao(req.body, regras);

    if(teste.fails()) return res.json(teste.errors);

    const {valor, data, descricao, conta_origem, conta_destino} = req.body;

    connection.query('UPDATE conta SET saldo = saldo - ? WHERE id_con = ?;', {valor, conta_origem}, function (err, result) {
        if (err) return res.json(err.message);
        if (result.affectedRows == 0) return res.json({erro: "nao foi possivel atualizar o saldo da conta Origem..."})
        res.json({conta_origem: {conta_origem}}); 
     });

     connection.query('UPDATE conta SET saldo = saldo + ? WHERE id_con = ?;', {valor, conta_destino}, function (err, result) {
        if (err) return res.json(err.message);
        if (result.affectedRows == 0) return res.json({erro: "nao foi possivel atualizar o saldo da conta Destino..."})
        res.json({conta_destino: {conta_destino}}); 
     });

    connection.query('INSERT INTO transferencia VALUES ( NULL, ?, ?, ?, ?, ?);', {valor, data, descricao, conta_origem,conta_destino}, function(err, result) {
        if(err) return res.json(err.message);
        if(result.affectedRows == 0) return res.json({erro: "nao foi possivel inserir uma Transferencia."});
        return res.json({deposito: {id:result.insertId, data, descricao, valor}});
    });
}

module.exports = { list };