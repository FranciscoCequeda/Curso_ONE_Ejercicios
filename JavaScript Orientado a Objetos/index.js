import { cuentaCorriente } from './CuentaCorriente.js'
import { Cliente } from './Cliente.js'


const cliente = new Cliente();
cliente.nombreCliente = 'Leonardo';
cliente.dniCliente = '123456';
cliente.rut = '123456'

const cuentaLeonardo = new cuentaCorriente();
cuentaLeonardo.numero = 1;
cuentaLeonardo.agencia = '0001';
cuentaLeonardo.cliente = cliente;

// console.log(cuentaLeonardo);
let saldo = cuentaLeonardo.consultarSaldo();

saldo = cuentaLeonardo.depositarCuenta(150);
console.log(`El saldo de cuentaLeonardo actual es: ` + saldo);

const cliente2 = new Cliente();
cliente2.nombreCliente = 'Maria';
cliente2.dniCliente = '789456';
cliente2.rut = '789456'

const cuentaMaria = new cuentaCorriente();
cuentaMaria.numero = 2;
cuentaMaria.agencia = '0002';
cuentaMaria.cliente = cliente2;

cuentaLeonardo.transferirEntreCuentas(100, cuentaMaria);

console.log('Cuenta de maria:', cuentaMaria);

// const saldoMaria = cuentaMaria.consultarSaldo();
// console.log(`El saldo de cuentaMaria actual es: ` + saldoMaria);

// saldoLeo = cuentaLeonardo.consultarSaldo();
// console.log(`El saldo de cuentaLeonardo actual es: ` + saldoLeo);