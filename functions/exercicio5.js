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