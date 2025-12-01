var peticionEnCurso;

function maquetarPelis(peliculas)
{
    for(let peli of peliculas){
      
      var contenedor = document.getElementById("contenedor");
      miDiv = document.createElement("div");
      miDiv.addEventListener("click",(e)=>LanzaPeticionDetalle(peli.imdbID))       
      texto = document.createElement("h2");
      img = document.createElement("img");
      
      img.src = peli.Poster; 
      texto.textContent = peli.Title;

      miDiv.appendChild(img);
      miDiv.appendChild(texto);
      contenedor.appendChild(miDiv);

    }
}

function maquetarDetalles(id)
{
      humo = document.createElement("section"); 
      humo.id="humo";
      miPeli = document.createElement("div");
      //miPeli.addEventListener("click",(e)=>LanzaPeticionDetalle(peli.imdbID))       
      titulo = document.createElement("h3");
      img = document.createElement("img");
      img.src = id.Poster; 
      titulo.textContent = id.Title;
      miPeli.id="detalles";
      duracion = document.createElement("p");
      duracion.textContent =
      derecha = document.createElement("div");
      derecha.id ="divDerecha";
      ano = document.createElement("p");
      miPeli.appendChild(img);
      miPeli.appendChild(titulo);
      derecha.appendChild(ano);
      derecha.appendChild(duracion)
      contenedor.appendChild(miPeli);
      contenedor.appendChild(humo);
}

function LanzaPeticion(url){

    if(!peticionEnCurso)
    {
        peticionEnCurso=true;
        fetch(url).then(response => response.json()).then(data => {
        maquetarPelis(data.Search);
        contador++;
        peticionEnCurso=false;
        
    })
}
}

function LanzaPeticionDetalle(id){
   console.log(id);
    fetch("https://www.omdbapi.com/?i="+id+"&apikey=8cadea28").then(response => response.json()).then(data => {
        maquetarDetalles(data);
        //contador++;
    })
}


window.onload = () => 
{
    cat = document.getElementById("categoria");
    botonInicio = document.getElementById("BotonInicio");
    vistaB = document.getElementById("vistaBuscador");
    vistaI = document.getElementById("PaginaInicio");
    peticionEnCurso = false;
    contenedor = document.getElementById("contenedor");
    pelicula = document.getElementById("busqueda");
    buscar = document.getElementById("btnBuscar");

    botonInicio.addEventListener("click", () => {
        vistaI.style.visibility = "hidden";
        vistaB.style.visibility = "visible";
    })


    document.addEventListener("click", (e) =>{
        if(e.target != miPeli)
            {
                miPeli.remove();
                humo.remove();
            }
    })
    buscar.addEventListener("click", ()  => {
        peticionEnCurso=false;
        contenedor.innerHTML = " ";
        //contador = 2;
        if(cat.value=="cualquiera"){
            categoria = "";
        }else if(cat.value == "pelicula"){
            categoria = "&type=movie";
        }else if(cat.value == "serie"){
            categoria = "&type=series";
        }
        LanzaPeticion("https://www.omdbapi.com/?s="+pelicula.value+categoria+"&apikey=ea005db6&page=1");
           
    })

    busqueda.addEventListener("keyup", ()  => {
      peticionEnCurso=false;  
      if(busqueda.value.length>=3)
      {
        contenedor.innerHTML = " ";
        contador = 2;
        contador = 2;
        if(cat.value=="cualquiera"){
            categoria = "";
        }else if(cat.value == "pelicula"){
            categoria = "&type=movie";
        }else if(cat.value == "serie"){
            categoria = "&type=series";
        }
        LanzaPeticion("https://www.omdbapi.com/?s="+pelicula.value+categoria+"&apikey=ea005db6&page=1");
             
      }
      else
        {
            contenedor.innerHTML=" ";
        }
    })
    

}

var contador = 2;

window.onscroll = () =>{
    let diferencia = (window.innerHeight + scrollY >= document.body.offsetHeight - 180);
    console.log(diferencia);
    if(diferencia)
        {
            LanzaPeticion("https://www.omdbapi.com/?s=" + pelicula.value +"&apikey=8cadea28&page="+contador);
            //contador++;
        }
}


window.onload = ()=>
{
    var listaNotas = localStorage.getItem("listaNotas");
    

}