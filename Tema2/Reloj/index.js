var segundos =0;
var miDiv = document.getElementById("reloj");
function actualizar()
{
    let horaActual = new Date();
    miDiv.innerHTML = (horaActual.getHours() + ":" + horaActual.getMinutes()+ ":"+horaActual.getSeconds()+"<br>"+ new Intl.DateTimeFormat("es-ES").format(horaActual));
    //console.log(horaActual.getHours() + ":" + horaActual.getMinutes()+ ":"+horaActual.getSeconds());
}

actualizar();
setInterval(actualizar,1000);