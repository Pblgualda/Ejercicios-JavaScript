import { useState } from "react";

export default function Saludo({nombre}){
    return(
        <>
        <img src="https://media.tenor.com/v7RYPINuR24AAAAe/hola-homero-simpson.png" class="hola" alt="holaHomer"/>
            <h2>Hola, {nombre}</h2>
        </>
    )
}