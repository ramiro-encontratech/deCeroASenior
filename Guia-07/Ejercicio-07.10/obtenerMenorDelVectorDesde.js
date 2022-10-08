let obtenerMenorDelVectorDesde = function(vector, desde){
    let menorPorAhora = vector[desde]; // Usamos el vector[desde] como primero menor

    for(let i=desde;i<vector.length;i++){

        if(vector[i] < menorPorAhora){
            menorPorAhora = vector[i];
        }

    }

    return menorPorAhora;
}