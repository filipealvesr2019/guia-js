class Carro {
    constructor(marca, ano){
        this.marca= marca;
        this.ano = ano;
    }

    detalhes(){
        console.log(`Carro: ${this.marca}, Ano: ${this.ano}`)
    }
}

// criando um objeto a partir da classe

const carro = new Carro('Ford', 2004);
