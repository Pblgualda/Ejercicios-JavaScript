//musica

//Baraja de Valores:
var cartas =["mario","mario","luigi","luigi","nube","nube","champinon","champinon","flor","flor","estrella","estrella"];
var numAleatorio;
var baraja=["","","","","","","","","","","",""];
//en esta baraja guardo las cartas correctas por si el usuario es gilipollas y la pone dos veces
var parejasHechas= ["","","","","",""];
//el div "cartas"
var imagenes;
//la carta a crear
var nuevoHijo;
//al pulsar una cartºa
var cartaActual;
var cartaAnterior;
var PrimeraCartaPulsada=false;
var parejaSacada=false;
var bloqueado=false;
var pulsada;
var cuentaAtrasenMarcha=false;
var tiempo;
var timeOut=false;
var contador=0;
//variables del contador
var segundos=30;
window.onload = ()=>{
    const musica = new Audio("sound/musica.mp3");
    musica.play();
    imagenes = document.getElementById("cartas");
    tiempo = document.getElementById("Time");
    //al hacer click en una imagen
    imagenes.addEventListener("click", (e)=>{
    if(timeOut==false)
    {
     if(!cuentaAtrasenMarcha)
        {
            cronometro = setInterval(restarSegundo, 1000);
            cuentaAtrasenMarcha=true;
        }   
        if(!parejasHechas.includes(e.target))
        {  
            if(!bloqueado)
            {   
                cartaActual=e.target;
                if(PrimeraCartaPulsada==false)
                {
                    cartaActual.src="img/"+baraja[cartaActual.id]+".png";
                    pulsada=cartaActual;
                    cartaAnterior=cartaActual;
                    PrimeraCartaPulsada=true;
                }
                else
                {
                    if(e.target!=pulsada)
                    {
                        bloqueado=true;
                        cartaActual.src="img/"+baraja[cartaActual.id]+".png";
                        if(baraja[cartaActual.id]==baraja[cartaAnterior.id])
                        {
                            parejasHechas.push(cartaActual);
                            parejasHechas.push(cartaAnterior);
                            contador=contador+1;
                            setTimeout(() => {
                                PrimeraCartaPulsada=false;
                                cartaActual=null;
                                cartaAnterior=null;
                                bloqueado=false;
                                pulsada=null;
                            }, 1000); 
                        }
                    else
                    {
                        setTimeout(() => {
                            cartaActual.src="img/carta.png";
                            cartaAnterior.src="img/carta.png";
                            PrimeraCartaPulsada=false;
                            cartaActual=null;
                            cartaAnterior=null;
                            bloqueado=false;
                            pulsada=null;
                        }, 1000);      
                    }
                }

            }
                
                
            }
        }
    }

    })
    
    generarCartas();

    
}

function generarCartas()
{
    //barajar
    cartas.forEach(carta => {
    //elegir la carta actual y ponerla en una posicion aleatoria
    do
    {
        numAleatorio=Math.floor(Math.random() * 12) + 0;
    }
        while(!baraja[numAleatorio]=="");
        baraja[numAleatorio]=carta;

        
    });
}

function restarSegundo()
{
    segundos =segundos-1;
    tiempo.innerHTML = segundos;
    if(segundos<=0)
        {
            clearInterval(cronometro);
            timeOut=true;
            tiempo.innerHTML="TIME OUT";
            cartas.forEach(carta => 
            {
                carta.src="img/carta.png"; 
            });
        }
        if(contador==6)
        {
            clearInterval(cronometro);
            tiempo.innerHTML="Has Ganado";
        }
}




/*
window.onload = () => {
    var lista = document.getElementById("lista");
    var opciones = document.getElementsByTagName("li");

    var mibtn = document.getElementById("miBtn");
    let nuevoLi = document.createElement("li");

    mibtn.addEventListener("click",()=>{
        let contenidoInput = document.getElementById("input").value;
        let nuevoLi = document.createElement("li");
        nuevoLi.innerHTML = contenidoInput;
        lista.appendChild(nuevoLi);

        document.getElementById("input").value = "";

    })

    var mibtnBorrar = document.getElementById("mibtnBorrar");
    lista.addEventListener("click", (e)=>{

        if(confirm("¿Seguro que deseas borrar la entrada "+e.target.innerHTML+"?")){
            lista.removeChild(e.target);
        }
    })
}

*/