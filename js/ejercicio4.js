

let estudiantes = [
    "Karoll",
    "Harold",
    "Melany",
    "Sarah",
    "Haiber",
    "Andres",
    "Franco",
    "Samuel"
];


let formulario = document.getElementById("formulario");
let nombre = document.getElementById("nombre");
let lista = document.getElementById("lista");
let resultado = document.getElementById("resultado");

for (let i = 0; i < estudiantes.length; i++) {
    lista.innerHTML += `<li>${estudiantes[i]}</li>`;
}

// Evento para buscar estudiantes.
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let buscar = nombre.value.trim();

    if (buscar === "") {
        alert("Ingrese un nombre para buscar.");
    } else {

        let estudianteEncontrado = estudiantes.find(function(estudiante) {
            return estudiante.toLowerCase() === buscar.toLowerCase();
        });

        if (estudianteEncontrado) {
            resultado.textContent = `El estudiante ${estudianteEncontrado} sí está registrado.`;
        } else {
            resultado.textContent = "El estudiante no se encuentra registrado.";
        }

        nombre.value = "";
    }
});
