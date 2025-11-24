datosMaquetar = {
  "colors": [
    {
      "color": "black",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,255,1],
        "hex": "#000"
      }
    },
    {
      "color": "white",
      "category": "value",
      "code": {
        "rgba": [0,0,0,1],
        "hex": "#FFF"
      }
    },
    {
      "color": "red",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,0,0,1],
        "hex": "rgba(236, 0, 0, 1)"
      }
    },
    {
      "color": "blue",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [0,0,255,1],
        "hex": "#00F"
      }
    },
    {
      "color": "yellow",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,0,1],
        "hex": "#FF0"
      }
    },
    {
      "color": "green",
      "category": "hue",
      "type": "secondary",
      "code": {
        "rgba": [0,255,0,1],
        "hex": "#0F0"
      }
    }
  ]
}





window.onload = ()=>
    {
        cont = document.getElementById("contenedor")
        for(color of datosMaquetar.colors)
        {
            miDiv = document.createElement("div");
            miDiv.style.backgroundColor = color.code.hex;
            if(color.color=="black"||color.color=="blue")
                {
                     miDiv.style.color = "white";
                }
            miheader=document.createElement("h2");
            myCategoria=document.createElement("h3");
            myType=document.createElement("h3");
            myRGB=document.createElement("h3");
            myHex=document.createElement("h3");
            miheader.textContent = color.color;
            myCategoria.textContent = color.category;
            myType.textContent = color.type;
            myRGB.textContent = "RGB("+color.code.rgba+")";
            myHex.textContent = "Hex("+color.code.hex+")";

            miDiv.appendChild(miheader);
            miDiv.appendChild(myCategoria);
            miDiv.appendChild(myType);
            miDiv.appendChild(myRGB);
            miDiv.appendChild(myHex);
            cont.appendChild(miDiv);

        }
    }