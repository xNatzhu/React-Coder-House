import React,{useState, useEffect} from "react";

/* 
PROMISES - PROMESAS

Una promesa es un objeto que permite representar y seguir el ciclo de vida de una tarea o operacion.

TIENE DIFERENTES ESTADOS
1. Realizado
2. Pendiente
3. Rechazado

tendra la funcion dos parametros
-> resolve en el caso que se cumpla
-> reject cuando no se cumple la promesa.

1. Paso uno se crea una funcion.

2. Paso dos se crea un return que se invoca la clase new Promise.

3. Paso tres cuando se retorna ahi mismo se crea otra funcion new Promiesa((resolve, reject)=>{
    resolve([contenido - Tarea sincronica ])
})

4. Para invocar una promesa se utiliza los then y catch.
function().then((data)) -> se puede añadir varios then son ENCADENABLES.


¿PARA QUE SIRVEN LAS PROMESAS?

-> Sirven para la llamada al backend, cuando el backend te manda un api con la infrmacion.

CAPTURACION DE LAS PROMESAS:

Then -> si funciono todo correcto.
catch -> si fallo y muestra un error.
finally -> cuando se ejecuto el then o el catch el finally cualquier de los dos resultados se ejecuta despues (ej: loading/spinner)

*/



export default function Promesas(props){

    // mock datos - datos de prueba

    const mockProduct =[
        {title:"remera",
         talle:"XL",
         price:1500,
         stock:3
        },
        {title:"Jean",
        talle:"L",
        price:2500,
        stock:8
       }
       //esto se llama mockear datos significa que se utilizan daatos para probar/simular la app
    ]
    const [Product, setProducto] = useState([])


    function getProduct(params) {
        return new Promise((resolve, reject)=>{ //return la promesa para que cuando la funcion se llame la clase promisses se coloque.

            return resolve(mockProduct) // Una vez que se lea la promesa, se añade un return, para que si da correcto en este caso leera el codigo sincronico que tendra adentro, que puede ser una api con informacion. Un json, ect. Es la informacion que lee
        })
        
    } 

    useEffect(()=>{ // use effect se eejecuta despues que renderiza - Cuando se cree el componente
        //LLama a la promesa aqui tambien podria ir aysc

        //EL THEN ESPERA QUE LA PROMESA TIRE UN RESULTADO.//

        getProduct().then((productos) =>{
            setProducto(productos) //Una vez que el resultado sea correcto y entre en el then, va guardar el producto en el estado en este caso setProducto
        })

    },[]/*Declaracion del estado*/)
    
    return(

        <div>
            {/* El metodo map, sirve para recorrer arrays, y poder arrojar lo que se encuentra adentro lo mismo que el foreach */}
            <p>{Product.map((producto, index)=>{ 
                return(


                    <div key={index}> {/*Brinda un valor unico cada vez que se itera la lista le da un ID. se puede conectar con una id en el objeto o podemos hacer una segunda opcion que es pasarle un segundo parametro al map para que nos brinde un key*/}   

                        <p>Nombre: {producto.title}</p> {/*En el map se agrega el parametro.nombre del objeto */}
                        <p>Precio: {producto.price}</p>
                    </div>
                )
            })}</p>
        </div>


    );
};




/* 

ASYC  - TEORIA

Es lo mismo que promesas no cambia nada

Ejemplo;

PROMESA:

const producto = [{
    objeto:1,
    marca:2,
}] -> arrays de objetos


const getProducto = ()=>{
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            resolve(producto); -> si el objeto se cumple pasa en estado resolve, si no se cumple reject.
        }, 2000)
    })
} 



async function getProductosAsync( -> devuelve la promesa

    const productos = await funcion promesa(
        
        dentro de aca se van estar guardando los productos que teniamos vinculado en la promesa.
    lo que sirve asyc es poder intersetar con la promesa, y devolver valores como lo haria el then.
    
    const productos = await getProducto();

    console.log(productos)

    )

);



*/
