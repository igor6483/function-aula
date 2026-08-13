function calcularPontuacao(acertos,valorPorAcerto){
    return acertos * valorPorAcerto;

}


function verificarResultado(pontuacao){
    if (pontuacao >= 70){
        return "classificado";
    } else{
        return "não classificado";
    }
}

let pontuacao = calcularPontuacao(8,10)
let resultado = verificarResultado(pontuacao)

console.log(pontuacao)
console.log(resultado)