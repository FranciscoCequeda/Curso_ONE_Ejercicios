export function valida(input) {
    const tipoInput = input.dataset.tipo;
    if (validaciones[tipoInput]) {
        validaciones[tipoInput](input);
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector('.input-message-error').innerHTML = '';
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeErrores(tipoInput, input);
    }
}

const tipoErrores = ["valueMissing", "typeMismatch", "patternMismatch", "customError"];

const mensajesErrores = {
    nombre: {
        valueMissing: "Este campo no puede estar vacío"
    },
    email: {
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "Correo invalido"
    },
    password: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Minimo 6 caracteres y maximo 12, debe tener letra mayuscula y minuscula"
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacio",
        customError: "Debes tener al menos 18 años de edad"
    },
    numero: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Ingrese numero telefonico de 10 digitos"
    },
    direccion: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Direccion debe contener entre 10 y 40 caracteres"
    },
    ciudad: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Ciudad debe contener entre 10 y 40 caracteres"
    },
    estado: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Estado debe contener entre 10 y 40 caracteres"
    }
}

const validaciones = {
    nacimiento: (input) => validarNacimiento(input)
}

function mostrarMensajeErrores(tipoInput, input) {
    let mensaje = '';
    tipoErrores.forEach((error) => {
        if (input.validity[error]) {
            console.log(tipoInput, error);
            console.log(input.validity[error]);
            console.log(mensajesErrores[tipoInput][error]);
            mensaje = mensajesErrores[tipoInput][error];
        }
    })
    return mensaje;
}

function validarNacimiento(input) {
    const fecha = new Date(input.value);
    let msj = '';
    if (!calcularEdad(fecha)) {
        msj = 'Debes tener al menos 18 años de edad'
    }

    input.setCustomValidity(msj);
}

function calcularEdad(fecha) {
    const fechaActual = new Date();
    const diferencia = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDay())
    return diferencia <= fechaActual;
}