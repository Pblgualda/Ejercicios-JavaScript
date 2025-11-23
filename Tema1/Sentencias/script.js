/*

//1
let edad = Number(prompt("Ingrese su edad"));
let permiso = prompt("¿Tiene permiso de sus padres? (sí/no)");
if((edad>=18)&&(permiso=="si")){
    console.log("Puedes pasar");
}
else{
    console.log("NO puedes pasar");
}



//2
let matematicas = prompt("¿Aprobó matemáticas? (sí/no)");
let fisica = prompt("¿Aprobó física? (sí/no)");
let quimica = prompt("¿Aprobó química? (sí/no)");
if(matematicas=="si"||fisica=="si"||quimica=="si"){
    console.log("Pasas");
}
else{
    console.log("No pasas");
}



//3 contraseña
let contraseña = prompt("Ingrese la contraseña");
if(contraseña!=1234){
    console.log("Contraseña incorrecta");
}
else{
    console.log("Contraseña correcta");
}



//4 Rango
let numero = Number(prompt("Ingrese un número"));
// Usa && para verificar el rango
if(numero>=10&&numero<=50){
    console.log("Esta en el rango");
}
else{
    console.log("No esta en el rango");
}



//ejercicio 5
let edad = Number(prompt("Ingrese su edad"));
let tutor = prompt("¿Tiene tutor presente? (sí/no)");
// Usa && y || según corresponda

if(edad>=18||tutor=="si"){
    console.log("Puede entrar");
}
else{
    console.log("No puede pasar");
}


//ejercicio6

let usuario = prompt("Ingrese su usuario");
let contraseña = prompt("Ingrese su contraseña");
if(usuario=="admin"&&contraseña==1234){
    console.log("Acceso Valido");
}
else if(usuario=="invitado"){
    console.log("Acceso Valido");
}
else{
    console.log("Acceso Denegado");
}



//ejercicio7

let numero = Number(prompt("Ingrese un número"));
numero<=100&&numero%2==0? console.log("Es par y menor a 100"):
numero<=100?console.log("Es menor que 100 pero es impar"):
numero&2==0?console.log("Es mayor que 100 pero es par"):
console.log("Es mayor a 100 y es impar");



//ejercicio8

let dia = prompt("Ingrese un día de la semana");
let laborable = false;
// Usa || para comparar con lunes, martes, miércoles, jueves, viernes
let dias=["lunes","martes","miercoles","jueves","viernes"];
for(i=0;i>=dias.lenght;i++){
    if(dia==dias[i]){
        laborable=true;
    }
}
laborable ? console.log("Dia laborable"):console.log("No es dia laborable");

*/

//ejercicio9
