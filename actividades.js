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

let contrasenia;
do {
    contrasenia = prompt("Ingrese la contraseña: ");
} while (contrasenia !== "1234");
console.log("Contraseña correcta");