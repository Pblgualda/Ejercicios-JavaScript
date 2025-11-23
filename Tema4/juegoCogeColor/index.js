window.onload = () => {
    jugar();
}

function generarColor()
{
    let solucion=document.getElementById("colorin");
    let coloresArray=["rojo","verde","amarillo","azul"];
    let numeroRandom=Math.floor(Math.random() * (3 - 0) + 0);
    let colorAleatorio = coloresArray[numeroRandom];
    solucion.innerHTML="Pulsa el color "+colorAleatorio;
    return colorAleatorio;
    
}
function jugar(){

    let resultado = document.getElementById("resultado");
    let colores = document.getElementById("colores");
    let  = document.getElementById("colores");
    let color;
    let colorAleatorio= generarColor();
    
    console.log("Pulsa el color: "+colorAleatorio);
    colores.addEventListener("click", (e) => {
            color = e.target;
            if(color.id==colorAleatorio)
                {
                    resultado.innerHTML="Has ganado";
                    colorAleatorio= generarColor();
                   //jugar();
                }
            else
                {
                    resultado.innerHTML="Meh, esta mal";
                }
            
            }
        )
    }
