import { useState } from 'react';
import Item from './Item.jsx';
import Pie from './Pie.jsx';

export default function ListaCompra()
{


    let datosInicialesPrueba = { "items":[
        {
            "nombre":"manzana",
            "cantidad":"3"
        },
        {
            "nombre":"pan",
            "cantidad":"2"
        }

    ]

    }
    const [listaCompra,setListaCompra] = useState(datosInicialesPrueba.items);
    const [contenido,setContenido] = useState("");

    function pulsoBoton()
    {
        setListaCompra([...listaCompra,contenido]);
        setContenido("");
    }

    function actualizarElemento(nuevoContenido,id)
    {
        const nuevoArray = [...listaCompra];
        nuevoArray[id] = nuevoContenido;
        setListaCompra(nuevoArray);
    }

    function eliminarElemento(indice)
    {
        const nuevoArray = [...listaCompra] 
        elemento = listaCompra.splice(indice,1);
    }

    function borrarLista()
    {
        setListaCompra([]);
    }

    let actualizado = datosInicialesPrueba.map((item,indice)=> <Item key={indice}
            nombre={item.nombre}
            id={indice}
            onNuevoTexto={actualizarElemento}
            onDelete={eliminarElemento}></Item>)

    return (
        <>
            <input value={contenido} onChange={e => setContenido(e.target.value)}></input>
            <button onClick={pulsoBoton}>Añadir</button>
            {actualizado}
            <Pie onClick={borrarLista}></Pie>
        </>
    )
}