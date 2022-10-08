let swapValoresVector = function(vector, posicionX, posicionY){
    let valorDePosicionX = vector[posicionX];
    vector[posicionX] = vector[posicionY];
    vector[posicionY] = valorDePosicionX;
}