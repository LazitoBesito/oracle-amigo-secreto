// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// hacemos la lista con array (puros corchetes), para poder hacerlo en lista
let listadeAmigos = [];
//Traemos del html el id amigo, donde es que colocamos el nombre, ya que con el input se nos solicita
let amigosNombre = document.getElementById("amigo");
//
let listaDeAmigosDeHTM = document.getElementById("listaAmigos");
//
let amigoSecreto = document.getElementById("resultado");
//
function agregarAmigo() {
    let nombre = amigosNombre
    //Metemos los nombres dentro del array con el push
    listadeAmigos.push(nombre);
}


//aqui ya sorteamos a los amigos, hacemos que se sortee dentro de la lista y asignamos valor a AmigoSecreto
function sortearAmigo() {
    let listaDeAmigosPorSortear = Math.floor(Math.random() * listadeAmigos.length);
    let amigoSeleccionado = listadeAmigos[listaDeAmigosPorSortear];
    amigoSecreto.innerHTML = ("Amigo secreto: ${amigoSeleccionado}");
}
