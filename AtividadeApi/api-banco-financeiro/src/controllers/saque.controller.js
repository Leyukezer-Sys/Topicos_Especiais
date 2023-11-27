const connection = require('../configs/mysql.config');
const validacao = require('validatorjs');

function list(req, res) {
    connection.query('SELECT * FROM saque, conta, cliente WHERE conta_id = id_con AND cliente_id = id_cli;', function (err, result) {
        if (err) return res.json({ erro: err.sqlMessage });

        return res.json(result);
    });
}

module.exports = { list };