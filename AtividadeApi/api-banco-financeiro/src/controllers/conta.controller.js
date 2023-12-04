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
        numero : 'required|min:3|numeric',
        data_abertura :'required|date',
        saldo :'required',
        valor_limite :'required|double',
        agencia_id : 'required|numeric',
        cliente_id : 'required|numeric'
    }

    let teste = new validacao(req.body, regra);

    if(teste.fails()) return res.json(teste.errors);

    const {numero, data_abertura, saldo, valor_limite, agencia_id, cliente_id} = req.body;

    connection.query('INSERT INTO conta VALUES (NULL, ?, ?, ?, ?, ?, ?);', [numero, data_abertura, saldo, valor_limite, agencia_id, cliente_id], function(err, result){
        if (err) return res.json(err.message);
        
        if(result.affectedRows == 0) return res.json({erro: 'nao foi possivel inserir uma conta.'});

        return res.json({id: result.insertId, numero, data_abertura, saldo, valor_limite});
    });
}
function update(req,res){
    regra = {
        numero : 'required|min:3|numeric',
        data_abertura :'required|date',
        saldo :'required',
        valor_limite :'required|double'
    }

    let teste = new validacao(req.body, regra);

    if(teste.fails()) return res.json(teste.errors);

    const id_con = req.params.codigo;
    const {numero, data_abertura, saldo, valor_limite} = req.body;

    connection.query('UPDATE conta SET numero = ?, data_abertura = ?, saldo = ?, valor_limite = ? WHERE id_con = ?;', [numero, data_abertura, saldo, valor_limite, id_con], function(err, result){
        if (err) return res.json(err.message);
        
        if(result.affectedRows == 0) return res.json({erro: 'nao foi possivel atualizar a conta.'});

        return res.json({id: result.insertId, numero, data_abertura, saldo, valor_limite});
    });
}
function destroy(req,res){
    const id_con = req.params.codigo;
    connection.query('DELETE FROM conta WHERE id_con = ?;', [id_con], function(err, result){
        if (err) return res.json(err.message);
        
        if(result.affectedRows == 0) return res.json({erro: 'nao foi possivel EXCLUIR a conta.'});

        return res.json({sucess:"Conta excluida"});
    });
}

module.exports = { list, create, update, destroy };