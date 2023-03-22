import React from "react";
/*El chieldren es una manera que tiene react de permitirnos proyectar/trasncurrir no o mas componentes de otro.

Nos da la posibilidad de meter contenido adentro que en si no esta dentro del componente.

El objetivos de los children es pasar un contenido que no tenga mucho que ver con el componente en si y poder declarlo en llamada.

Un ejemplo seria un modal, que se encuentre vacio y que el contenido del modal que sea diferente, un formulario, un card, lo que sea. Y se puede hacer con children y ahi mostrar lo que deseemos.
*/

export default function Children({children}) {
    return(
        <div>
            <h1> {children}</h1>
        </div>
    );
}