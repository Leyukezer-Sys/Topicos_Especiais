const connection = require('../configs/mysql.config');
const validacao = require('validatorjs');

function list(req, res) {
    connection.query('SELECT * FROM saque, conta, cliente WHERE conta_id = id_con AND cliente_id = id_cli;', function (err, result) {
        if (err) return res.json({ erro: err.sqlMessage });

        return res.json(result);
    });
}

function create(req,res){
    regras = {
        valor :'required|double',
        data_hora :'required|date',
        conta_id :'required|numeric',
    }

    let teste = new validacao(req.body, regras);

    if(teste.fails()) return res.json(teste.errors);

    const { valor, data, conta_id} = req.body;

    connection.query('UPDATE conta SET saldo = saldo - ? WHERE id_con = ?;', [valor, conta_id], function (err, result) {
        if (err) return res.json(err.message);
        if (result.affectedRows == 0) return res.json({erro: "nao foi possivel atualizar o saldo da conta..."})
        res.json({conta: {conta_id}}); 
     });

    connection.query('INSERT INTO saque VALUES ( NULL, ?, ?, ?);', [valor, data, conta_id], function(err, result) {
        if(err) return res.json(err.message);
        if(result.affectedRows == 0) return res.json({erro: "nao foi possivel inserir um Saque."});
        return res.json({deposito: {id:result.insertId, data, valor, conta_id}});
    });

}
function destroy(req,res){
    const id_dep = req.params.codigo;
    connection.query('DELETE FROM saque WHERE id_saq = ?;', [id_dep], function(err, result) {
        if(err) return res.json(err.message);
        if(result.affectedRows == 0) return res.json({erro: "nao foi possivel excluir o saque."});
        return res.json({sucesso:" Saque excluido!"});
    });
}

module.exports = { list, create, destroy };