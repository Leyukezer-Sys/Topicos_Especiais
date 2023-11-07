function promocaoCarnes(tipo, quantidadeKg, tipoPagament) {
    let totalCompra = 0.0;
    let desconto = 0.0;
    let totalApagar = 0.0;
    if (tipoPagament == "D") {
        tipoPagament = "DINHEIRO";
        if (tipo == "F" || tipo == "FD") {
            tipo = "FILE DUPLO";
            if (quantidadeKg <= 5.0) {
                totalCompra = quantidadeKg * 4.90;
                desconto += quantidadeKg * 0.90;
            } else {
                totalCompra = quantidadeKg * 5.80;
            }
        } else if (tipo == "A" || tipo == "ALCATRA") {
            tipo = "ALCATRA";
            if (quantidadeKg <= 5.0) {
                totalCompra = quantidadeKg * 5.90;
                desconto += quantidadeKg * 0.90;
            } else {
                totalCompra = quantidadeKg * 6.80;
            }
        } else if (tipo == "P" || tipo == "PICANHA") {
            tipo = "PICANHA";
            if (quantidadeKg <= 5.0) {
                totalCompra = quantidadeKg * 6.90;
                desconto += quantidadeKg * 0.90;
            } else {
                totalCompra = quantidadeKg * 7.80;
            }
        } else {
            console.log("Tipo invalido!");
        }
        totalApagar = totalCompra;
        totalCompra += desconto;
    } else if (tipoPagament == "C") {
        tipoPagament = "CARTÃO ASSAÍ";
        if (tipo == "F" || tipo == "FD") {
            tipo = "FILE DUPLO";
            if (quantidadeKg <= 5.0) {
                totalCompra = quantidadeKg * 4.90;
                desconto += quantidadeKg * 0.90;
            } else {
                totalCompra = quantidadeKg * 5.80;
            }
        } else if (tipo == "A" || tipo == "ALCATRA") {
            tipo = "ALCATRA";
            if (quantidadeKg <= 5.0) {
                totalCompra = quantidadeKg * 5.90;
                desconto += quantidadeKg * 0.90;
            } else {
                totalCompra = quantidadeKg * 6.80;
            }
        } else if (tipo == "P" || tipo == "PICANHA") {
            tipo = "PICANHA";
            if (quantidadeKg <= 5.0) {
                totalCompra = quantidadeKg * 6.90;
                desconto += quantidadeKg * 0.90;
            } else {
                totalCompra = quantidadeKg * 7.80;
            }
        } else {
            console.log("Tipo invalido!");
        }

        totalApagar = totalCompra * 0.95;
        let aux = totalCompra + desconto;
        desconto += totalCompra - totalApagar;
        totalCompra = aux;
    }

    console.log(`========== EXERCICIO 5 ==========
    - Tipo da Carne: ${tipo}
    - Peso da Carne(KG): ${quantidadeKg}Kg
    - Total da Compra: R$${totalCompra.toFixed(2)}
    - Tipo de Pagamento: ${tipoPagament}
    -- Desconto: R$${desconto.toFixed(2)}
    - Total a Pagar: R$${totalApagar.toFixed(2)}`)
}
module.exports = promocaoCarnes;