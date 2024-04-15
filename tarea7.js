//1.- Necesitamos poder entregar las iniciales del nombre de una persona, considerando únicamente primer
 //nombre, apellido paterno y apellido materno
//    input => Israel Salinas Martínez
 //   output => I. S. M.    
const nombreUno =  "Israel Salinas Martinez"

function obtenerIniciales(nombreUno) {
    // Dividir el nombre completo en palabras y eliminar las palabras vacías
    const iniciales = nombreUno.split(" ")
                                 .filter(palabra => palabra.length > 0)
                                 .map(palabra => palabra[0])
                                 .join("")
                                 
    
    return iniciales;
}
const iniciales = obtenerIniciales(nombreUno);
console.log(iniciales);
 //2.- Necesitamos una ruleta de nombres, es decir, de una lista de nombres, 
 //debemos poder obtener algún nombre al azar. El nombre seleccionado debe ser eliminado de la lista 
 //original para poder volver a usar la ruleta.    Cuando ya no haya nombres, debe avisar que ya no hay 
 //nombres en la lista.
 const nombres = ["Liam", "Emma", "Noah", "Olivia", 
 "William", "Ava", "James", "Isabella", "Logan", "Sophia", 
 "Benjamin", "Mia", "Mason", "Charlotte", "Elijah", "Amelia", 
 "Oliver", "Harper", "Jacob", "Evelyn"];
 function seleccionarNombreYActualizarLista(nombres) {
    // Verificar si hay nombres restantes en el array
    if (nombres.length === 0) {
        console.log("Ya no hay palabras en el array");
        return;
    }

    // Tomar un nombre aleatorio del array
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const nombreAleatorio = nombres[indiceAleatorio];

    // Imprimir el nombre seleccionado
    console.log("Nombre seleccionado:", nombreAleatorio);

    // Imprimir la lista sin la palabra seleccionada
    nombres.splice(indiceAleatorio, 1);// el indice uno indica la cantidad de palabras que se eliminaran 
    //a partir de la posicion indicada

    console.log("Lista sin la palabra seleccionada:", nombres);

    // Llamar recursivamente a la función para continuar el proceso
    seleccionarNombreYActualizarLista(nombres);
}

// Iniciar el proceso
seleccionarNombreYActualizarLista(nombres.slice());