# 02.04

Ejercicio 04 de la guia #02 de "De Cero a Senior". Hacé click [aca](https://guias.encontratech.com.ar) para descargarla.

## Enunciado

Escribir en pseudocódigo, diagrama de flujo y en javascript el siguiente programa. Crea un algoritmo que identifique que tipo de triángulo es, segun los valores ingresado por el usuario para el largo de sus tres lados. (Escaleno, todos los lados distintos, equilátero,todos los lados iguales, o isósceles, dos lados iguales y uno distinto).

## Pseudocódigo

    INICIO
        Pedir al usuario ingresar el primerLado
        Pedir al usuario ingresar el segundoLado
        Pedir al usuario ingresar el tercerLado
        Si primerLado == segundoLado:
            Si segundoLado == tercerLado:
                Imprimir "Es equilátero"
            Si no:
                Imprimir "Es Isósceles"
            FinSi
        Si no:
            Si segundoLado == tercerLado:
                Imprimir "Es Isósceles"
            Si no: 
                Si primerLado == tercerLado:
                    Imprimir "Es Isósceles"
                Si no:
                    Imprimir "Es Escaleno"
                FinSi
            FinSi
        FinSi
    FIN

## Diagrama de flujos

![Diagrama de flujos](./Diagrama%20de%20Flujos.png)

## Código

El código esta en  [tipoDeTriangulo.html](./tipoDeTriangulo.html)

***
© Copyright [EncontraTech](https://www.encontraTech.com.ar), 2022. Todos los derechos reservados.