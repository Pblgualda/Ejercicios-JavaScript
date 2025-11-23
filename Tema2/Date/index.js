//Ejercicio 1
let date1 = new Date();
console.log(date1);
//2
let date2 = new Date(2006,11,5);
console.log(date2);
//3
console.log(date2.getFullYear());
console.log(date2.getMonth());
console.log(date2.getDate());
console.log(date2.getDay());
console.log(date2.getHours(),date2.getMinutes(),date2.getSeconds);
//4
console.log(date1.toDateString());
console.log(date1.toTimeString());
//5
let numerdeDias = 10;
let semana = 1000 * 60 * 60 * 24 * numerdeDias;
let date3 = new Date().getTime();

let fechafutura = new Date(date3 + semana);
console.log(fechafutura);

//6
date4 = new Date(2025,11,31).getTime();
console.log((date4-(date1.getTime()))/86400000);
//7
if (date1.getTime()>date2.getTime()){
    console.log("La primera fecha es mas grande");
}
else{
    console.log("La segunda fecha es más pequeña");
}



//8
function primerDiaDelMes(ano, mes) {
  const fecha = new Date(ano, mes, 1);
  const diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  return diasSemana[fecha.getDay()];
}

console.log("Primer día del mes:", primerDiaDelMes(2025, 0));

//9
const ahora = new Date();
console.log(ahora.toISOString());

//10
console.log(ahora.toString());
console.log(ahora.toUTCString());

//11


//12
const fecha = new Date();
console.log(new Intl.DateTimeFormat("es-ES", { dateStyle: "full", timeStyle: "long" }).format(fecha));
console.log(new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "long" }).format(fecha));
console.log(new Intl.DateTimeFormat("ja-JP", { dateStyle: "full", timeStyle: "long" }).format(fecha));

//13
function cuentaAtrasAnoNuevo() {
  const ahora = new Date();
  const proximoAno = ahora.getFullYear() + 1;
  const anoNuevo = new Date(proximoAno, 0, 1);

  const diferencia = anoNuevo - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  console.log(`Faltan ${dias}d ${horas}h ${minutos}m ${segundos}s`);
}

cuentaAtrasAnoNuevo();

//14 encontrar viernes 13

function encuentraViernes13 (){
  let resultado = new Date();
  let encontrado = false;

  while(!encontrado)
    {
      if(resultado.getDay()==5 && resultado.getDate() ==13){
        encontrado=true;
      }
      else
        resultado.setDate(resultado.getDate()+1);

    }

    return resultado;
}

console.log(encuentraViernes13());

