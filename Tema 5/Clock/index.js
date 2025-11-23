var minutos =0;
var segundos=0;
var pausa=false;
var texto;
var intervalo;


    window.onload = () => {
    texto = document.getElementById("clock");
    let start = document.getElementById("Start");
    let stop = document.getElementById("Stop");
    let reset = document.getElementById("Reset");


    start.addEventListener("click",() => {
        if (!intervalo){
        intervalo = setInterval(tiempo,1000);
        }

    })
    stop.addEventListener("click",() => {
        clearInterval(intervalo);
        intervalo=null;
    })

    reset.addEventListener("click",()=> {
        clearInterval(intervalo);
        intervalo=null;
        minutos=0;
        segundos=0;
        mostrarTiempo();

    }
    )
}
    function tiempo()
    {   
    
            if(segundos==59)
                {
                    minutos++;
                    segundos=0;
                }
            else
            {
                segundos++;
            }

            mostrarTiempo();

    }


    function mostrarTiempo()
    {
        texto.innerHTML=(minutos<10 ? "0"+minutos : minutos)+":"+((segundos)<10 ? "0"+segundos : segundos);
    }