//ejercicio1

let numero1= Number(prompt("Dime un número"));

if (numero1 <0){
    console.log("Negativo");
}
else{
    console.log("Positivo")
}

//ejercicio2

let edad;

edad=(prompt("Dime tu edad"));

if(edad>18){
    alert("Eres mayor de edad");
}
else{
    alert("no eres mayor de edad");
}


//ejercio3
let parin;

parin=Number(prompt("Dime un numero"));

if(parin%2==0){
    alert("Par");
}
else{
    alert("Impar");
}

//ejercio4
let nota;

nota=Number(prompt("Dime tu nota"));

if(nota>=5){
    alert("Aprobado");
}
else{
    alert("Suspenso");
}


//ejercio5
let numeroA =Number(prompt("Dime el numero A"));
let numeroB =Number(prompt("Dime el numero B"));


if(numeroA>numeroB){
    alert("A es mas grande que B");
}
else if(numeroB>numeroA){
    alert("B es mas grande que A");
}
else{
    alert("Son iguales");
}

//ejercicio6
let numero17 =Number(prompt("Pon un numero del 1 al 7"));

switch (numero17){
    case 1:
        alert("Lunes");
    break;
    case 2:
        alert("Martes");
    break;
    case 3:
        alert("Miercoles");
    break;
    case 4:
        alert("Jueves");
    break;
    case 5:
        alert("Viernes");
    break;
    case 6:
        alert("Sabado");
    break;
    case 7:
        alert("Domingo");
    break;
}

//ejercicio7
var numero7 =Number(prompt("Elige una opcion de la 1 a la 3"));

switch (numero7){
    case 1:
        alert("Opcion A seleccionada");
    break;
    case 2:
        alert("Opcion B seleccionada");
    break;
    case 3:
        alert("Opcion C Seleccionada");
    break;
    default:
        alert("Otro");
    break;
}

//ejercicio8
var color =prompt("Escoge un color de semaforo(Rojo,verde o amarillo)");

switch (color){
    case "rojo":
        alert("Alto");
    break;
    case "amarillo":
        alert("Precaución");
    break;
    case "verde":
        alert("Avanza");
    break;
}

//ejercicio9
var color =prompt("ponme una fruta");

switch (color){
    case "manzana":
        alert("Es una manzana roja");
    break;
    case "platano":
        alert("Es un platano amarillo");
    break;
    case "uva":
        alert("Es una uva morada");
    break;
    default:
        alert("Fruta no reconocida");
    break;
}

//ejercicio10
var notaescolar =prompt("A,B,C,D,F");

switch (notaescolar){
    case "A":
        alert("Excelente");
    break;
    case "B":
        alert("Muy Bien");
    break;
    case "C":
        alert("Bien");
    break;
    case "D":
        alert("Suficiente");
    break;
    case "F":
        alert("Reprobado");
    break;
    default:
        alert(".");
    break;
}


