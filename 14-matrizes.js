//14. Matrizes
let notas = [10, 9, 10, 7.5, 8]

//.includes() na matriz
function oTesteEhMuitoFacil(notas) {
    return notas.includes(20)
}

console.log(oTesteEhMuitoFacil([10, 15, 13, 19])) //Saída: false
console.log(oTesteEhMuitoFacil([7, 13, 20, 15])) //Saída: true

//.join() na matriz
function converterParaFormatoCSV(notas) {
    return notas.join(";")
}
console.log(converterParaFormatoCSV([10, 15, 13, 19])) //Saída: "10;15;13;19"

//.push() na matriz
function adicionarNovaNota(notas) {
    notas.push(18)
    return notas
}
console.log(adicionarNovaNota([10, 7])) //Saída: [10, 7, 18]

//.map() na matriz
function notasTriplicadas(notas) {
    let novasNotas = notas.map(function (nota) {
        return nota * 3
    })
    return novasNotas
}
console.log(notasTriplicadas([10, 20])) //Saída: [30, 60]

//.reduce() na matriz
function somaNumeros(numeros) {
    let soma = numeros.reduce(function (total, atual) {
        return total + atual
    }, 0)
    return soma
}
console.log(somaNumeros([10, 20, 30])) // 60

//.trim(), .toLowerCase() e .toUpperCase()
let emailRuim = " pedroO-Nietoo@mEuemail.com"
function formatarEmail(email) {
    email = email.toLowerCase() //toUpperCase() = PEDROO-NIETOO@MEUEMAIL.COM
    email = email.trim()
    return email
}
console.log(formatarEmail(emailRuim)) //pedroo-nietoo@meuemail.com

//Iteração e Callback
let numeros = [10, 8, 6]

numeros.forEach(function (numero) {
    console.log(numero)
    /*Saídas:
        10
        8
        6
    */
})