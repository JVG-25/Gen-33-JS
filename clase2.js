function calcularIndiceDeMasaCorporal(peso, estatura){
    const resultado = peso / (estatura*estatura);
    
    if(resultado < 18.5){
        console.log("Bajo peso");
    } 
    else if(resultado >18.5 && resultado < 24.9){
        console.log("Peso saludable");
    } else if(resultado > 24.9 && resultado < 29.9){
        console.log("Sobrepeso");
    } else {
        console.log("Obesidad");
    }

    return resultado;
}

console.log (calcularIndiceDeMasaCorporal(72, 1.64))



