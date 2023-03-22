import React, {useState, useEffect} from "react";


export default function UseEffect(props) {

    const[clickCount, setClickCount] = useState(0)
    const addClick = ()=>{
        setClickCount(clickCount + 1)
    }

    useEffect(()=>{
        console.log("Ciclo de vida: Montaje - HookEffect");
    },[])
    
    useEffect(()=>{
        console.log("Ciclo de vida: Actualizacion - HookEffect");
    })

    
    useEffect(()=>{
        console.log("Ciclo de vida: Actualizacion PERO SOLAMENTE CUANDO CAMBIE O SE EJECUTE COUNT- HookEffect ");
    },[clickCount])


    useEffect(()=>{
        return()=>{
            console.log("Ciclo de vida: Desmontaje - HookEffect");}
            /*Por ejemplo tenemos que borrar un componente, o un elemento ya sea porque lo queremos ocultar, o porque queremos que salga una noti y luego desaparezca para eso lo hacemos 
            con el user effect es una de sus funcionalides aunque tambien se podria hacer de forma clasifica con condiciones pero de esta manera seria sin. 
            
            Si llegamos agregar un evento en los hooks effect recordar desmontarlo ya que sino va quedar escuchando el evento seguido. Esto se lo denomina "CLEANUPS".
            
            */
    })




    /*
    
    useEffect(()=>{
        console.log("¡HURRA SOY UN HOOKS EFFECT");
    })
    
    1. Primero se agrega el useEffect() -> ya que es un metodo y lo llamamos como una funcion.
    
    2. como segundo paso se crea dentro del metodo una arrow function. De esta manaera se podra ejecutar el useEffect.
    
    3. El hook de efecto puede cumplir los tres ciclos de vida, montaje significa que cuando se ejecuta el componente

    actualizacion cuando se va actualizando por medio de eventos, state, ect.

    o cuando se concluye el componente.

    
    IMPORTANTE

    4. El useEffect se le puede pasar parametros para que se ejecute cuando cierta tipo de condicion dio true.

    Ejemplo:

       useEffect(()=>{
        console.log("Soy un hook de efecto.");
    }[clickCount])

    el [] nos permite brindarle un segundo parametro que le pasaremos a este metodo para que pueda funcionar, en este caso cuando el clickCount funcione.
    
    ->En el segundo parametro se puede añadir la cantidad parametros que uno quiera para que funcione ejemplo [state1, state2]
    

    TIPOS DE USO

    1. CUANDO CARGAMOS UNA API, POR EJEMPLO SOLAMENTE QUEREMOS QUE CARGUE UNA VEZ LA INFORMACION, PARA ESO HAREMOS UN HOOK EFECT DE MONTAJE.

    2. Tengo un elemento que se encuentra en un estado, y quiero modificar esa informacion se puede realizar.

    3. Se podria utilizar cuando los jugadores elijen los equipos y se vayan quitando esos equipos.



    */



    return(
        <div>
            <h1>DEFINICION DE HOOKS EFFECTS</h1>
            <p>{clickCount}</p>
            <button onClick={addClick}>Realizar click</button>
            
        </div>
    );
}


/*

HOOK DE EFECTO -> USEEFFECT

El funcionamiento de el hook de efect sirve:

1. Controlar el ciclo de vida. -> se crean los tres ciclos de vida en uno solo 

2. Mutaciones (props, estado)

el user efect es como un filtro.

*/