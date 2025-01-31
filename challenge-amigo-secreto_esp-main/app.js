// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// desarrollamos una lista de amigos
let listaDeAmigos = [];

// funcion para borrar el campo de amigo
function borrarCampo(){
    document.getElementById("amigo").value = "";
}

// funcion para agregar amigo, en la cual valida si es un nombre valido y si no lo es, muestra un alert, asi como tambien agrega el nombre a la lista de amigos y la ordena.
function agregarAmigo(){
    if(document.getElementById("amigo").value !== ""){
    listaDeAmigos.push(document.getElementById("amigo").value);
    borrarCampo();
    ordenarLista();
    } else {
    alert("Por favor, ingrese un nombre válido.");
    }
}

// funcion para mostrar los amigos en la lista
function mostrarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for(let i=0; i<listaDeAmigos.length; i++){
        listaAmigos.innerHTML += `<li>${listaDeAmigos[i]}</li>`
    }
}

// funcion para ordenar la lista de amigos
function ordenarLista(){
    listaDeAmigos.sort();
    mostrarAmigos();
}

// funcion para sortear un amigo, en la cual valida si hay amigos para sortear, si no hay amigos, muestra un alert, si hay amigos, sortea un amigo y muestra el resultado en el id resultado.
function sortearAmigo(){
    if(listaDeAmigos.length === 0){
        alert("No hay amigos para sortear");
        return;
    } else {
        let indice = Math.floor(Math.random() * listaDeAmigos.length);
        let amigoSorteado = listaDeAmigos[indice];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    }
}



