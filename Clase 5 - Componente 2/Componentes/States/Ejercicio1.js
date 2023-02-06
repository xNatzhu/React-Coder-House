import React, {useState} from "react";

/*Crea un componente que registre que cantidad de veces lo clickeamos, y lo muestre en pantalla en conjunto con la fecha/hora de ultimo click, usando la libreria Date de JS.*/

export default function EjercicioUno(props) {
    let a = "hola mundo";
    console.log(a)

    const[clickCount, setClickCount] = useState(0)
    const[dataClick, setDataClick] = useState()
    const addClick = ()=>{
        setClickCount(clickCount + 1)
        setDataClick(new Date().toLocaleString()) // creo  la clase de new data para importar sus metodos. y llamo el metodo
        /*El estado de hooks vamos utilizar uno para el nombre del estado, que este va permitir llamar en el jxs.
        Y el otro va ser la funcioncion que lo va modificar.
        */
    }
    return(
        <div>
            <h1>Ejercicio practico de estados - hooks</h1>
            <p>{clickCount}</p>
            <p>Horario del ultimo click: {dataClick}</p>
            <button onClick={addClick}>Realizar click</button>
            
        </div>
    );
}