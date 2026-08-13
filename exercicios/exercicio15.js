function classificarProduto(nota){
     if (nota <= 5) {
        console.log("Ruim")
    } else if (nota === 5 || nota === 6){
        console.log ("Regular")
    } else if (nota === 7 || nota === 8){
        console.log ("Bom")
    } else {
        console.log ("Excelente")
    }
}
classificarProduto(8)