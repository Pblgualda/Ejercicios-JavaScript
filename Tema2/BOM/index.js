var segundos =0;
var miDiv = document.getElementById("reloj");
function info()
{
    let horaActual = new Date();
    document.getElementById("info1").innerHTML = ("Idioma: "+navigator.language);
    document.getElementById("info3").innerHTML = ("Navegador: "+navigator.userAgent);
    document.getElementById("info2").innerHTML = ("Resolucion: "+screen.width+" x "+screen.height);
    document.getElementById("info4").innerHTML = ("Plataforma: "+navigator.platform);
    
}

function navegacion(){
    document.getElementById("nave").innerHTML = window.location.href;
}

function abrir(){
    window.open("https://www.google.com");
}

document.getElementById("resolucionCompleta").innerHTML ="Resolucion " +screen.width+" X "+screen.height;
document.getElementById("area").innerHTML ="Area Disponible "+screen.availWidth +" X "+ screen.availHeight;
document.getElementById("orientacion").innerHTML ="Orientación "+screen.orientation;
document.getElementById("color").innerHTML ="Profundidad de color "+screen.colorDepth;
document.getElementById("pixel").innerHTML ="Profundidad de pixel"+screen.pixelDepth;



info();
navegacion();
