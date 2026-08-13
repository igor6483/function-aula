function verificarTemperatura(temperatura){
    if (temperatura < 18){
        console.log ("Frio")
    } else if (temperatura >= 18 && temperatura <= 30) {
        console.log ("Agradevel")
    } else {
        console.log ("Quente")
    }
}

verificarTemperatura(28.8)