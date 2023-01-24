import { clientServices } from "../services/client-service.js";

const crearLinea = (nombre, email, id) => {
  const tr = document.createElement("tr");
  const contenido = `
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html?id=${id}"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button" id="${id}"
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>
    `;
  tr.innerHTML = contenido;
  const btn = tr.querySelector("button");
  btn.addEventListener("click", () => {
    const id = btn.id;
    clientServices.delCliente(id).then(respuesta => {
      console.log(respuesta);
    }).catch(error => console.log("sucedio algo :("));
  })
  return tr;
};

const table = document.querySelector("[data-table]")

clientServices.listClientes().then(data => {
  data.forEach(({ nombre, email, id }) => {
    const nuevaLinea = crearLinea(nombre, email, id);
    table.appendChild(nuevaLinea);
  });
}).catch((error) => {
  alert("Error en la conexion!!")
});