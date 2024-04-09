let phrase = "La mejor forma de predecir el futuro es creandolo";
//Saber cuantos caracteres tiene la frase
//Para este primer ejercicio, es necesario calcular la cantidad de caracteres
//que conforman a la frase, es decir, calcular el numero total de caracteres de
//la frase, esto incluye espacios, letras, numeros e incluso simbolos.
console.log(phrase.length);

// Saber cuántas palabras tiene la frase, en este ejercicio es necesario contar 
//la agrupacion de caracteres, dandoles el valor de uno, en el cual es necesario 
//utilizar los espacios como herramienta de separacion  los cuales marcan el fin
//o el inicio de una agrupacion de caracteres o palabras
//a cada una de las agrupaciones con un valor de uno, es decir los espacios ayudaran
//a contar cada agrupacion, y de esa manera obtener el resultado de las palabras
let palabras = phrase.split(" ");
console.log(palabras);
console.log(palabras.length);

// Saber cuántas letras tiene la frase
//Para este ejercicio,el metodo que utilice fue eliminar los espacios en blanco
//de la frase, de esta manera, podria tener la cuenta de las letras en especifico
let phrase3 = phrase.replace(/\s/g, "");
console.log(phrase3);
console.log(phrase3.length)

// Obtener la misma frase pero en mayúsculas
let phrase2 = phrase.toUpperCase();
console.log(phrase2);

// Obtener la misma frase pero con todas las letras "a" reemplazadas por un "4"
//De esta manera tengo que informarle a mi programa, que busque de manera global
// el caracter a despues de esto, quiero que todas las a encontrads, se reemplacen
//por el 4
let phrase4 = phrase.replace(/a/g, "4");
console.log(phrase4);




