const connection = require('../configs/mysql.config');
const validacao = require('validatorjs');

function list(req, res) {
    connection.query('SELECT * FROM deposito, conta, cliente WHERE conta_id = id_con AND cliente_id = id_cli;', function (err, result) {
        if (err) return res.json(err.message);

        return res.json(result);
    });
}

function create(req,res){
    regra = {
        valor :'required',
        data :'required|date',
        conta_id :'required'
    }

    let teste = new validacao(req.body, regra);

    if(teste.fails()) return res.json(teste.errors);

    const {valor, data, conta_id} = req.body;
    
    connection.query('UPDATE conta SET saldo = saldo + ? WHERE id_con = ?;', [valor, conta_id], function (err, result) {
        if (err) return res.json(err.message);
        if (result.affectedRows == 0) return res.json({erro: "nao foi possivel atualizar o saldo da conta..."});
     });

    connection.query('INSERT INTO deposito VALUES ( NULL, ?, ?, ?);', [valor, data, conta_id], function(err, result) {
        if(err) return res.json(err.message);
        if(result.affectedRows == 0) return res.json({erro: "nao foi possivel inserir um deposito."});
        return res.json({deposito: {id:result.insertId, data, valor, conta_id}});
    });

}
function destroy(req,res){
    const id_dep = req.params.codigo;
    connection.query('DELETE FROM deposito WHERE id_dep = ?;', [id_dep], function(err, result) {
        if(err) return res.json(err.message);
        if(result.affectedRows == 0) return res.json({erro: "nao foi possivel excluir o deposito."});
        return res.json({sucesso:" Deposito excluido!"});
    });
}

module.exports = { list, create, destroy };