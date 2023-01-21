export class Empleado {
    #dni;
    #nombre;
    #salario
    #clave

    constructor(nombre, dni, salario) {
        this.#dni = dni;
        this.#nombre = nombre;
        this.#salario = salario;
        this.#clave = '';
    }

    verBonificacion() {
        return this.#salario;
    };


    _verBonificacion(bono) {
        return this.#salario + (this.#salario * bono / 100)
    }

    asignarClave(clave) {
        this.#clave = clave;
    }

    autenticable(clave) {
        return this.#clave == clave;
    }
}