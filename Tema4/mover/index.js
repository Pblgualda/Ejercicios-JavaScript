window.onload = () => {

    let img;
    let imagenes = document.getElementById("imagenes");
    let clickado = false;
    let difX, difY;

    imagenes.addEventListener("click", (e) => {
        if (!clickado) {
            img = e.target;
            // es la primera vez que clickan la imagen, tengo que arrastrarla
            clickado = true;
            difX= e.clientX - img.offsetLeft;
            difY= e.clientY - img.offsetTop;
            
        } else {
            clickado = false;
        }
    });

    document.addEventListener("mousemove", (e) => {
        // obtengo la posición del ratón continuamente
        if (clickado) {
            // muevo la imagen -> cambio su posición en sus estilos -> img.style
            console.log("Han clickado la imagen y su en sus estilos la pos es:", e.clientX, e.clientY);
            img.style.top = (e.clientY-difY) + "px";
            img.style.left = (e.clientX-difX) + "px";
            img.style.position = "absolute"; // necesario para moverla correctamente
        }
    });
};
