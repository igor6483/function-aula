function converterHorasEmMinutos(horas){
    let minutos = horas * 60;
    return minutos;
}

let resultado = converterHorasEmMinutos(3);

console.log(`O total e de ${resultado} minutos`);