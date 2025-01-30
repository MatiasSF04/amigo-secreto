// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre != "") {
        amigos.push(nombre);
        mostrarNombre();
    } else {
        alert('Por favor, inserte un nombre.');
    }
    vaciarNombre();
}

function vaciarNombre() {
    document.getElementById('amigo').value='';
}

function mostrarNombre() {
    let nombreLista = document.getElementById('listaAmigos');
    nombreLista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++) {
        nombreLista.insertAdjacentHTML('beforeend', `<li>${amigos[i]}</li>`);
    }
}