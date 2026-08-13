function calcularPerimetro(Lado1,Lado2){
    let perimetro = 2 * (Lado1 + Lado2);
    return perimetro;
}
 

let resultado = calcularPerimetro(8,5);

console.log(`O perimetro do retangulo é ${resultado} cm`);