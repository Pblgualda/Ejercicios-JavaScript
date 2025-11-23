//ejercicio1
/*
function crearMatricula(){
    let matricula ="";
    let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    for(i=0;i<=2;i++)
    {
        matricula = matricula+letras.charAt(Math.random() * (26 - 0) + 0);
    }
        matricula = matricula+"-"+Math.ceil(Math.random() * (9999 - 1000) + 1000)
    
    return matricula;
    
}

console.log(crearMatricula());


//ejercicio2

let numerodeDados =Number(prompt("Dime el numero de dados"));
let numerodeCaras =Number(prompt("Dime el numero de caras"));
function tirarDados(n,m){
    let resultado="";
    let total = 0;
    let numero=0;
    for(i=0;i<n;i++){
      numero=Math.ceil(Math.random() * (m - 1) + 1);
      total=total+numero;
      resultado =resultado+"tirada "+(i+1)+": "+(numero)+" "; 
    }
    resultado = resultado+" Total ->"+total;
    return resultado;
}

console.log(tirarDados(numerodeDados,numerodeCaras));


//ejercicio3
function alfaNumerico(){
    let cadena ="";
    let caracter = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890";
    for(i=0;i<=15;i++)
    {
        cadena = cadena+caracter.charAt(Math.random() * (36 - 0) + 0);
    }
    
    return cadena;
}

console.log(alfaNumerico());

//ejercicio4
function validar(cadena){
    let letras="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let numeros="1234567890";
    let caracteres="!#$%&'()*+,-./:;<=>?@^_`~";
    let longuitud=false;
    let mayuscula=false;
    let numero=false;
    let caracter=false;
    let resultado="";
    //comporbar longuitud
    if(cadena.length==8){
        longuitud=true;
    }
    //buscar mayusculas
    for(i=0;i<cadena.length;i++)
    {
        
            if(cadena.charAt(i)==cadena.charAt(i).toUpperCase())
            {
                mayuscula=true;
            }

        
    }
    //buscar numeros
    for(i=0;i<cadena.length;i++)
    {
        for(u=0;u<numeros.length;u++)
        {
            if(cadena.charAt(i)==numeros.charAt(u))
            {
                numero=true;
            }

        }
    }
    //buscar caracteres especiales
      for(i=0;i<cadena.length;i++)
    {
        for(u=0;u<caracteres.length;u++)
        {
            if(cadena.charAt(i)==caracteres.charAt(u))
            {
                caracter=true;
            }

        }
    }

    


    if(longuitud==true && mayuscula==true && numero==true &&caracter==true){
        resultado="Enhorabuena, es una contraseña valida";
    }
    else{
        resultado="Tu contraseña no es valida";
    }

    return resultado;
}

console.log(validar("pAcOpE7#"));

//5

function ordenarCadena(cadena){
let contador =1


}


//6


function decodeRLE(cadena){
    let cadenaDecodificada = "";

    for(let i=0; i<cadena.length; i+=2){
        cadenaDecodificada += cadena[i].repeat(Number(cadena[i+1]));
    }

    return cadenaDecodificada;
}

function luhn(numero){
    let cadenaFinal="";
    for(i=numero.length;i>=0;i-2){
        cadenaFinal=cadenaFinal+(i)
    }
}

*/



let numero = Math.floor(Math.random() * (15 -1) -1);
let luhn = 0;

for(let i = numero.length;i > 0;i--){
  if(numero[i] % 2 ==0){
    if(numero[i] > 9){
      luhn += (numero[i] - 10) + 1;
    }
    else{
       luhn += numero[i];
    };
   
  }
};

console.log(numero);


/*
let numeros = "10 20 30 40 50 60";
let suma = 0;
let resultado = 0;
let array = numeros.split(" ");
let contador = 0;
for(let i = 0; i < array.length;i++){
  suma += Number(array[i]);
  contador ++;
};
resultado = suma / contador;
console.log(resultado);
let mediana = 0;
for(let j = 0; j < array.length;j++){
  if(array.length % 2 == 0){
    mediana = array[array.length/2];
  }
  else{
    mediana = ((array[array.length/2 + 1]) + (array[array.length/2])) / 2;
  };
};
console.log(mediana);*/

