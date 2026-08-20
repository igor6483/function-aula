function calcularMedia(a, b, c){
    let valor = (a + b + c) / 3 
    return valor    
}


function classificarMedia(media){ 
  let media2 = classificarMedia
    if (media >= 7){
    return "Aprovado"
   } else {
    return "Reprovado"
   }
}

let media = calcularMedia(7,8,6)

let resultado = classificarMedia(media)
   
console.log (calcularMedia(7,8,6))
console.log (`${resultado}`)