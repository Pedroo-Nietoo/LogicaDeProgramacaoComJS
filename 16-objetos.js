//16. Objetos
let pessoa = {
    nome: "Pedro",
    sobrenome: "Nieto",
    idade: 17
};

//Chaves para objetos
let usuario = {
    nome: "Pedroo",
    sobrenome: "Nietoo",
    idade: 17
};

usuario.sexo = "Masculino"; //Adiciona uma chave ao objeto
console.log(usuario.idade); //Saída: 17

//Objetos aninhados
let estudante = {
    nome: "Pedro",
    sobrenome: "Nieto",
    idade: 1,
    cursoMatriculado: {
        nome: "DEVstart",
        concluido: true
    }
};

console.log(estudante.nome); //Saída: Pedro
console.log(estudante.cursoMatriculado.concluido); //saída: true

//Matriz de objetos
let usuarios = [
    {
        nome: "Pedro-Nieto",
        idade: 1,
    },
    {
        nome: "Nieto-Pedro",
        idade: 2,
    }
];

usuarios.forEach(function (usuario) {
    console.log(usuario.nome);
    /*Saídas:
        Pedro-Nieto
        Nieto-Pedro
    */
});