let mapa=[[34,21,32,41,25],
[14,42,43,14,31],
[54,45,52,42,23],
[33,15,51,31,35],
[21,52,33,13,23]];

function jugarMapadelTesoro(mapa)
{
  solucionado=false;
  let fila=0;
  let columna=0;
  let posicionActual=mapa[0][0];
  console.log(mapa[0][0]);
  while(solucionado==false)
  {
  
    fila=Number((posicionActual.toString()[0]));
    columna=Number((posicionActual.toString()[1]));
    //Compruebo si el contenido de la posicionActual es igual al de la proxima posicion
    if(mapa[fila-1][columna-1]==posicionActual)
      {
          solucionado=true;
      }
    else
      {
        posicionActual=mapa[fila-1][columna-1];
      }
      console.log(posicionActual);
      
  }
  console.log("El juego ha terminado");

}


/*
jugarMapadelTesoro(mapa);
console.log(mapa);


//
//ejercicio4
//

function mapaDelTesoro(dimensiones)
{
  //Generar la matriz con las dimensiones especificadas
  let matriz = [];

  for (let i = 0; i < dimensiones-1; i++) 
  {
    for (let j = 0; j < dimensiones-1; j++) 
      {
      matriz[i][j] = [];
    }
  }

  let fila = Math.random() * (dimensiones - 1) + 1;
  let columna = Math.random() * (dimensiones - 1) + 1;
  let anterior =(fila*10)+columna;
  matriz[fila-1][columna-1] = (fila*10)+(columna);
  for(let i=0;i<=dimensiones;i++)
    {
      do
      {
        if(fila+columna!=0)
        {
        matriz[fila-1][columna-1]=anterior;
        anterior =(fila*10)+columna;
        fila = Math.random() * (dimensiones - 1) + 1;
        columna = Math.random() * (dimensiones - 1) + 1;
        }
      }
      while(matriz[fila-1][columna-1]!=null);

      
      return matriz;
    }
}



  let arrayMapa2 = mapaDelTesoro(5);
  console.log(arrayMapa2);
*/
