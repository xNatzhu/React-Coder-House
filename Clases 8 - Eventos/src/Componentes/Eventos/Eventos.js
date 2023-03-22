import React, { useEffect, useState } from "react";

export default function Eventos(){
    //eventos para ejecutar un evento se debe realizar por useEffect de lo contrario permite que se ejecute todo el tiempo ese evento y ocupa memoria.

    //const [value,setValue] = useState("") //con este estado lo que hacemos es que el valor del value del input se almacene en ese estado. Con el hanldeChange lo que hace es utilizar la funcion del value para guardar y almacenar el valor.

    //Al tener VARIOS CAMPOS INPUT PARA ALMACENAR INFO no podemos crear un estado para cada uno, lo que podemos hacer es convertir el estado en un objeto.

    const [value,setValue] = useState({
        nombre:"",
        apellido:"",
        mail:""
    }) //de esta manera guardamos toda la info en un solo estado.




    const handleSubmit = (e)=>{
        e.preventDefault() // permite no cargar la web.
    }

    const hanldeChange = (e)=>{
        console.log("Cambio de contenido");


        //cuando escribimos target nos trae la informacion completa de la etiqueta.
        setValue(e.target.value)
        //Lo que permite es basicamente aca es que a medida que en la etiqueta se vaya agregando informacion lo ira almacenando en el estado.
    }




    useEffect(()=>{
        window.addEventListener("scroll",scrollMovimiento);
        let scrollMovimiento = ()=>{
            if(window.scrollY > 100){
                console.log("Se ejecuta cuando el scroll pasa los 100 px");
            }

            // en los eventos es muy importante que se haga el return. Ya que permite desmontar el evento, cuando el mismo ya no se encuentra el componente o se deja de usar. Por ejemplo si lo dejamos como estam esto va aplicar tambien en todo los componentes lo que ocacionara es que se acumule memoria inecesaria de nuestra aplicacion.
        }
        return()=>{
            window.removeEventListener("scroll",scrollMovimiento)
            //permite que no siga en segundo plano ejecutandose.
        }
        
    },[])
    
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={hanldeChange} placeholder="Nombre" value={value.nombre}></input>
            <input type="text" placeholder="Apellido" value={value.apellido}></input>
            <input type="text"  placeholder="Mail" value={value.mail}></input>
             <button type="submit">Enviar</button>
        </form>
        </>
    );
}


//onChange -> Input

// onSubmit -> Form envio.

//stopPropagation -> Hace que el evento que aplica el padre, el hijo lo pueda cancelar y aplcar su propio evento. lO QUE SUCEDE CUANDO APLICAMOS UN EVENTO EN EL CONTAINER HACE QUE TODAS LAS ETIQUETAS QUE ESTAN DENTRO H1...INPUT..ECT TENGAN EL MISMO EVENTO. PARA HACER QUE UN EVENTO HIJO SEA INDEPENDIENTE SE LE APLICA EL EVENTO MENCIONADO.

// onKeyDown -> es un evento que permite observar las teclas precionadas.

//ROUTING

//useNavigate -> Permite poder ejecutar ("url") y pasarle un parametro hacia donde va navegar.

// const navigate = useNavigate(); -> navigate("url")




// INFORMACION PASAR DEL HIJO AL PADRE.

/*
1. Primeramente hay que tener en cuenta que esto es para cuando pasamos info del hijo al padre, es decir el padre directo no al super padre, ni otros componentes, se podria pero para eso se utilizan otras propiedades.

2. Para comenzar se crea una funcion que tenga un evento al padre, y se lo manda al hijo como props.

3. El hijo recibe esa props, y le dara un valor cuando se ejecute ese evento.

4. Cuando se ejecute ese evento, vamos a crear un useState en el padre para que toda la informacion enviada del hijo se almacene.

5. De esta manera es como se puede enviar informacion del padre al hijo.

*/