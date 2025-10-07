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

const carro1 = new Carro('Ford', 2004);
const carro2 = new Carro("chevrolet", 2012);

// chamando o metodo detalhes pra cada um
carro1.detalhes();
carro2.detalhes();
