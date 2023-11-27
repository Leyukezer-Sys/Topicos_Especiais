const connection = require('../configs/mysql.config');
const validacao = require('validatorjs');

function list(req, res) {
    connection.query('SELECT t.*, conta.*, cliente.nome FROM transferencia t, conta, cliente WHERE (conta_origem_id = id_con OR conta_destino_id = id_con) AND cliente_id = id_cli', function (err, result) {
        if (err) return res.json({ erro: err.sqlMessage });

        return res.json(result);
    });
}

module.exports = { list };