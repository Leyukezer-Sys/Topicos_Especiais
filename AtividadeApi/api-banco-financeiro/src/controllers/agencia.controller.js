const connection = require('../configs/mysql.config');
const validacao = require('validatorjs');
function list(req, res) {
    connection.query('SELECT * FROM agencia', function (err, result) {
        if (err) return res.json(err.message);

        return res.json(result);
    });
}

function create(req, res){
    const regra = {
        numero :'required|min:1|numeric',
        nome : 'required|min:4',
        razao_social : 'required|min:4',
        cnpj : 'required|min:14|max:18',
        telefone : ['required', 'regex:/^\\(\\d{2}\\)\\s?\\d\\d{4}\\-\\d{4}$/'],
        email : 'required|email',
        ban_id : 'required|numeric'
    }

    let teste = new validacao(req.body,regra);
    if(teste.fails()){
        return res.json(teste.errors);
    }

    const {numero, nome, razao_social, cnpj, telefone, email, ban_id} = req.body;

    connection.query('INSERT INTO agencia VALUES (NULL, ?, ?, ?, ?, ?, ?, ?);',[numero, nome, razao_social, cnpj, telefone, email, ban_id], function (err, result){
        if(err){
            return res.json(err.message)
        }
        if(result.affectedRows == 0){
            return res.json({erro: "Não foi possivel inserir nova agencia."});
        }
        return res.json({id:result.insertId, razao_social, telefone});
    });
}
function update(req,res){
    const regra = {
        numero :'required|min:1|numeric',
        nome : 'required|min:4',
        razao_social : 'required|min:4',
        cnpj : 'required|min:14|max:18',
        telefone : ['required', 'regex:/^\\(\\d{2}\\)\\s?\\d\\d{4}\\-\\d{4}$/'],
        email : 'required|email'
    }

    let teste = new validacao(req.body,regra);
    if(teste.fails()){
        return res.json(teste.errors);
    }

    const id_age = req.params.codigo;
    const {numero, nome, razao_social, cnpj, telefone, email} = req.body;

    connection.query('UPDATE agencia SET numero = ?, nome = ?, razao_social = ?, cnpj = ?, telefone = ?, email = ? WHERE id_age = ?;',[numero, nome, razao_social, cnpj, telefone, email, id_age], function (err, result){
        if(err){
            return res.json(err.message)
        }
        if(result.affectedRows == 0){
            return res.json({erro: "Não foi possivel atualizar a agencia."});
        }
        return res.json({id:result.insertId, razao_social, telefone});
    });
}

function destroy(req,res){
    const id_age = req.params.codigo;
    connection.query('DELETE FROM agencia WHERE id_age = ?;',[id_age], function (err, result){
        if(err){
            return res.json(err.message)
        }
        if(result.affectedRows == 0){
            return res.json({erro: "Não foi possivel excluir agencia."});
        }
        return res.json({sucess:"Agencia excluida..."});
    });
}

module.exports = { list, create, update, destroy};