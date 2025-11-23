//Variables

var miBola;
var velocidadY = 10;
var velocidadX = 10;
var posicionYBola = 430;
var posicionXBola = 250;
var miIntervalo;
var posicionXbarra = 220;
var empezar;
var bloques;
var bloqueAlto,bloqueAncho,bloqueX,bloqueY,rect;
var clickado = true;
var vidas;
var vidnum = 3;
var botones = document.getElementById("botones");
var restart;

window.onload = () => {
    miBola = document.getElementById("bola");
    empezar = document.getElementById("start");
    bloques = document.getElementsByClassName("bloque");
    vidas = document.getElementById("vidas");
    botones = document.getElementById("botones");

    empezar.addEventListener("click",() => {
        if(clickado){
            animaJuego();
            clickado = false;   
        }
    })

    var miBarra = document.getElementById("barra");
    document.addEventListener("keydown",(e)=>{
        if(e.key == "ArrowRight" && posicionXbarra < 420){
            posicionXbarra += 10;
            miBarra.style.marginLeft = posicionXbarra+"px";
        }

        if(e.key == "ArrowLeft" && posicionXbarra > 0){
            posicionXbarra -= 10;
            miBarra.style.marginLeft = posicionXbarra+"px";
        }

    });
}

function animaJuego(){
    miIntervalo = setInterval(()=>{
        mostrarVidas();
        posicionYBola += velocidadY;
        miBola.style.marginTop = posicionYBola+"px"; 

        posicionXBola += velocidadX;
        miBola.style.marginLeft = posicionXBola+"px";

        if(posicionYBola <= 0){
             velocidadY *= -1;

        }
        else if(posicionYBola >= 500){
            velocidadY *= -1;
        }

        if(posicionYBola > 430 && posicionYBola < 450 && posicionXBola>=posicionXbarra-50 && posicionXBola <= posicionXbarra+80)
            velocidadY *= -1;

        if(posicionXBola >= 500 || posicionXBola <= 0){
            velocidadX *= -1;
        }

        if(posicionYBola >= 500){
            vidnum --;
        }

        if(vidnum <= 0){
            vidas.innerHTML = "Has perdido";
            clearInterval(miIntervalo);
        }

        romperBloques();

    },30);
}


function romperBloques(){
            for(bloque of bloques){
                rect = bloque.getBoundingClientRect();  

                bloqueX = rect.left;
                bloqueY = rect.top;
                bloqueAncho = rect.width;
                bloqueAlto = rect.height;

                
                if (
                    posicionXBola > bloqueX &&
                    posicionXBola < (bloqueX + bloqueAncho) &&
                    posicionYBola >= bloqueY &&
                    posicionYBola < (bloqueY + bloqueAlto)
                ) {
                    velocidadY *= -1;

                    bloque.remove();

                    if(bloques.length == 0){
                        vidas.innerHTML = "has ganado";
                        clearInterval(miIntervalo);
                       
                    }
                }
            };

    }

function mostrarVidas(){
    vidas.innerHTML = "Vidas" + vidnum;
}