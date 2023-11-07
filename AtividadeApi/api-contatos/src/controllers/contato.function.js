function verificaCelular(celular) {
    celular = celular.replace("(", "");
    celular = celular.replace(")", "");
    celular = celular.replace("-", "");
    celular = celular.replace(" ", "");
    celular = celular.trim();
    
    var regex = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$');

    return regex.test(celular);
}
function validaEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function buscaNome(listaContatos, nome) {
    for (const _contato of listaContatos) {
        if (_contato.nome == nome) {
            return true;
        }
    }
    return false;
}
function buscaEmail(listaContatos, email) {
    for (const _contato of listaContatos) {
        if (_contato.email == email) {
            return true;
        }
    }
    return false;
}
function buscaTelefone(listaContatos, telefone) {
    for (const _contato of listaContatos) {
        if (_contato.telefone == telefone) {
            return true;
        }
    }
    return false;
}
module.exports = { verificaCelular, validaEmail, buscaNome, buscaEmail, buscaEmail, buscaTelefone};