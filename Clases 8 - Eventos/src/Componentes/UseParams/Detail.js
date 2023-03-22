import { useParams } from "react-router-dom";

export default function(){
    /*Aca se podria añadir una destructuracion */

    const {id} = useParams() //Sirve para crear un hook que va estar almacenando los ID.
/* useParams viene con un objeto asi que le puedo añadir ID.


Esto nos sirve para llamar a la base de datos y decirle que nos traiga por ejemplo el producto especifico ese.

PASO 2.

Luego se realiza un filter o un map para reducir esos datos a la id del useparams ejemplo:

function filterProductId(listProduct, id){
    return listProduct.filter(product) => {
        if(product == id){
            return product
        }
    }
}


UNA VEZ QUE HACEMOS EL FILTER O EL MAP Y FILTRAMOS LOS DATOS, Y COMPARAMOS CON LOS PARAMETRO 
EJECUTAREMOS

useEffect(()=>{
    filterProductId(la array de producto, el id del nuevo hook)
},[])

*/


    return(
        <>

        </>
    )
}