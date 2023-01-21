/*Importación de clases*/
import { Cliente } from './Cliente.js'
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js'

const cliente = new Cliente('Leonardo', '13804050', '123224');
cliente.asignarClave('1111');
console.log(SistemaAutenticacion.login(cliente, '1111'));

const empleado = new Empleado('Juan Perez', '1234679', 10000);
empleado.asignarClave('123456');
console.log(SistemaAutenticacion.login(empleado, '123456'));

const gerente = new Gerente('Pedro Rivas', '234658679', 12000);
gerente.asignarClave('6556a')
console.log(SistemaAutenticacion.login(gerente, '6556a'));

const director = new Director('Elena Moreno', '4787874', 15000);
director.asignarClave('879494')
console.log(SistemaAutenticacion.login(director, '879494'));
