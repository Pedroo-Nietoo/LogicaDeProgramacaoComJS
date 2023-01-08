//13. Estrutura de controle
function verificaParidade(num) {
    if (num % 2 === 0) {
        console.log(`O número ${num} é par.`);
    } else {
        console.log(`O número ${num} é ímpar.`);
    }
}

verificaParidade(2); //Saída: O número 2 é par.
verificaParidade(3); //Saída: O número 3 é ímpar.