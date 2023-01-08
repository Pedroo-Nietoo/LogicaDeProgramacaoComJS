class Usuario {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.matricula = true;
        console.log("Novo usuário cadastrado. Informações abaixo");
    }
}

let pedroonietoo = new Usuario("Pedroo", "Nietoo");
console.log(pedroonietoo);