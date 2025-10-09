class Veiculo {
    constructor(marca, ano){
        this.marca = marca;
        this.ano = ano;
    }
}

class Moto extends Veiculo {
    constructor(marca, ano){
        super(marca, ano)
    }

    detalhes(){
        console.log(`Moto ${this.marca}, Ano ${this.ano}`)
    }
}

const moto = new Moto('Yamaha', 2021);
moto.detalhes();