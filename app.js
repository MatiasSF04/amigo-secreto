let amigos = [];
let nombreLista = document.getElementById('listaAmigos');

function mostrarMenu() {
    menu = document.getElementsByClassName('menu');
    CSSStyleValue()
}

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
    nombreLista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++) {
        nombreLista.insertAdjacentHTML('beforeend', `<li>${amigos[i]}</li>`);
    }
}

function sortearAmigo() {
    let nombreResultado = document.getElementById('resultado');
    let amigoSorteado = amigos[parseInt(Math.random()*(amigos.length))];
    nombreLista.innerHTML = "";
    nombreResultado.innerHTML = "El amigo sorteado secreto es: ";
    nombreResultado.insertAdjacentHTML('beforeend', `<p>${amigoSorteado}</p>`);
}