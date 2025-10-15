class Retangulo {
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
        
    }

    get area() {
        return this.largura * this.altura;
    }
}

const retangulo = new Retangulo(5, 4);
console.log(retangulo.area)