let obtenerPosicionMenorDelVector = function(vector){
    let menorPorAhora = vector[0];
    let posicionMenorPorAhora = 0;

    for(let i=0;i<vector.length;i++){
        if(vector[i] < menorPorAhora){
            menorPorAhora = vector[i]; // Tenemos que guardar el menor, para seguir comparando
            posicionMenorPorAhora = i; // Y la posicion del menor por ahora, para devolverla al final
        }
    }

    return posicionMenorPorAhora;
}