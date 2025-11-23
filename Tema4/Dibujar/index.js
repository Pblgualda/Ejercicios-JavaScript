window.onload = () => {
    

    limpiar();
}

function entra(e) {
    if(e.ctrlKey)
        e.target.style.backgroundColor = "blue";
    else if(e.shiftKey)
        e.target.style.backgroundColor = "white";
    else
    e.target.style.backgroundColor = "red";
}


function limpiar()
{  
    let tr, td;
    let tabla = document.getElementById("miTabla");

    for (i = 0; i < 300; i++) {
        tr = document.createElement("tr");
        tr.addEventListener("mouseover", entra);

        for (j = 0; j < 300; j++) {
            td = document.createElement("td");
            tr.appendChild(td);
        }

        tabla.appendChild(tr);
    }

}





let img = docu