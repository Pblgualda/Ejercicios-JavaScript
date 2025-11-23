//10

for(var i=1;i<=6;i++)
{
document.write("<h"+i+">cabecera "+i+"</"+i+">");
}

document.writeln("<h2>Tablas de MUltiplicar</h2>");
//tabla

for(let i=0;i<=10;i++){
    document.write("Tabla del "+i+"<br>");
    for(let u=0;u<=10;u++){
        document.writeln(i+"x"+u+"="+i*u+"<br>");
    }
}
