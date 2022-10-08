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