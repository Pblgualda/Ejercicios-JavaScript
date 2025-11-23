//1 comillas

let nombre = "Ana"
console.log(nombre);


//2 mal orden
let edad = 20;
console.log(edad);



//3 1 igual en vez de 2
let a = 5;
let b = 10;
if (a == b) {
  console.log("a es igual a b");
}

//4 nunca incrementa i
let i5 = 0;
while (i5 <= 5) {
  console.log(i5);
  i5++;
}

//5

function saludar(nombre) {
  console.log("Hola " + nombre);
}
saludar("pablo");



//6 
let frutas = ["manzana", "banana", "pera"];
console.log(frutas[2]);


//7
let persona = { nombre: "Ana", edad: 25 };
console.log(persona.nombre.toUpperCase());


//8
let a2 = 5;
let b2 = 10;
console.log(a2 + b2);

//9
let nota = 8;
if (nota >= 5)
{
  console.log("Aprobado");
} 
else {
  console.log("Reprobado");
}


//10
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i <= numeros.length; i++) {
  console.log(numeros[i]);
}

