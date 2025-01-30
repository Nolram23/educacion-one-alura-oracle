// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// desarrollamos una lista de amigos

let listaAmigos = [];


function borrarCampo(){
    document.getElementById("amigo").value = "";
}

function agregarAmigo(){
    if(document.getElementById("amigo").value !== ""){
    listaAmigos.push(document.getElementById("amigo").value);
    borrarCampo();
    } else {
    alert("Por favor, ingrese un nombre válido.");
    }
}

