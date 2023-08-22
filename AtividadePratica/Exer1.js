// Aula 14-08 Prática de Javascript
function reajusteSalarial(colaborador,salario){
let reajuste = 0.0;
let porcentagem = 0.0;
let valorDoAumento = 0.0;

if (salario <= 280.00) {
    reajuste = salario * 1.2;
    porcentagem = 0.2;
    valorDoAumento = reajuste - salario;
}else if (salario <= 700.00 && salario > 280.00) {
    reajuste = salario * 1.15;
    porcentagem = 0.15;
    valorDoAumento = reajuste - salario;
}else if (salario <= 1500.00 && salario > 700.00) {
    reajuste = salario * 1.1;
    porcentagem = 0.1;
    valorDoAumento = reajuste - salario;
}else if (salario > 1500.00) {
    reajuste = salario * 1.05;
    porcentagem = 0.05;
    valorDoAumento = reajuste - salario;
}

    console.log("========== EXERCICIO 1 ==========\n" +
                "*Colaborador: "+ colaborador+"\n" +
                "*Salario Mensal: R$" + salario.toFixed(2) + "\n"+
                "*Percentual de reajuste: "+ (porcentagem * 100)+"% \n" +
                "*Valor do Aumento: R$" + valorDoAumento.toFixed(2) + "\n" +
                "*Salario Reajustado: R$" + reajuste.toFixed(2));
}

module.exports = reajusteSalarial;