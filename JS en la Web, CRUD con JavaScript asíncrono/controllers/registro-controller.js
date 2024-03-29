import { clientServices } from "../services/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    console.log(nombre, email);
    clientServices.crearCliente(nombre, email).then((response) => {
        window.location.href = "../screens/registro_completado.html";
    }).catch(error => console.log(error));
});