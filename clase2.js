function calcularIndiceDeMasaCorporal(numero1, numero2, numero3){
    const resultado = numero1 / (numero2*numero3);
    
    if(resultado < 18.5){
        console.log("Bajo peso");
    } else if( 18.5 < resultado > 24.9){
        console.log("Peso saludable");
    } else if(24.9 < resultado > 29.9){
        console.log("Sobrepeso");
    } else {
        console.log("Obesidad");
    }

    return resultado;
}

console.log (calcularIndiceDeMasaCorporal(106, 1.88, 1.88))

