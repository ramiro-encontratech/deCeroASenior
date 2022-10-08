// Funcion del ejercicio 11
let obtenerPosicionMenorDelVectorDesde = function(vector, desde){
    let menorPorAhora = vector[desde];
    let posicionMenorPorAhora = desde;

    for(let i=desde;i<vector.length;i++){

        if(vector[i] < menorPorAhora){
            menorPorAhora = vector[i];
            posicionMenorPorAhora = i;
        }

    }

    return posicionMenorPorAhora;
}

// Funcion del ejercicio 12
let swapValoresVector = function(vector, posicionX, posicionY){
    let valorDePosicionX = vector[posicionX];
    vector[posicionX] = vector[posicionY];
    vector[posicionY] = valorDePosicionX;
}

let ordenarVector = function(vector){

    for(let i=0;i<vector.length;i++){
        let posicionMenorElemento = obtenerPosicionMenorDelVectorDesde(vector,i);
        swapValoresVector(vector,i,posicionMenorElemento);
    }
}