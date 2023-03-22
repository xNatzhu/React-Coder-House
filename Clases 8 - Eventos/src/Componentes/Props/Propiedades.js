import React from "react";

export default function Propiedades(Props) {
    /*Para no escribir siempre el parametro props para vincular la informacion con el componente hijo. Lo que podemos hacer es destructurar {nombre-del-objeto} en el parametro es decir quedaria({destructuracion})
    
    La segunda alternativa es armar una variable y hacer la destructuracion.

    const {Talle, ect} = Props
    */
    return(
        <>
            <div className="propiedades-cards">
                <h2>Titulo: {Props.titulo}</h2>{/*Las props permiten poder trasmitir / enviar datos del componente padre hacia el componente hijo, y entre componentes. */}
                <p>Precio:  {Props.precio + "$"}</p>
                <p>Talle: {Props.talle} </p>
                <button>Comprar</button>
            </div>
        
        </>
    );
};