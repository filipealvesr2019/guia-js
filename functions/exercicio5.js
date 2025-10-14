class Pessoa {
    constructor(nome){
        this._nome = nome;
    }

    get nome(){
        return this._nome;
    }

    set nome(novoNome) {
        if (novoNome.length < 3){
            console.log("Nome muito curto!");
        } else{
            this._nome = novoNome;
        }
    }
}

const pessoa = new Pessoa("João");
console.log(pessoa.nome);

pessoa.nome = "Li";
pessoa.nome = "Lucas";
console.log(pessoa.nome);