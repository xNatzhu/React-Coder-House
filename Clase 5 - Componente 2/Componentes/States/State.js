import React,{useState} from "react";

/*Dentro de las llaves ,{} se añaden los metodos que tienen react, en este caso los hooks*/

/*ESTADO

Un estado viene siendo una variable, un lugar donde se va estar almacenando informacion.
Lo particular y diferencia que tiene los estados con las variables tradicionales es que van interferir lo que son ñps ciclo de vida de los componentes. Es decir nosotros vamos a tener un
estado y a modificar ese estado su valor, va ser que se renderize y se refresque en el jsx - REFLEJA EL VALOR MODIFICADO SIN NECESIDAD DE ESTAR RECARGANDO LA PAGINA.
*/

/* ESTADOS CON FUNCIONES

Las funciones no tienen estados, ya que solamente pueden tenerlo las clases. Sin embargo tiene un nuevo metodo llamado hooks que nos permite poder realizar dicho estado.
*/

export default function EstadosFunciones(){
    
    /* 
    Para realizar el estado lo primero que se debe realizar es declarar una variable constante.

    Despues realizamos una destructuracion y le ponemos valores.

    const [El parametro que va recibir, la funcion que va aplicar este estado] = aca se llama al metodo el hooks.
    
    Se utiliza const para no romper el ciclo de vida del componente algo, que se podria realizar con el let o var, por ese motivo solamente se usa la variable constante que no modifica.
    SE PUEDE DEFINIR LOS ESTADOS QUE SE REQUIERAN.

    PASOS:
    1. SE IMPORTA EL METODO DE HOOKS
    2. SE CREA UNA CONSTANTE
    3. SE AGREGA EN LA CONSTANTE UN CORCHETE [] QUE ADENTRO TENDRA DOS VALORES: VALOR1 = EL NOMBRE QUE VA TENER EL ESTADO| VALOR 2 = ES UNA FUNCION QUE VA PERMITIR MODIFICAR EL ESTADO Y POR CONVENCION SE LE PONE EL SET ADELANTE PARA REPRESENTA LA MODIFICACION DE DATOS QUE VA SER DEL NOMBRE DEL ESTADO (EXAMPLE: count, setCount).
    

    REGLAS

    1. El value es constante.
    No se puede hacer count = x.

    2. Se cambia con setCount:
    SetCount("Nuevo valor").

    3. No llamar el setCount entre la declaracion del hook y el render.

    */
    const [count, setCount] = useState(1)
    
    /*Esta funcion lo que va ser setear un nuevo estado a mi contador. */
    const addStock = ()=>{
        setCount( /* LLamos la funcion del segundo parametro, y le agregamos el valor que queremos que realice la modificacion de estado, en este caso va sumar a contador + 1*/
            count + 1
        )
    }

    const quitStock=()=>{
        
        setCount(
            count - 1
        )
    }
    return(
        <div>
            <h1>HOOKS FUNCIONALES</h1>
            <p>Stock: {count}</p> {/*Se agrega {} + el nombre del estado, de esta manera se esta reflejando los datos del estado.*/}
            <button onClick={addStock}> Agregar stock</button>
            <button onClick={quitStock}> Quitar stock</button> {/* Aca se crean los botones con una funcion que adentro tendran el estado, para cuando el usuario aprete aplica este funcion, dentro de la funcion de estado que va modificar el estado. */}
        </div>
    );
}

/*REGLAS GENERALES DE LOS HOOKS

1. DEBEN EJECUTARSE SIEMPRE


2. ESTO IMPLICA QUE NO PUEDEN SER EJECUTADOS DENTRO DE OTRAS ESTRUCTURAS, COMO IF, FOR, O TERNARY.

3. SE EJECUTAN EN ORDEN Y NNCA EN SIMULTANEO.


RENDER

Los render van estar refrescando las paginas cuando se tratan de

1. los estados
2. las props
3. los eventos

*/