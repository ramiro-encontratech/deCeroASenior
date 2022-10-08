let obtenerMenorDelVector = function(vector){
    let menorPorAhora = vector[0]; //Le asignamos el primer valor como primer menor

    // Vamos a iterar entre todos los elementos del vector
    for(let i=0;i<vector.length;i++){

        // Preguntamos si el elemento que estamos "visitando" en esta iteracion es menor que el que teniamos como menor
        if(vector[i] < menorPorAhora){
            menorPorAhora = vector[i]; // Si es menor, lo reemplazamos.
        }

    }

    return menorPorAhora; // Cuando ya recorrimos el vector, devolvemos el menor
};