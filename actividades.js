const prompt = require('prompt-sync')();
/*** Ejercicio 1: While
Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario ingrese un número negativo. Luego, imprime la suma de todos los números ingresados. ***/
/*
let num = Number(prompt("Ingrese un numero, ingrese uno negativo para terminar: "));
let suma = 0;

while (num >= 0) {
    suma += num;
    num = Number(prompt("Ingrese otro numero (ingrese uno negativo para terminar): "));
};
console.log(`La suma total es: ${suma}`);
*/
/*** Ejercicio 2: Do While
Escribe un programa que solicite al usuario ingresar una contraseña. Si la contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la correcta. La contraseña correcta es "1234". ***/
/*
let contrasenia;
do {
    contrasenia = prompt("Ingrese la contraseña: ");
} while (contrasenia !== "1234");
console.log("Contraseña correcta");
*/
/*** Ejercicio 3: Ciclo For
Nuestra tarea es contar la cantidad de números impares que hay desde el número 0 hasta un número X (inclusive). Para esto, debes seguir los siguientes pasos:
1. Solicitar al usuario que ingrese un número X.
2. Inicializar una variable para contar los números impares.
3. Utilizar un ciclo for para recorrer los números desde 0 hasta X (inclusive).
4. Dentro del ciclo, verifi car si el número es impar.
5. Si el número es impar, incrementar el contador de números impares.
6. Al fi nalizar el ciclo, imprimir en consola la cantidad de números impares encontrados.
7. Utiliza el operador módulo (%) para verifi car si un número es impar.
8. Ejemplo de Ejecución: Si el usuario ingresa 10, el programa debe imprimir: “La cantidad de números impares desde 0 hasta 10 (inclusive) es: 5” ***/
/*
let num = Number(prompt("Ingrese un  numero: "));
let impar = 0;
for (let i=0 ; i<=num ; i++ ) {
    if (i % 2 !== 0) {
        impar++;
    }
};
console.log("Total de numeros impares: " + impar);
*/
/*** Ejercicio 4: Ciclo For - Array
Crear un programa que permita registrar las notas de varios estudiantes usando arrays y mostrarlas por pantalla:
1. Crear un array para almacenar las notas.
2. Defina un array vacío llamado notas donde almacenaremos las notas de los estudiantes.
3. Pide al usuario que ingrese las notas de varios estudiantes una por una utilizando el método prompt.
4. Usa un bucle for para solicitar las notas y asignarlas directamente a posiciones específicas del array notas.
5. Imprime en consola las notas ingresadas usando el array notas. ***/
/*
let notas = [];
let totalNotas = Number(prompt("Ingrese el total de notas: "));

for (let i=0 ; i<totalNotas ; i++ ) {
    notas[i] = Number(prompt("Ingrese una nota: "));
};
console.log(notas);
*/
/*** Ejercicio 5: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array. (Pueden desglosar en pasos el código si eso les facilita su desarrollo). ***/
/*
let nombres = [];
for (let i=0 ; i<5 ; i++) {
    nombres[i] = prompt("Ingrese un nombre: ").toUpperCase();
};
let buscarNombre = prompt("Ingrese un nombre para buscar: ").toUpperCase();
let encontrado = false;

for (let i = 0; i < nombres.length; i++) {
    if (buscarNombre === nombres[i]) {
        encontrado = true;
        break; // para salir del for inmediatamente
    }
}
if (encontrado) {
    console.log("El nombre se encuentra en el array");
} else {
    console.log("El nombre no se encuentra en el array");
}
*/
/*** Ejercicio 6: Iguales a 10 pero menores de 1000
Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, pero menores que 1000.
let matriz = [
[10, 3, 2, 1, 4, 7], 
[5, 5, 10, 100, 4], 
[5, 125, 10, 1020, 4],
[5, 5, 5097, 100, 4]
];***/
/*
let matriz = [
[10, 3, 2, 1, 4, 7], 
[5, 5, 10, 100, 4], 
[5, 125, 10, 1020, 4], 
[5, 5, 5097, 100, 4]
];
let suma = 0;
for (let i=0 ; i<matriz.length; i++) {
    for (let j=0 ; j<matriz[i].length; j++) {
        if (matriz[i][j]>=10 && matriz[i][j]<1000) {
            suma += matriz[i][j];
        };
    };
};
console.log(suma); 
*/
/*** Ejercicio 7: Matriz 5x5
Declara una variable que contenga una matriz de 5x5 llena de puros números enteros y positivos. Luego, escribe un algoritmo para sumar todos los números en la matriz. ***/
/*
let matriz = [
    [1,  2,  3,  4,  5],
    [6,  7,  8,  9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];
let suma = 0;
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        suma += matriz[i][j];
    }
}
console.log("La suma total de la matriz es:", suma);
*/
/*** Ejercicio 8: Rojo y Verde 
Para este ejercicio vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.
b) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único. Rojo: 505
Verde 505
IMPORTANTE: Para hacer este ejercicio, tendrán que investigar sobre el método “push” en los Arrays. ¡Este método lo veremos en las próximas clases, pero si desean pueden investigarlo para resolver este desafío!***/

let matriz = [
 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
 [11,12,13,14,15,16,17,18,19,20],
 [21,22,23,24,25,26,27,28,29,30],
 [31,32,33,34,35,36,37,38,39,40],
 [41,42,43,44,45,46,47,48,49,50],
 [51,52,53,54,55,56,57,58,59,60],
 [61,62,63,64,65,66,67,68,69,70],
 [71,72,73,74,75,76,77,78,79,80],
 [81,82,83,84,85,86,87,88,89,90],
 [91,92,93,94,95,96,97,98,99,100]
];

function sumarDiagonalRoja(matriz) {
    let suma = 0;

    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][i];
    }

    return suma;
}

function sumarDiagonalVerde(matriz) {
    let suma = 0;

    for (let i = 0; i < matriz.length; i++) {
        let j = matriz.length - 1 - i;
        suma += matriz[i][j];
    }

    return suma;
}

console.log("Rojo:", sumarDiagonalRoja(matriz));   // 505
console.log("Verde:", sumarDiagonalVerde(matriz)); // 505