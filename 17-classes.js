class Usuario {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.matricula = true;
        console.log("Novo usuário cadastrado. Informações abaixo");
    }
}

let pedroonietoo = new Usuario("Pedroo", "Nietoo", 17);
console.log(pedroonietoo);