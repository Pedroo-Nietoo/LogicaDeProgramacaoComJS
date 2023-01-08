//18. Heranças
class Usuario {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }

    obterIniciais() {
        return `${this.nome[0]}${this.sobrenome[0]}`
    }
}

let pedronieto = new Usuario("Pedro", "Nieto")
console.log(pedronieto.obterNomeCompleto()) //Pedro Nieto
console.log(pedronieto.obterIniciais()) //PN