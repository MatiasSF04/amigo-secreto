// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre != ""){
        amigos.push(nombre);
        return nombre;
    } else {
        alert('Por favor, inserte un nombre.');
    }
    nombre = '';
    alert(amigos);
}
