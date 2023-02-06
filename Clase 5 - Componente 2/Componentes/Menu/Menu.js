import React from "react";
function Menu() {
    return(
        <header>
            <img src="logo512.png" className="App-logo" alt="logo" />
            <ul className={'App-Menu'}> 
            {/*Las llave dentro de la clase sirven si nosotros queremos agregarle un condicional, sin embargo es recomendable ponerlo siempre aunque no se use un condicional.*/}
                <li>Home</li>
                <li>Producto</li>
                <li>Contacto</li>
            </ul>
        </header>
    );
}

export default Menu