/*Ejercicio 1*/

let eresbello = prompt("¿Usted es bello?")

if (eresbello == "si"){
    alert ("Usted es hermoso y vaya que lo sabe")
}else if (eresbello == "no"){
    alert ("Deje de mentir usted es hermoso")
}else alert("No ignore mi pregunta conteste si o no >:( ")

/*Ejercicio 2*/

let numeroentre2 = prompt("¿Quieres saber si un numero es dividible entre 2? insertelo aquí: ")

if ((numeroentre2 % 2) == 0 ){
    alert (numeroentre2 + " se puede dividir entre 2")
}else alert(numeroentre2 +" no se puede dividir entre 2")

/*Ejercicio 3*/

let par = prompt("Si introduces un numero par tendras una sorpresa")

if ((par % 2) == 0){
    alert (" Felicidades toma tu sorpresa (*v*)")
}else alert ("Ese no es un numero par MUERE >B(")

/*Ejercicio 4*/

let ganador = prompt("Introduce tu numero de cliente")

if (ganador == 1000){
    alert("FELICIDADES USTED ES EL GANADOR DE UN MILLON DE AXOLOPESOS")
}else if (ganador !== 1000){
    alert ("BIENVENIDO USUARIO " + ganador)
}else alert ("NO RECONOZCO SU NUMERO DE USUARIO INTENTELO DE NUEVO :(")

/*Ejercicio 5*/

alert ("Introduce 2 numeros y te dire cual es mayor ")

let num1 = Number(prompt("introduce un numero"))
let num2 = Number(prompt("introduce un segundo numero"))

if (num1 > num2){
    Alert(num1 + "ES EL MAYOR")
}else if (num1 < num2){
    alert(num2 + " ES EL MAYOR")
}else if(num1 == num2){
    alert ("AMBOS NUMEROS SON IGUALES")
}else alert ("NO RECONOZCO LOS DATOS")

/*Ejercicio 6*/

// Solicitar calificación al usuario
let calificacion = parseFloat(prompt("Ingresa tu calificación (entre 1 y 10):"));

// Verificar si la calificación está en el rango válido
if (calificacion >= 1 && calificacion <= 10) {
    // Evaluar la calificación y mostrar el mensaje correspondiente
    if (calificacion < 6) {
        console.log("Reprobado ):");
    } else if (calificacion >= 6 && calificacion <= 8) {
        console.log("Regular, puedes mejorar");
    } else if (calificacion === 9) {
        console.log("¡Bien!");
    } else {
        console.log("Excelente, sigue asi");
    }
} else console.log("La calificación debe estar entre 1 y 10");

/*Ejercicio 7*/

// Slicitar tipo de vehículo al usuario
var tipoVehiculo = prompt("Ingrese el tipo de vehículo (coche, moto, autobús):");

// Solicitar distancia recorrida al usuario
var distanciaRecorrida = parseFloat(prompt("Ingrese la distancia recorrida en kilómetros:"));

// Solicitar litros consumidos al usuario
var litrosConsumidos = parseFloat(prompt("Ingrese los litros consumidos:"));

// Definir precios por kilómetro según el tipo de vehículo
var precioKm;
if (tipoVehiculo.toLowerCase() === "coche") {
  precioKm = 0.20;
} else if (tipoVehiculo.toLowerCase() === "moto") {
  precioKm = 0.10;
} else if (tipoVehiculo.toLowerCase() === "autobús") {
  precioKm = 0.5;
} else {
  console.log("Tipo de vehículo inválido");
}

// Calcular costo total
var costoTotal = precioKm * distanciaRecorrida;
if (litrosConsumidos >= 0 && litrosConsumidos <= 100) {
  costoTotal += 5;
} else if (litrosConsumidos > 100) {
  costoTotal += 10;
}

console.log("El total a pagar es: " + costoTotal + " MXN");

/*Ejercicio 8*/

// Pedir al usuario el curso y la beca
let curso = prompt("¿Qué curso te interesa? (Course / Carrera / Master)");
let beca = prompt("¿Cuentas con alguna beca? (Facebook / Google / Jesua / Ninguna)");

// Definir los costos mensuales de los cursos
let costoCourse = 4999;
let costoCarrera = 3999;
let costoMaster = 2999;

// Definir las duraciones de los cursos
let duracionCourse = 2;
let duracionCarrera = 6;
let duracionMaster = 12;

// Definir los descuentos de las becas
let descuentoFacebook = 0.2;
let descuentoGoogle = 0.15;
let descuentoJesua = 0.5;

// Calcular el precio mensual y total según el curso elegido
let precioMensual;
let costoTotal;
let duracion;

if (curso.toLowerCase() === "course") {
    precioMensual = costoCourse;
    duracion = duracionCourse;
} else if (curso.toLowerCase() === "carrera") {
    precioMensual = costoCarrera;
    duracion = duracionCarrera;
} else if (curso.toLowerCase() === "master") {
    precioMensual = costoMaster;
    duracion = duracionMaster;
} else {
    console.log("El curso elegido no es válido ): ");
}

// Aplicar el descuento correspondiente si tiene beca
if (beca.toLowerCase() === "facebook") {
    precioMensual -= precioMensual * descuentoFacebook;
} else if (beca.toLowerCase() === "google") {
    precioMensual -= precioMensual * descuentoGoogle;
} else if (beca.toLowerCase() === "jesua") {
    precioMensual -= precioMensual * descuentoJesua;
} else if (beca.toLowerCase() !== "ninguna") {
    console.log("La beca elegida no es válida, revisa si escribiste bien (:");
}

// Calcular el costo total del curso


// Mostrar los resultados en la consola
console.log("Precio mensual con descuento: $" + precioMensual + " MXN");
console.log("Duración del curso que tomaras: " + duracion + " meses");
costoTotal = (precioMensual * duracion);
console.log("Costo total del curso: $" + costoTotal + " MXN");

/*Ejercicio 9*/

// Solicitar topping al usuario
let topping = prompt("Elige un topping: Oreo, KitKat, Brownie");

// Definir precios de los helados y toppings
let precioHelado = 50;
let precioOreo = 10;
let precioKitKat = 15;
let precioBrownie = 20;

// Calcular el precio del helado segÃºn el topping elegido
if (topping.toLowerCase() === "oreo") {
    console.log("El precio del helado con topping de Oreo es: " + (precioHelado + precioOreo) + " MXN");
} else if (topping.toLowerCase() === "kitkat") {
    console.log("El precio del helado con topping de KitKat es: " + (precioHelado + precioKitKat) + " MXN");
} else if (topping.toLowerCase() ===

    "brownie") {
    console.log("El precio del helado con topping de Brownie es: " + (precioHelado + precioBrownie) + " MXN");
} else {
    console.log("No tenemos este topping, lo sentimos. El precio del helado sin topping es: " + precioHelado + " MXN");
}

