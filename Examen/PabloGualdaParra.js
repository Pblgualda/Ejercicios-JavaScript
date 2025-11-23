//--
//Ejercicio 1
//--

function ejercicio1(cadena)
{
    let nVocales=0;
    let letraActual="";
    let solucion;
    for(let i=0;i<=cadena.length;i++)
        {
            letraActual=cadena.substring(i,i+1);
            if(letraActual.toUpperCase()=="A"||
            letraActual.toUpperCase()=="E"||letraActual.toUpperCase()=="I"||
            letraActual.toUpperCase()=="O"||
            letraActual.toUpperCase()=="U")
                {
                    nVocales++;
                }               
        }

        solucion="Hay "+nVocales+" vocales";
        
        return solucion;
}

//console.log(ejercicio1("ppppppppIOUapppeiopppu"));

//--
//Ejercicio2
//--

function ejercicio2 (numeroIntervalo = 100)
{
    for(let i=1;i<=numeroIntervalo;i++)
        {
            if(i%5==0&&i%3==0)
                {
                    console.log("Div3 + Div5");
                }
            else if(i%5==0)
                {
                    console.log("Div 5;")
                }
                
            else if(i%3==0)
                {
                    console.log("Div 3;")
                }
            
            else
                {
                    console.log(i);
                }
        }
}

ejercicio2();

//--
//Ejercicio 3
//--

function ejercicio3(cadenaTexto)
{
    //tengo que ir contando los parentesis que voy abriendo y a esos le tengo que restar los que cierran
    //al final me tiene que dar cero
    //y si en algun momento me da negativo quiere decir que se ha cerrado un parentesis de más,asi que si el balance en algun momento da -1
    //quiere decir que esta mal
    let balance=0;
    let cierresBien=true;
    caracterActual="";
    //primero compruebo que hay el mismo numero de "(" que de ")"
    for(let i=0;i<=cadenaTexto.length;i++)
        {
            if(cierresBien==true)
            {
                caracterActual=cadenaTexto.substring(i,i+1);
                if(caracterActual=="(")
                    {
                        balance=balance+1;
                    }
                else if(caracterActual==")")
                    {
                        balance=balance-1;
                    } 
                if(balance<0)
                    {
                        cierresBien=false;
                    }
            }
        }
        //ahora controlo que una vez terminado, el balance sea 0 (es decir que no queda algun parentesis por cerrar)
        if(balance>0)
            {
                cierresBien=false;
            }
        
        return cierresBien;
}

//console.log(ejercicio3("((()))"));


//--
//Ejercicio 4
//--


function ejercicio4(minutos)
{
    let segundos=59;
    minutosCuentaAtras=minutos;
    //MM:SS
    intervalo = setInterval(()=>
    {
    segundos=segundos-1
    if(segundos==-1)
        {
            minutosCuentaAtras--;
            segundos=59;
        }
    if(minutosCuentaAtras==-1)
        {
            clearInterval(intervalo);
            console.log("La cuenta atras ha terminado");
        }
    else{
            console.log((minutosCuentaAtras<10 ? "0"+minutosCuentaAtras : minutosCuentaAtras)+
            ":"+((segundos)<10 ? "0"+segundos : segundos));
        }

    },1000);
}

//ejercicio4(1);

//--
//Ejercicio 5
//--

function ejercicio5(arrayFechas)
{
    let fechaMenor=arrayFechas[0];
    fechaActualEnMilisegundos=0;
    fechaActual="";
    arrayFechas.forEach(fecha => {
        //pasar fecha actual milisegundos
        //MiliSegundos,Segundos,Minutos,Horas=Dia
        //MiliSegundos,Segundos,Minutos,Horas,Dia,Semana=Mes
        //MiliSegundos,Segundos,Minutos,Horas,Dia,Semana,Mes,Año
        fechaActualEnMilisegundos=
        ((Number(fecha.substring(0,1)))*1000*60*60*24)+
        ((Number(fecha.substring(3,4)))*1000*60*60*24*7*4)+
        ((Number(fecha.substring(6,9)))*1000*60*60*24*7*4*12);

        //comparar la fecha más pequeña hasta el momento en milisegundos con la actual
        if(fechaActualEnMilisegundos<((Number(fechaMenor.substring(0,1)))*1000*60*60*24)+
        ((Number(fechaMenor.substring(3,4)))*1000*60*60*24*7*4)+
        ((Number(fechaMenor.substring(6,9)))*1000*60*60*24*7*4*12))
        {
            fechaMenor=fecha;
        }
    });
        return fechaMenor;
}

//console.log(ejercicio5(["01/03/2006","02/05/2019","10/12/2008"]));

//ejercicio 6

function ejercicio6(inventario,categoria="")
{
    let valorInventario=0;
    if (categoria=="")
    {
        inventario.forEach(producto => 
        {
            valorInventario = valorInventario+(producto.precio*producto.stock);

        });

    }
    else
    {
        inventario.forEach(producto => 
        {
            if(categoria==producto.categoria)
            {
                valorInventario = valorInventario+(producto.precio*producto.stock);
            }
        });
    }
    return valorInventario;
}

/*let productos = 
[
 { id: 1, nombre: "Laptop Gamer", categoria: "Electrónica", precio: 1500, stock: 10 }, //15000
 { id: 2, nombre: "Silla de Oficina Ergonómica", categoria: "Hogar", precio: 250, stock: 20 },//5000
 { id: 3, nombre: "Libro 'Clean Code'", categoria: "Libros", precio: 45, stock: 50 }//2250
];

*/
//console.log(ejercicio6(productos));


//ejercicio 7

class Cuenta{
    titular;
    saldo;
    constructor(titular,saldo=0)
    {
        this.titular=titular;
        this.saldo=saldo;
    }

    depositar(cantidad)
    {
        this.saldo=this.saldo+cantidad;
    }

    retirar(cantidad)
    {
        let posible = true
        if(this.saldo-cantidad>=0)
            {
                this.saldo=this.saldo-cantidad;
            }
        else
            {
                posible=false;
            }
        return posible;
    }
}

class CuentaCorriente extends Cuenta
{
    limiteDeCredito;
    constructor(titular,saldo=0,limiteDeCredito)
    {
        super(titular,saldo);
        this.limiteDeCredito=limiteDeCredito;
    }

    retirar(cantidad)
    {
        let posible = true
        if((this.saldo-cantidad)+this.limiteDeCredito>=0)
            {
                this.saldo=this.saldo-cantidad;
            }
        else
            {
                posible=false;
            }
        return posible;
    }
}

class CuentaAhorro extends Cuenta
{
    interes;
    constructor(titular,saldo=0,interes)
    {
        super(titular,saldo);
        this.interes=interes;
    }

    aplicarInteres()
    {
        this.saldo=(this.saldo*this.interes);
    }

}

//bloque para probar
/*
    let cuenta1 = new CuentaCorriente("PepeDomingo",1200,100);
    cuenta1.retirar(100);
    let cuenta2 = new CuentaAhorro("PepeSebastian",1200,10);
    cuenta2.aplicarInteres();
    cuenta1.depositar(33);
    cuenta2.depositar(33);
*/







