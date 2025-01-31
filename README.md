# Challenge Amigo Secreto - ONE-ALURA

## Descripción del Proyecto

El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema de un juego de "Amigo Secreto". Esta aplicación permite a los usuarios ingresar nombres en una lista y realizar un sorteo aleatorio para determinar quién es el "amigo secreto".

## Funcionalidades

La aplicación consta de las siguientes funcionalidades:

1. **Adicionar Amigo:**
   - Permite al usuario ingresar un nombre en un campo de texto.
   - El botón "Adicionar" se habilita cuando se ingresa un nombre válido.
   - Si el campo está vacío, se muestra una alerta solicitando un nombre válido.
   - Los nombres se guardan en una lista interna y se muestran en la pantalla.
   - La lista se ordena alfabéticamente y se actualiza en tiempo real.
   - Se evita la duplicación de nombres a través de la visualización de la lista.

2. **Sortear Amigo:**
   - Genera un sorteo aleatorio para seleccionar un nombre de la lista.
   - Muestra el nombre del "amigo secreto" en la pantalla.
   - Si la lista está vacía, se muestra una alerta indicando que no hay amigos para sortear.

## Estructura del Código

### Lista de Amigos

```javascript
let listaDeAmigos = [];
 1 vulnerability detected
Función para Borrar Campo
JavaScript
function borrarCampo() {
    document.getElementById("amigo").value = "";
}
Función para Agregar Amigo
JavaScript
function agregarAmigo() {
    if (document.getElementById("amigo").value !== "") {
        listaDeAmigos.push(document.getElementById("amigo").value);
        borrarCampo();
        ordenarLista();
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
}
Función para Mostrar Amigos
JavaScript
function mostrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        listaAmigos.innerHTML += `<li>${listaDeAmigos[i]}</li>`;
    }
}
Función para Ordenar la Lista de Amigos
JavaScript
function ordenarLista() {
    listaDeAmigos.sort();
    mostrarAmigos();
}
Función para Sortear Amigo
JavaScript
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    } else {
        let indice = Math.floor(Math.random() * listaDeAmigos.length);
        let amigoSorteado = listaDeAmigos[indice];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    }
}
```
# Desarrollo de la Aplicación

## Paso 1: Crear la Lista de Amigos
- Definimos una lista vacía para almacenar los nombres de los amigos.
- Utilizamos un array interno en el código dado que es una aplicación pequeña y no requiere el uso de una base de datos.

## Paso 2: Función para Agregar Amigos
- Capturamos el valor del campo de entrada.
- Validamos si el campo está vacío y emitimos una alerta si es necesario.
- Actualizamos el valor en la lista de amigos.
- Limpiamos el campo de entrada.

## Paso 3: Función para Mostrar Amigos
- Creamos la función `mostrarAmigos` para visualizar la lista de amigos en la pantalla.
- Obtenemos el elemento HTML `listaAmigos` y lo reiniciamos a una lista vacía.
- Usamos un bucle `for` para recorrer y mostrar los nombres en la lista.

## Paso 4: Función para Ordenar la Lista
- Creamos la función `ordenarLista` para ordenar los nombres alfabéticamente.
- Llamamos a la función `mostrarAmigos` dentro de `ordenarLista` para actualizar la visualización.

## Paso 5: Función para Sortear Amigo
- Utilizamos las funciones `Math.random` y `Math.floor` para generar un índice aleatorio.
- Seleccionamos un nombre basado en el índice generado y lo mostramos en el HTML.

## Repositorio
Una vez descargados los archivos iniciales, se procede a crear el repositorio en GitHub, el cual se irá modificando de acuerdo al avance del desafío. El repositorio se llamará `challenge-amigo-secreto_esp-main`.

## Conclusión
Este proyecto proporciona una excelente oportunidad para practicar y mejorar las habilidades en lógica de programación mediante la creación de una aplicación interactiva y divertida. Los conceptos de manejo de arrays, manipulación del DOM, y generación de números aleatorios son fundamentales y se aplican de manera práctica en este desafío.
