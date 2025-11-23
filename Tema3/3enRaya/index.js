class TresEnRaya{
    tablero;
    turnoJugador;
    constructor()
    {
       this.reiniciaPartida();
    }

    mueveJ1(cX,cY)
    {
        return this.mueve(cX,cY,1);
    }
    mueveJ2(cX,cY)
    {
        return this.mueve(cX,cY,-1);
    }
    
    //Devuelve:
    //0 si el movimiento se ejecuta
    //1 si la casilla esta ocupada
    //2 si no es el turno del jugador
    //3 si con ese movimiento el jugador gana
    //4 empate
    
    mueve(cx,cy)
    {
        let retornable=0;
        //celda vacia
        if(this.tablero[cx][cy]=="0")
            {
                //comprobar si es su turno
                if(jugador == this.turnoJugador)
                {
                    this.tablero[cx][cy] = jugador;
                    this.turnoJugador = this.jugador*-1
                }
                //comprobar si el jugador gana
                    if(this.comprobarVictoria()==0)
                    {
                        //el juego sigue, no hay combinacion ganadora aun
                    }
                    else if(this.comprobarVictoria()==1)
                    {
                        //gana el jugador 1
                    }
                    else if(this.comprobarVictoria()==-1)
                    {
                        //gana el jugador 2
                    }
                
                
                      
            }
        else
            {
                retornable=1;
            }
            
    }


    reiniciaPartida()
    {
        this.tablero= new Array(3);
        for(fila of this.tablero)
        {
            fila = new Array(3);
            fila[0] =0;
            fila[1] =0;
            fila[2] =0;
        }

        //1= turnoj1 -1=turnoJ2
        this.turnoJugador = this.jugador1;
    }

    comprobarVictoria()
    {
        //valor inicial es 0, en caso de que de 0, no habra ninguna combinacion ganadora(todavia)
        //si devuelve 1, el jugador 1 ganara
        //si devuelve -1, el jugador 2 ganara
        //comprobar la diagonal especial
        if((this.tablero[0][2]!=0)
            &&(this.tablero[0][2]==this.tablero[1][1])
            &&(this.tablero[0][2]==this.tablero[2][0]))
            {
                return this.tablero[0][0]; 
            }
        //comprobar todas las filas
        for(let i=0;i<3;i++){
            if(this.tablero[i][0]!=0)
            {

            if((this.tablero[i][0]==this.tablero[i][1])&&(this.tablero[i][0]==this.tablero[i][2]))
                {
                    return this.tablero[i][0]; 
                }
            }
        }
        //comprobar todas las columnas
        for(let i=0;i<3;i++){
            if(this.tablero[0][i]!=0)
            {
            if((this.tablero[0][i]==this.tablero[1][i])&&(this.tablero[0][i]==this.tablero[2][i]))
                {
                    return this.tablero[0][i]; 
                }
            }
        }
        //comprobar todas la primera diagonal de 00 a 22
          if((this.tablero[0][0]!=0)
            &&(this.tablero[0][0]==this.tablero[1][1])
            &&(this.tablero[1][1]==this.tablero[2][2]))
            {
                return this.tablero[0][0]; 
            }
    }


}


juego = new TresEnRaya();