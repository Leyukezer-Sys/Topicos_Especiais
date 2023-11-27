const connection = require('../configs/mysql.config');
const validacao = require('validatorjs');

function list(req, res) {
    connection.query('SELECT * FROM banco', function (err, result) {
        if (err) return res.json({ erro: err.sqlMessage });

        return res.json(result);
    });
}

module.exports = { list };