/*
//1

const sum = (num1, num2) => num1 + num2;

sum(40, 2);
sum(42, 0);
console.log("the answer to everything is", sum(42, 0));

//2

const stringLength = str => console.log(`the length of "${str}" is:`, str.length);

//3

const stringLengthh = str => {
    let length = str.length;
    console.log(`the length of "${str}" is:`, length);
    return length;
};

stringLengthh("willynilly");

//4

let alerts = [
  "Hey, you are awesome",
  "You are so wonderful",
  "What a marvel you are",
  "You're so lovely",
  "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"
];

const showAlert = name => 
  alert(alerts[Math.floor(Math.random() * alerts.length)] + `, ${name}!`);

showAlert("you ball of fluff");

//56

const introduce = (nombre, edad) => `Hola soy ${nombre}, I tengo ${edad} años.`;

console.log(introduce("Pablo", 18));

//67

const sumArray = arr => arr.reduce((acc, num) => acc + num, 0);

console.log(sumArray([1, 2, 3, 4, 5]));


function factorial(numero)
{
  numeroFactorial=1;
  for (let i=0;i<numero;i++)
    {
      numeroFactorial*=i;
    }
    return numeroFactorial;
}

console.log(factorial(4));

*/

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

function generateTreasureMap(rows = 5, cols = 5) {
  // Create an empty grid
  const grid = Array.from({ length: rows }, () => Array(cols).fill(0));

  // Fill grid with random clues (each number between 11 and 55)
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const randRow = Math.floor(Math.random() * rows) + 1;
      const randCol = Math.floor(Math.random() * cols) + 1;
      grid[i][j] = randRow * 10 + randCol;
    }
  }

  // Randomly select one cell to be the treasure
  const treasureRow = Math.floor(Math.random() * rows);
  const treasureCol = Math.floor(Math.random() * cols);
  grid[treasureRow][treasureCol] = (treasureRow + 1) * 10 + (treasureCol + 1);

  return grid;
}

// Example usage:
const map = generateTreasureMap(5, 5);
console.table(map);









