function calcularSubtotal(a, b){
    let preco = a * b   
    return preco
}

function calcularDesconto(c, d){
    let valor = c * (d/100)
    return valor
}

function calcularTotal(preco, valor){
    let final = preco - valor
    return final
}

let subtotal = calcularSubtotal(40, 4);
let desconto = calcularDesconto(subtotal, 15);
let total = calcularTotal(subtotal, desconto);

console.log(`${subtotal}`)
console.log(`${desconto}`)
console.log(`${total}`)

