# 01.6

Ejercicio 6 de la guia #01 de "De Cero a Senior". Hacé click [aca](https://guias.encontratech.com.ar) para descargarla.

## Enunciado

Desarrolla un algoritmo que permita leer tres valores y almacenarlos en las variables A, B y C respectivamente. Imprima el mayor de los tres valores.


## Opcion 1

### Pseudocódigo

    INICIO
        Pedir al usuario el primer valor y guardarlo en A
        Pedir al usuario el primer valor y guardarlo en B
        Pedir al usuario el primer valor y guardarlo en C
        Si A es mayor que B entonces:
            Si A es mayor que C entonces:
                Imprimir A
            Si no:
                Imprimir C
            FinSi
        Si no:
            Si B es mayor que C entonces:
                Imprimir B
            Si no:
                Imprimir C
            FinSi
        FinSi
    FIN


### Diagrama de flujos

![Diagrama de flujos - version 1](./Diagrama%20de%20Flujos%20-%20version%20%231.png)

## Opcion 2

### Pseudocódigo


    INICIO
        Pedir al usuario el primer valor y guardarlo en A
        Pedir al usuario el primer valor y guardarlo en B
        Pedir al usuario el primer valor y guardarlo en C
        Si (A es mayor que B) Y (A es mayor que C) entonces:
            Imprimir A
        Si B es mayor que C entonces:
            Imprimir B
        Si no:
            Imprimir C
        FinSi
    FIN

### Diagrama de flujos

![Diagrama de flujos - version 2](./Diagrama%20de%20Flujos%20-%20version%20%232.png)

***
© Copyright [EncontraTech](https://www.encontraTech.com.ar), 2022. Todos los derechos reservados.