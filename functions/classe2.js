class contaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
        console.log(`Deposito de R$${valor}. Saldo atual: R$${this.saldo}`)
    }
}