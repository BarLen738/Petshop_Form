import { valida } from "./validaciones.js";

//devuelve un array
const inputs = document.querySelectorAll("input");
//mostrar msj de error en caso de que no se respete las condiciones de validacion
inputs.forEach ( (input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});