
//1

function isOdd(numero){
    let resultado=false;
    if(numero%2==0){
        resultado=false;
    }
    else
    {
        resultado = true;
    }
    return resultado;

}

console.log(isOdd(2));
console.log(isOdd(1));

//2

function inRange(numero,minimo,maximo){
    resultado = false;
    for(i=minimo;i<=maximo;i++)
    {
        if(numero==i){
            resultado=true
        }
    }

    return resultado;
}

console.log(inRange(2,-4,10));

console.log(inRange(2,3,10));

//3

function getPercentage(numero,porcentaje){
    return (numero*(porcentaje*0.01));

}

console.log(getPercentage(200,50));

//4

function getBiggestNumber(numbers){
 return Math.max(...numbers);
}

let numeros= [1,2,3,4,5,3,5,8,3];
console.log(getBiggestNumber(numeros));

//5

function getRandomColorSequence(colores,longuitud){
    let arrayColores = [];
    for(i=0;i<longuitud;i++){
        arrayColores.push(colores[Math.floor(Math.random() * (colores.length - 0) + 0)]);

    }
    return arrayColores;

}

//6

function getRockPaperScissor()
{
    let eleccion=["Piedra","Papel","Tijeras"];
    return eleccion[Math.floor(Math.random() * (eleccion.length - 0) + 0)]
}

console.log(getRockPaperScissor());

//7

function getRockPaperScissorRandomSequence(longuitud){
    let eleccion=["Piedra","Papel","Tijeras"];
    arrayFinal=[];
    for(i=0;i<longuitud;i++)
    {
        arrayFinal.push(eleccion[Math.floor(Math.random() * (eleccion.length - 0) + 0)]);
    }
    return arrayFinal;
}

console.log(getRockPaperScissorRandomSequence(8));

//8

function filterNumbersGreaterThan(numeros,filtro){
    let mayores =[];
    for(i=0;i<=numeros.length;i++)
        {
            if(numeros[i]>=filtro){
                mayores.push(numeros[i]);
            }
        }
        
        return mayores;
}

let arrayDeNumeros = ([1,2,3,4,5,6,7,8,9,10]);

console.log(filterNumbersGreaterThan(arrayDeNumeros,5));

//9


function getFactorial (numero){
    factorial =1;
    for(i=1;i<=numero;i++)
        {
            factorial=factorial*i;
        }
    return factorial;
}

//10

function areArraysEqual(a,b){
    iguales=true;
    for(i=0;i<=a.length;i++)
        {
            if(a[i]!=b[i])
                {
                    iguales=false;
                }
        }
    return iguales;
}

array1=["a","b","c","d"];
array2=["a","b","b","c"];
console.log(areArraysEqual(array1,array2));


//11

function toHackerSpeak(texto)
{
    hackerSpeak="";
    texto.replace("a","4");
    for(i=0;i<texto.length;i++){
        if(texto.slice(i,i+1)=="a")
            {
                hackerSpeak=hackerSpeak+"4";
            }
        
        else if(texto.slice(i,i+1)=="e")
            {
                hackerSpeak=hackerSpeak+"3";
            }
            
        else if(texto.slice(i,i+1)=="i")
            {
                hackerSpeak=hackerSpeak+"1";
            }
        
        else if(texto.slice(i,i+1)=="o")
            {
                hackerSpeak=hackerSpeak+"0";
            }
        
        else if(texto.slice(i,i+1)=="s")
            {
                hackerSpeak=hackerSpeak+"5";
            }
        else
            {
                hackerSpeak=hackerSpeak+texto.slice(i,i+1);
            }


    }

    return hackerSpeak;

    
}

console.log(toHackerSpeak("hola soy homero chino"));

//12

function getFileExtension(archivo)
{
    posicionPunto=archivo.indexOf(".");
    return archivo.slice(posicionPunto+1,(archivo.length));
}

console.log(getFileExtension("Pou.exe"));




//13
/*
function flatArray(array2d)
{
    arrayPlano=[];
    for(i=0;i<=array2d.length;i++)
        {
            for(j=0;j<=array2d.length;j++)
                {
                    arrayPlano.push(array2d[i][j]);
                }
        }
    return arrayPlano
}

console.log(flatArray([[1, 5, 4], [3, 10], [2, 5]]));

*/

//14

function removeDuplicates(arrayDuplicados)
{
    let arrayDepurado=[];
    let duplicado=false;
    for(i=0;i<=arrayDuplicados.length;i++)
        {
            for(j=0;j<=arrayDuplicados.length;j++)
                {
                    if(arrayDuplicados[i]==arrayDuplicados[j])
                        {
                            duplicado=true;
                        }
                        if(duplicado=true)
                            {
                                duplicado=false;
                            }
                        else
                            {
                                
                            }
                }
        }
}


function removeDuplicates(arr)
{
    let result = [];

    for (let ele of arr)
        {
            if (result.indexOf(ele)==-1)
                result.push(ele);
        }

    return result;
}
removeDuplicates([4,5,10,4,10,2]);