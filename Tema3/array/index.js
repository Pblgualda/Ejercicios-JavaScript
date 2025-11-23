/*let nombres = [20,22,220,12,1,32,5];

function funcionCompararNumeros(a,b){
    if(a<b){
        return -1;
    }
    else if(a>b){
        return 1;
    }
    else{
        return 0;
    }
}

nombres.sort(<(a,b)=>a-b>); 
console.log(nombres);*/
/*
let alumnos = [
    ["Julio",20],
    ["Alejandro",21],
    ["Jose",30],
    ["Antonio",15]
]

function funcionCompararAlumnos(a,b){
    if(a[1] < b[1]){
        return -1;
    }
    else if(a [1] > b [1]){
        return 1;
    }
    else{
        return 0;
    }
}

alumnos.sort(funcionCompararNumeros);
console.log(alumnos);*/
/*
const arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3]
const aprobados = arrayNotas.filter((nota) => nota*2) 

console.log(aprobados);*/

//5
/*
let array1 = [1,2,3,4];
let array2 = [5,6,7,8,9];

let array3 = [1,2,3,4];
let array4 = [5,6,7,8,9];

console.log(array1.concat(array2));
console.log([...array3, ...array4]);*/
//6

/*
let doble = [1,2,3];

console.log(doble.map((a) => a * 2));*/

//7
/*
let pares = [1,2,3,4,5,6,7,8];

console.log(pares.filter((a) => a % 2 == 0));*/


//8
/*
let suma = [2,4,6,1,2,3];

console.log(suma.reduce((a,b)=>a+b));*/

//9
/*
let nombres = ["Jose","Marcos","Ana","Pepe","Carlos"];
let nombres2 = ["Jose","Marcos","Ana","Pepe","Carlos"];

console.log(nombres.sort());
console.log(nombres2.reverse());*/

//10
/*
let cadena = ["A" , " Pablo ", " le ", " gusta ", " el pito."];

console.log(cadena.join());*/

//10
/*
let cadena = "Hola soy homero chino";

console.log(cadena.split(" "));*/

//12
/*
let array = [1,4,8,5,8,9,4];
let result = [];

for(let ele of array)
    if(result.indexOf(ele) == -1)
    result.push(ele);

console.log(result);*/

//13
/*
let array = [1,2,3];
let max = Math.max(...array);
let min = Math.min(...array);

console.log("Max: " + max + ", min: " + min);*/

//14 
/*
let array = [[1,2,3],[4,5,6]];

console.log(array.flat());*/

//15
/*
let array = [1,1,1,1,1,1,1];

console.log(array.indexOf());*/
/*
const personas = [
  { nombre: "Ana", edad: 23 },
  { nombre: "Luis", edad: 30 }
];

personas.map();*/

/*
usuarios.sort((a, b) => a.edad - b.edad);

console.log(usuarios);*/

let ar = [1,3,5,6,3,5,3];

function cuantasVecesRepite(numero,ar){
    let numeroApariciones = 0;
    ar.forEach( (valor)=>{ if (valor ==numero) numeroApariciones++});

    return numeroApariciones;
}


console.log(cuantasVecesRepite(3,ar));

function cuentasVecesRepiteV2(numero, ar)
{
    let numeroApariciones=0;

    return ar.reduce( (numeroApariciones,v)=>
        {
            if(v==numero)
                return ++numeroApariciones;
            else
                return numeroApariciones;
        }, 0)
    
}

console.log(cuentasVecesRepiteV2(3,ar));