function calcularMedia(a,b){
    let media = (a + b) / 2
    return media
}

function verificarSituacao(a,b){
    media = calcularMedia(a,b)
    if (media >= 7){
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

function mostrarResultado(a,b,verificarSituacao,nome){
    console.log (`Aluno: ${nome}`)
    console.log (`Media: ${calcularMedia(a,b)}`)
    console.log (`Situação: ${verificarSituacao(a,b)}`)
}

mostrarResultado(7, 4, verificarSituacao, "João")
mostrarResultado(10, 3, verificarSituacao, "Carlos")
mostrarResultado(8, 9, verificarSituacao, "Ricardo")