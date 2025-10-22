class Produto{
    constructor(nome, preco){
    this.nome = nome;
    this.preco = preco;
    }

    set preco(precoAtual){
        if (precoAtual.length < 0){
            console.log('preços negativos não são permitidos!')
        } else {
            this.preco = precoAtual;
        }

    }

    get preco(){
        return this.preco
    }

    get info() {
        return `Produto: ${this.nome}, Preço: R$${this.preco}`
    }
    
}

const Produto1 = new Produto("camisa", -10);

console.log(Produto1.info)