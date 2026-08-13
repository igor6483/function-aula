function calculaFrete(valorCompra, taxa){

    let valorFrete = valorCompra * taxa / 100;

    return valorFrete;
}

let Frete = calculaFrete(180,8);

console.log(`Valor do Frete: R$ ${Frete}`);