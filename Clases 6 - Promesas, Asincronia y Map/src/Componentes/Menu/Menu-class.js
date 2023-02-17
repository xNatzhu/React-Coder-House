import React from "react";

/*Cuando hacemos una clase componente debemos añadir que esta clasee va extender de rweact component*/
export default class MenuClass extends React.Component{
    render(){
            /* El metodo de render: Se encarga de renderizar en el navegador el HTML correspondiente al componente. Este método se llama automáticamente cuando se crea un componente y cuando el estado del componente se actualiza (veremos esto más adelante).*/
        return(
            /* El return se encargara de retonar los elementos JSX*/
            <header>
                <img src="logo512.png" className="App-logo" alt="logo" />
                <ul className={'App-Menu'}> 
                    <li>Home</li>
                    <li>Producto</li>
                    <li>Contacto</li>
                </ul>
            </header>
        );
    }
}

