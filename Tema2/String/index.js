let cadena1 = "JavaScript";
console.log(cadena1.length);

//2

let cadena2 = "Hola mundo";
console.log(cadena2.charAt(0)+cadena2.charAt(cadena2.length-1));

//3

cadena3 = "Programar es divertido";

console.log(cadena3.toUpperCase());

console.log(cadena3.toLowerCase());

//4

cadena41="Hola ";
cadena42="Mundo";
console.log(cadena41+cadena42);
console.log(cadena41.concat(cadena42));

//5
console.log(cadena2.indexOf("o"));
console.log(cadena2.lastIndexOf("o"));

//6
let cadena5 = "JavaScript es genial";
console.log(cadena5.substring(0,10));
console.log(cadena5.substring(13));

//7
let cadena6 = "el perro corre rapido";
cadena6 = cadena6.replace("perro","gato");
console.log(cadena6);

//8
let cadena7 = "Frotend Developer";
console.log(cadena7.includes("end"));
console.log(cadena7.startsWith("Front"));
console.log(cadena7.endsWith("endsWith"));

//9

let array =string.split(",");
console.log();

//10
cadena9="Hola";
console.log(cadena9.repeat(5));

//11
cadena11="   Hola mundo   "
console.log(cadena11.trim(""));

//12
let cadena12="7";
console.log(cadena12.padStart(3,0));

//13
let cadena13="Mimemamomu";
let numeroDeVocales=0;
for(i=0;i<=cadena13.length;i++){
    if ((cadena13.charAt(i)=="a")||(cadena13.charAt(i)=="e")||(cadena13.charAt(i)=="i")||(cadena13.charAt(i)=="o")||(cadena13.charAt(i)=="u")){
        numeroDeVocales++;
    }

}
console.log(numeroDeVocales);

//14
let radar="radar";
let inverso="";
for(i=radar.length;i>=0;i--){
    inverso=inverso+inverso.charAt(i);
    if (radar==inverso) return true;
}
console.log(inverso);
//15