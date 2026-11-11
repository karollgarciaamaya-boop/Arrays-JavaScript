let formulario = document.querySelector("form");
let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let cantidad = document.getElementById("cantidad");
let tabla = document.getElementById("tabla");
let total = document.getElementById("total");
let productoMayor = document.getElementById("productoMayor");

let listaProductos = [];

formulario.addEventListener("submit", agregarProducto);

function agregarProducto(event) {

    event.preventDefault();

    // Capturar datos
    let nombre = producto.value.trim();
    let precioUnitario = parseFloat(precio.value);
    let cantidadProducto = parseInt(cantidad.value);

    // Crear Validacion nombre
    // Crear Validacion precio
    // Crear Validacion cantidad

    // Crear objeto y guardar en el arreglo
    listaProductos.push({
    nombre: nombre,
    precio: precioUnitario,
    cantidad: cantidadProducto
    });

    formulario.reset();
    mostrarProductos();
}

function mostrarProductos() {
    tabla.innerHTML = "";
    let valorTotal = 0;

    for (let i = 0; i < listaProductos.length; i++) {

    let subtotal = listaProductos[i].precio * listaProductos[i].cantidad;
    valorTotal += subtotal;

    // Crear Buscar el producto con mayor precio

    // Mostrar producto en la tabla
    tabla.innerHTML += `
        <tr>
            <td>${listaProductos[i].nombre}</td>
            <td>${listaProductos[i].precio}</td>
            <td>${listaProductos[i].cantidad}</td>
            <td>${subtotal.toLocaleString("es-CO")}</td>
            <td>
                <button type="button" class="btnEliminar" data-indice="${i}">
                    Eliminar
                </button>
            </td>
        </tr>
    `;
}

    total.textContent = "Valor total del inventario: $" + valorTotal.toLocaleString("es-CO");
}

// 6. Evento para eliminar productos
tabla.addEventListener("click", eliminarProducto);

// 7. Función para eliminar productos
function eliminarProducto(event) {

// Verifica si el elemento que disparó el evento es el botón de eliminar.
// event.target apunta al elemento HTML clicado y classList.contains comprueba
// si ese elemento tiene la clase "btnEliminar".
    if (event.target.classList.contains("btnEliminar")) {

    // Convierte el valor del atributo data-indice a un número para saber
    // cuál producto de la lista debe eliminarse.
    let indice = Number(event.target.dataset.indice);

    listaProductos.splice(indice, 1);

    mostrarProductos();
    }
}