const connection = require('../configs/mysql.config');

function searchBanco(id_banco){
    connection.query('SELECT * FROM banco WHERE id_ban = ?', {id_banco}, function(err, result){
        if (result.affectedRows > 0) return true;
        else return false;
    });
}

module.exports = {searchBanco};