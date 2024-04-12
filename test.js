//1.- Se requiere conocer la cantidad de letras de una palabra dentro de la frase. La palabra se debe seleccionar por su posicion.
//( quiero saber la longitud de la segunda palabra)
//si preguntamos por una posicion que no existe en la frase, devolvemos un mensaje que indique el error
const frase = "La mejor forma de predecir el futuro es creandolo";

  
function obtenerPalabraYLongitud(frase, posicion) {
    // Dividir la frase en palabras
    const palabra2 = frase.split(" ");

    // Verificar si la posición deseada está dentro del rango
    if (posicion < 1 || posicion > palabra2.length) {
        console.log("La posición deseada no existe.");
        return;
    }

    // Obtener la palabra en la posición deseada
    const palabra1 = palabra2[posicion];

    // Obtener la longitud de la palabra
    const longitud = palabra1.length;

    // Devolver la palabra y su longitud
    return { palabra1, longitud };
}

const posicion= 5; // Cambiar esta posición según sea necesario
const resultado = obtenerPalabraYLongitud(frase, posicion);

// Verificar si se encontró la palabra
if (resultado) {
    console.log("Palabra:", resultado.palabra1);
    console.log("Longitud:", resultado.longitud);
}
//2.- De la frase, necesitamos eliminar una palabra con base en su posicion, y recibir una nueva frase sin la palabra borrada

function removerPalabra(frase, posicionPorRemover) {
    const palabra2 = frase.split(" ");
    if (posicionPorRemover < 1 || posicionPorRemover > palabra2.length) {
        console.log("La posición deseada no existe.");
        return;
    }
   
    palabra2.splice(posicionPorRemover, 1);

    const nuevaFrase = palabra2.join(" ");

    return nuevaFrase;
}

const posicionPorRemover = 10; // Cambiar esta posición según sea necesario

const nuevaFrase = removerPalabra(frase, posicionPorRemover);

if(nuevaFrase) {
    console.log("Nueva frase:", nuevaFrase);
    console.log("Frase original:", frase);
}

//3.- Se requiere eliminar todas las palabras cortas de la frase, considerando que una palabra
// corta es aquella que tiene 3 caracteres o menos, y debemos obtener la nueva frase sin palabras cortas

const fraseCorta= eliminarPalabrasCortas(frase);

function eliminarPalabrasCortas(frase) {
    // Dividir la frase en palabras
    let palabrasCortas = frase.split(" ");

    // Filtrar las palabras que tengan tres o más caracteres
    palabra3 = palabrasCortas.filter(palabrasCortas => palabrasCortas.length >= 3);

    // Unir las palabras nuevamente en una frase
    const fraseCorta = palabra3.join(" ");

    return fraseCorta;
}

// Ejemplo de uso

console.log("Nueva frase:", fraseCorta);

// 4.- Se requiere obtener la frase, pero escrita en orden inve
function textoInvertido(frases) {

return frases.split("").reverse().join("");

}
const fraseAlreves = textoInvertido(frase);

console.log(fraseAlreves);

