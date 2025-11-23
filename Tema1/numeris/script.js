/*

//ejercicio1

let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));

console.log("Suma: "+(num1+num2));
console.log("Resta: "+(num1-num2));
console.log("Multiplicación: "+(num1*num2));

//ejercicio 2

let numero = Number(prompt("Ingrese un número"));
var paroimpar = numero%2==0 ? "Par" : "Impar"
console.log(paroimpar);



//ejercicio3

let a = Number(prompt("Número 1"));
let b = Number(prompt("Número 2"));
let c = Number(prompt("Número 3"));
// Escribe un condicional para encontrar el mayor

if(a>b && a>c){
    console.log("a es el más grande");
}
else if(b>a && b>c){
    console.log("b es el más grande")
}
else{
    console.log("c es el más grande");
}



//ejercicio4
let num = Number(prompt("Ingrese un número"));
for (i=0;i<=10;i++){
   console.log(num+"x"+i+"="+(i*num)); 
}



//ejercicio5

let N = Number(prompt("Ingrese un número"));
let SumaTotal=0;

for(i=0;i<N;i++){
    SumaTotal+=N;
}
console.log(SumaTotal);

//ejercicio6
let positivos = 0;
let negativos = 0;

for(let i = 0; i < 5; i++) {
    let num = Number(prompt(`Ingrese el número ${i+1}`));
    // Incrementa positivos o negativos según corresponda
    num>=0 ? positivos++ : negativos++;    
}

console.log("Positivos: "+positivos+" Negativos: "+negativos);


//ejercicio7

let num = Number(prompt("Ingrese un número"));
let primo=true;
for(i=num-1;i>=1;i--){
    if(num%i==0)
    {
        if(i!=1)
        {
            primo = false;
        }
    }
}
console.log(primo ? "Primo":"No primo");


//factorial 8
let numero = Number(prompt("Ingrese un número"));
let factorial = 1;
for(i=1;i<=numero;i++){
    factorial*=i;
}
console.log(factorial);



//9 pares
let N = Number(prompt("Ingrese un número"));
for(i=1;i<=N;i++){
    if(i%2==0){
        console.log(i);
    }
}

*/

let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento;

while(intento !== numeroSecreto) {
    intento = Number(prompt("Adivina el número entre 1 y 10"));
    if(intento>numeroSecreto){
        console.log("TU número es mayor");
    }

    if(intento<numeroSecreto){
        console.log("Tu número es menor");
    }

    if(intento==numeroSecreto){
        console.log("Has ganado");
    }
}
