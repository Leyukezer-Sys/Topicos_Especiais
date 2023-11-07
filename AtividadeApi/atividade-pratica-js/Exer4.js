//Um posto está vendendo combustíveis com a seguinte tabela de descontos:
/*
- Álcool: até 20 litros, desconto de 3% por litro acima de 20 litros, desconto de 5% por litro
- Gasolina: até 20 litros, desconto de 4% por litro acima de 20 litros, desconto de 6% por litro

Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90
*/
function bombaPosto(tipo, quantLtr) {
    let totalApagar = 0.0;
    let desconto = 0.0;

    if (tipo == "A") {
        tipo = "ALCOOL"
        if (quantLtr <= 20) {
            totalApagar = 1.90 * quantLtr;
            desconto = totalApagar * (1 - 0.03);
        } else {
            totalApagar = 1.90 * quantLtr;
            desconto = totalApagar * (1 - 0.05);
        }
    } else
        if (tipo == "G") {
            tipo = "GASOLINA"
            if (quantLtr <= 20) {
                totalApagar = 2.50 * quantLtr;
                desconto = totalApagar * (1 - 0.04);
            } else {
                totalApagar = 2.50 * quantLtr;
                desconto = totalApagar * (1 - 0.06);
            }
        }

    console.log(`========== EXERCICIO 4 ==========
*Entradas: ${tipo}; ${quantLtr}L
--- Resultado --- 
*TOTAL NA BOMBA: R$${totalApagar.toFixed(2)}
*TOTAL A PAGAR: R$${desconto.toFixed(2)}`);
}

module.exports = bombaPosto;