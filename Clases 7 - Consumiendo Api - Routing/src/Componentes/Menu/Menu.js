import React from "react";
import { Link } from "react-router-dom"; // para pasar los los link al menu primero hay que import LINK con su respectiva dependecia.
function Menu() {
    return(
        <header>
            <img src="logo512.png" className="App-logo" alt="logo" />
            <ul className={'App-Menu'}> 
            {/*Las llave dentro de la clase sirven si nosotros queremos agregarle un condicional, sin embargo es recomendable ponerlo siempre aunque no se use un condicional.*/}
                <li>
                    {/*ROUTER PASO 2:
                    Una vez que este import se procede utilizar la etiqueta. "LINK"

                    PASO 3: Luego se le agrega el atributo to="" y se le declara la ruta.
                    
                    */}
                    <button>
                        {/*<Link to={"/"}>Home</Link>*/}
                    </button>
                </li>
                <li>
                    <button>
                       
                    </button>
                </li>
                <li>Contacto</li>
            </ul>
        </header>
    );
}

export default Menu


/*HOOKS USE PARAMS

-lO PODEMOS UTILIZAR PARA LEER EN JS LOS PARAMETROS DE LA RUTA.

- EN COMBINACION CON UN USEEFFECT NOS SIRVE PARA OBTENER ACTUALIZACIONES SOBRE LOS
PARAMETROS.


*/