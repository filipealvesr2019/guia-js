class Produto{
    constructor(nome, preco){
    this.nome = nome;
    this.preco = preco;
    }

    set precoPositivo(precoAtual){
        if (precoAtual.length < 0){
            console.log('preços negativos não são permitidos!')
        } else {
            this.preco = precoAtual;
        }

    }

    get precoPositivo(){
        return console.log(this.preco);
    }
    
}