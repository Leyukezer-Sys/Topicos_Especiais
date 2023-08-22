const exercicio1 = require('./Exer1.js')
const exercicio2 = require('./Exer2.js')
const exercicio3 = require('./Exer3.js')
const exercicio4 = require('./Exer4.js')
const exercicio5 = require('./Exer5.js')

function iniciarSistema() {
    exercicio1("Fulano", 1540.00);
    exercicio2(5, 220);
    exercicio3(2);
    exercicio4("A", 53);
    exercicio4("G", 53);
    // F - FILE DUPLO; A - ALCATRA; P - PICANHA
    // D - PAGAMENTO EM DINHEIRO; C - PAGAMENTO CARTAO ASSAI
    exercicio5("A", 4, "C");
    exercicio5("A", 4, "D");
}

iniciarSistema();