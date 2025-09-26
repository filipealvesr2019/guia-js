class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Oi, eu sou ${this.nome} e tenho ${this.idade} anos.`)
    }
}

const pessoa1 = new Pessoa("Ana", 25);
const pessoa2 = new Pessoa("João", 30);
const pessoa3 = new Pessoa("Maria", 40);

pessoa1.apresentar();
pessoa2.apresentar();
pessoa3.apresentar();