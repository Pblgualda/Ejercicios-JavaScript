window.onload=()=>{
    
    circulojuego();   
}

function circulojuego(){
    let circulo=document.getElementById("circulo");
    let solucion=document.getElementById("solucion");
    let tiempo=Math.floor((Math.random()*(5-2) )+2)*1000;

    let resultado=false;
    let click=false;
    circulo.style.backgroundColor="grey";
    solucion.innerHTML="";



    setTimeout(() => {
        circulo.style.backgroundColor="red";
        click=true;
  
    }, (tiempo));


    circulo.addEventListener("click",(e)=>{
        if(click){
            solucion.innerHTML="bien"
        }
        else{
            solucion.innerHTML="mal"
        } 

    })

}