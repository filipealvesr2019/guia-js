class ContaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
        console.log(`Deposito de R$${valor}. Saldo atual: R$${this.saldo}`)
    }

    sacar(valor){
        if(valor > this.saldo){
            console.log('Saldo insuficiente!')
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor}. Saldo atual R$${this.saldo}`)
        }
    }
}

const conta = new ContaBancaria("Carlos", 100);
conta.depositar(50);
conta.sacar(200);