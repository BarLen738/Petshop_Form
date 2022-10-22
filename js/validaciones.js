export function valida(input) {
    const tipoDeInput = input.dataset.tipo; //llama al data- de la tag input date
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if (input.validity.valid) {
        //true
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
};

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",

];

const mensajesDeError = {
    nombre: {
        valueMissing: "Debe completar este campo"
    },
    email: {
        valueMissing: "Debe completar este campo",
        typeMismatch: "El formato no coincide con una dirección de correo electrónico",
    },
    password: {
        valueMissing: "Debe completar este campo",
        patternMismatch: "Mínimo 8 caracteres, al menos una letra, un número y un caracter especial",
    },
    nacimiento: {
        valueMissing: "Debe completar este campo",
        customError: "Debes tener al menos 18 años",
    },
    numero: {
        valueMissing: "Debe completar este campo",
        patternMismatch: "El formato requerido es 11-xxxxxxxx",
    },
    direccion: {
        valueMissing: "Debe completar este campo",
        patternMismatch: "La dirección debe contener entre 10 y 40 caracteres",
    },
    ciudad: {
        valueMissing: "Debe completar este campo",
        patternMismatch: "La ciudad debe contener entre 4 y 30 caracteres",
    },
    provincia: {
        valueMissing: "Debe completar este campo",
        patternMismatch: "La provincia debe contener entre 4 y 30 caracteres",
    },

};



const validadores = {
    nacimiento: (input) => validarNacimiento(input),
};

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}

function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    //si no es mayor de edad !mayorDeEdad
    if (!mayorDeEdad(fechaCliente)) {
        mensaje = "Debes tener al menos 18 años";
    }

    input.setCustomValidity(mensaje);

}

function mayorDeEdad(fecha) {
    const fechaActual = new Date();
    const diferenciaFechas =
        //A la fecha que ingresa el usuario le sumamos 18
        new Date(
            fecha.getUTCFullYear() + 18,
            fecha.getUTCMonth(),
            fecha.getUTCDate()
        );
    return diferenciaFechas <= fechaActual;
}