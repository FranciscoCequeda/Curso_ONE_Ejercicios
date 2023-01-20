export class cuentaCorriente {
    cliente;
    numero;
    agencia;
    #saldo;

    constructor() {
        this.cliente = null;
        this.numero = '';
        this.agencia = '';
        this.#saldo = 0;
    }

    depositarCuenta(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        }
        return this.#saldo;
    }

    retirarCuenta(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        }
        return this.#saldo;
    }

    consultarSaldo() {
        return this.#saldo;
    }

    transferirEntreCuentas(valor, cuentaDestino) {
        this.retirarCuenta(valor);
        cuentaDestino.depositarCuenta(valor);
    }
}