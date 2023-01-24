import { clientServices } from "../services/client-service.js";

const formulario = document.querySelector("[data-form]");

const getInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");

    try {
        const perfil = await clientServices.detalleCliente(id);

        if (!perfil.nombre) {
            throw new Error();
        }

        nombre.value = perfil.nombre;
        email.value = perfil.email;
    } catch (error) {
        window.location.href = "../screens/error.html";
    }
}

getInformacion();

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    clientServices.actualizarCliente(nombre, email, id).then(() => {
        window.location.href = "../screens/edicion_concluida.html"
    });
})