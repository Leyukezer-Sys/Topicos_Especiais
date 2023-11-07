const listCategoria = []

function list(req, res){
    return res.json(listCategoria)
}

function searchList(req, res) {
    let codigo = req.params.codigo;
    let _cond = true;   

    for (const _categoria of listCategoria) {
        if (_categoria.id == codigo){
            _cond = false;
            return res.json(_categoria);
        }        
    }

    if (_cond) {
    return res.json({alert:`Contato #${codigo} nao foi encontrado.`})  
    }
}


module.exports = {list};