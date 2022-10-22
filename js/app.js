import { valida } from "./validaciones.js";

//devuelve un array
const inputs = document.querySelectorAll("input");

inputs.forEach ( (input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});