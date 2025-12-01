import { useState } from 'react';
import Item from './Item.jsx';
import Pie from './Pie.jsx';

function ListaCompra()
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
        setListaCompra([...listaCompra,{"nombre":contenido}]);
        setContenido("");
    }

    function actualizarElemento(nuevoContenido,id)
    {
        const nuevoArray = [...listaCompra];
        nuevoArray[id] = {"nombre":nuevoContenido};
        setListaCompra(nuevoArray);
    }

    function eliminarElemento(indice)
    {
        const nuevoArray = [...listaCompra];
        nuevoArray.splice(indice,1);
        setListaCompra(nuevoArray);
    }

    function borrarLista()
    {
        setListaCompra([]);
    }

    let maquetado = listaCompra.map((item,indice)=> <Item key={indice}
            nombre={item.nombre}
            id={indice}
            onNuevoTexto={actualizarElemento}
            onDelete={eliminarElemento}></Item>)

    return (
        <>
            <input value={contenido} onChange={e => setContenido(e.target.value)}></input>
            <button onClick={pulsoBoton}>Añadir</button>
            {maquetado}
            <Pie onClick={borrarLista}></Pie>
        </>
    )
}

export default ListaCompra;