import { Cuenta } from "./Cuenta.js";

export class CuentaAhorro extends Cuenta {
    constructor(cliente, numero, agencia, saldo) {
        super(cliente, numero, agencia, saldo);
    }

    retirarDeCuenta(valor) {

        valor *= 1.02;

        super.retirarDeCuenta(valor);

    }
}