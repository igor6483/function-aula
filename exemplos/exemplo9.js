function calcularConsumoEnergia(potencia, horas){

    let consumo = potencia * horas;

    return consumo;
}

let consumoDiario = calcularConsumoEnergia (1200,4);

console.log (`consumo diario: ${consumoDiario} Wh`)