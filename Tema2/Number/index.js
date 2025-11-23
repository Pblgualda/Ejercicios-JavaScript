/*

//Ejercicio 1

let a=Number("123");
let b=parseInt("3.14");
let c=parseFloat("abc");

function esEntero(numero){
    if (Number.isInteger(numero)){
        return true;
    }
    else{
        return false;
    }
}


console.log(isNaN(NaN));
console.log(isNaN("hello"));
console.log(isNaN(undefined));
console.log(isNaN(0/0));
console.log(isNaN(parseInt("abc")));


console.log(Number.isFinite(1/0));

//Ejercicio2
console.log(a+" "+b+" "+" "+c);

let numero =3.141592;

console.log(numero.toFixed(2));
console.log(numero.toFixed(4));
console.log(numero.toFixed(6));


console.log((123456).toExponential(2));

console.log((255).toString(2));
console.log((255).toString(8));
console.log((255).toString(16));

console.log((123.456789).toPrecision(4));
console.log((123.456789).toPrecision(7));

let validable = prompt("Pon un número");
function validarDecimal(cadena){
    if (isNaN(cadena)){
        console.log("No es un número Valido");
    }
    else{
        if(Number.isInteger(cadena))
        {
            console.log("Es un número valido y es un entero")
        }
        else
        {
                console.log("Es un número valido y es un decimal");
        }
    }

}

validarDecimal(validable);



//Relacion 2
let Absoluto=-10
function valorAbsoluto(numero){
    return Math.abs(numero);
}

console.log(valorAbsoluto(Absoluto));


let decimali=parseInt(prompt("Pon un numero"));
console.log(Math.round(decimali));
console.log(Math.ceil(decimali));
console.log(Math.floor(decimali));


console.log(Math.pow(5,3));
console.log(Math.sqrt(81));

let a=[10, -5, 3, 99, 42];

console.log(Math.max(...a));
console.log(Math.min(...a));


//Numero random del 1 al 10

console.log(Math.floor(Math.random() * 11));

console.log("Lanzamiento de Dado: "+(Math.floor(Math.random() * 7)));


let mini = 10;
let mani = 80;
function MiniMani(minimo,maximo){

return Math.floor(Math.random() * (maximo - minimo) ) + minimo;
}

console.log(MiniMani(mini,mani));

console.log(Math.sin(45*(Math.PI/180)));
console.log(Math.cos(45*(Math.PI/180)));


console.log(Math.log(10));


let numeroRandom = Math.floor(Math.random() * (100 - 1) ) + 1;
let acertado = false;
while(acertado == false){
    let intento = prompt("Ingresa un número");
    if(intento == numeroRandom){
        console.log("Acertado");
        acertado=true;
    }
    else if(intento>numeroRandom){
        console.log("El numero aleatorio es mas pequeño");
    }
    else{
        console.log("El numero aleatorio es mas grande");
    }
}

let x1=10;
let x2=0;
let y1=10;
let y2=0;
console.log(sqrt(Math.pow((x2 - x1),2) + Math.pow((y2-y1),2)));



*/







