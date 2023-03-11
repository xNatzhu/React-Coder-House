import React, { useState, useEffect } from 'react';

export default function Api(params) {
    //para empezar agregar una api, primeramente vamos a crear una funcion donde se estara almacenando dicho fetch.

    const getUser = ()=>{
        // el fetch va recibir como parametro en la URL que vamos a interactuar.
        const URL = "Una variable que almacena una url que nos devuelve una api"
        fetch(URL) // recibe la URL como parametro, en este caso la url se encuentra almacenada en una variable.

        // para acceder a la RESPUESTA de esa api vincula lo haremos con los manipuladores de promesa then & catch

        .then((respuesta)=>{
            respuesta.json() // trasformo esa informacion que se encuentra esa api en un objeto que sera un JSON.
        })
        .then((datos)=>{
            console.log("Aca ya se veria la respuesta que solicitamos en el fetch" + datos);
        })
    }

    /* 
    PARA PODER VISUALIZAR LA INFORMACION QUE NOS TRAE ESTA API, APARTE DEL CONTENIDO FORMATO JSON. PODEMOS HACERLO MEDIANTE 

    > NETWORK
    > USER / EL NOMBRE DE LA API : SE ESTARA VISUALIZANDO LA INFORMACION, EL HEADER, EL TIPO DE METODO EN ESTE CASO GET. ECT
    
    */

    useEffect(()=>{
        //UNA VEZ CREADA EL FETCH DE LAS RESPUESTAS DE LAS API, SE UTILIZA EL USE EFFECT PARA DECIR QUE ESA FUNCION SE APLIQUE SOLAMENTE  EN EL COMIENZO, ES DECIR CUANDO EL COMPONENTE SE MONTA. HAY QUE RECORDAR QUE LA DEPENDENCIA [] VACIA SIGNIFICA CICLO DE MONTAJE.
        getUser()
    },[])

    return(
        <>
        
        
        </>
    );
}




/* 



*/