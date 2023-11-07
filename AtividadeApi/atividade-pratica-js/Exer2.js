// Aula 14-08 Prática de Javascript

/*
Faça um script para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 10% para o INSS e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O script deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

Desconto do IR:
Salário Bruto até 900 (inclusive) - isento
Salário Bruto até 1500 (inclusive) - desconto de 5%
Salário Bruto até 2500 (inclusive) - desconto de 10%
Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo.
*/
function folhaDePagamento(valorHora, quantidadeHora){

    let salarioBruto = 0.0;
    let ir = 0.05;
    let valorIr = 0.0;
    let inss = 0.1;
    let fgts = 0.11;
    let totalDescont = 0.0;
    let salarioLiquido = 0.0;
    
    salarioBruto = quantidadeHora * valorHora;
    
    if (salarioBruto <= 900.00) {
        valorIr = "isento";
        inss = "isento";
        fgts = fgts * salarioBruto;
        totalDescont = 0;
        salarioLiquido = salarioBruto - totalDescont;
    }else
    if (salarioBruto <= 1500.00) {
        ir = 0.05;
        valorIr = ir * salarioBruto;
        inss = inss * salarioBruto;
        fgts = fgts * salarioBruto;
        totalDescont = valorIr + inss;
        salarioLiquido = salarioBruto - totalDescont;
    }else
    if (salarioBruto <= 2500.00) {
        ir = 0.1;
        valorIr = ir * salarioBruto;
        inss = inss * salarioBruto;
        fgts = fgts * salarioBruto;
        totalDescont = valorIr + inss;
        salarioLiquido = salarioBruto - totalDescont;
    }else
    if (salarioBruto > 2500.00) {
        ir = 0.2;
        valorIr = ir * salarioBruto;
        inss = inss * salarioBruto;
        fgts = fgts * salarioBruto;
        totalDescont = valorIr + inss;
        salarioLiquido = salarioBruto - totalDescont;
    }
    
    console.log("========== EXERCICIO 2 ==========\n" +
    "*Salário Bruto:   R$" + salarioBruto.toFixed(2) + "\n" +
    "*(-) IR (" + (ir*100) + "%):     R$"+valorIr.toFixed(2)+"\n" +
    "*(-) INSS (10%):  R$" + inss.toFixed(2) + "\n" +
    "*FGTS (11%):      R$" + fgts.toFixed(2) + "\n" +
    "*Total Descontos: R$" + totalDescont.toFixed(2) + "\n" +
    "*Salário Liquido: R$" + salarioLiquido.toFixed(2) + "\n");
}

module.exports = folhaDePagamento;