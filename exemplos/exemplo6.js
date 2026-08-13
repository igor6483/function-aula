function verificarEstoque(quantidade){
    if (quantidade > 0) {
        return "produto despoinivel";
    } else{
        return "Produto Esgotado";
    }
}

console.log(verificarEstoque(12));
console.log(verificarEstoque(0));