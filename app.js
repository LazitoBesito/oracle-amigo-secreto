// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// hacemos la lista con array (puros corchetes), para poder hacerlo en lista
let listadeAmigos = [];
//hacemos la funcion para agregar los nombres
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
// Asegurarnos que ingresen algun nombre
    if (nombre === "") {
        alert('Por favor escribe un nombre valido');
        return;
    }

    // Metemos los "elementos" (nombres) al array y actualizamos la lista para que esté en pantalla
    listadeAmigos.push(nombre);
    mostrarLista();

    // Limpiar la cajita despues de dar un nombre
    input.value = '';
}
//necesitamos que la lista se muestre en pantalla
function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar lista

    listadeAmigos.forEach(amigo => {
        let elemento = document.createElement('li');
        elemento.textContent = amigo;
        lista.appendChild(elemento);
    });
}
//aqui sorteamos a los amigos, hacemos que se sortee dentro de la lista y asignamos valor a AmigoSecreto
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (listadeAmigos.length === 0) {
        resultado.innerHTML = '<li>Agrega nombres primero</li>';
        return;
    }

    // Seleccionar amigo
    const indiceGanador = Math.floor(Math.random() * listadeAmigos.length);
    const ganador = listadeAmigos[indiceGanador];

    // Mostrar quien es el amigo
    resultado.innerHTML = `<li>¡El amigo secreto es: ${ganador}!</li>`;
}