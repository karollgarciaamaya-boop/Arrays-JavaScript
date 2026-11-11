let listaNombres=[];
//crear variables para el input,botonagregar,lista,p

let inputNombre=document.getElementById("nombre");
let btnAgregar=document.getElementById("btnAgregar");
let lista=document.getElementById("lista");
let cantidad=document.getElementById("cantidad");

btnAgregar.addEventListener("click", function() {
    event.preventDefault();
    let nombre = inputNombre.value.trim().toUpperCase();

    if (nombre === "") {
        alert("Ingrese un nombre");
        inputNombre.style.backgroundColor="red";
    }else if(listaNombres.includes(nombre)){
        alert("El nombre ya esta registrado.")

    }else {
        listaNombres.push(nombre);
        mostrarNombres();

        inputNombre.value = "";
        inputNombre.focus();
        //quitar el color de fondo rojo
        inputNombre.style.backgroundColor="white";

    }
});

// Función para mostrar los nombres.
function mostrarNombres() {
    lista.innerHTML = "";

    for (let i = 0; i < listaNombres.length; i++) {
        lista.innerHTML += `<li>${listaNombres[i]}</li>`;
    }

    cantidad.textContent = `Total registrados: ${listaNombres.length}`;
}

