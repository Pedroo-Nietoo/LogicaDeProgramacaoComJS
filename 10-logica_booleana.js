//10. Lógica booleana
function verificaMaioridade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaMaioridade(20)); //Saída: true
console.log(verificaMaioridade(15)); //Saída: false