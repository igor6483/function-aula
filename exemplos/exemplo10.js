function calcularValorConta(consumo,tarifa){
    let valorConta = consumo * tarifa;
    return valorConta;
}

function adicionarTaxa(valorConta,taxa){
    let valorTaxa = valorConta * taxa/100;
    return valorConta + valorTaxa;
}

let valorBase = calcularValorConta(150,0.8);
let valorFinal = adicionarTaxa(valorBase, 5);

console.log(`Valor final da conta: R$ ${valorFinal.toFixed(2)}`);