// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// desarrollamos una lista de amigos

let listaDeAmigos = [];


function borrarCampo(){
    document.getElementById("amigo").value = "";
}

function agregarAmigo(){
    if(document.getElementById("amigo").value !== ""){
    listaDeAmigos.push(document.getElementById("amigo").value);
    borrarCampo();
    ordenarLista();
    } else {
    alert("Por favor, ingrese un nombre válido.");
    }
}

function mostrarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for(let i=0; i<listaDeAmigos.length; i++){
        listaAmigos.innerHTML += `<li>${listaDeAmigos[i]}</li>`
    }
}


function ordenarLista(){
    listaDeAmigos.sort();
    mostrarAmigos();
}

