import React from "react";
import PropsClass from '../Props/Props-Clases';

/* El componente contemedpr defile los datos contenidos en la aplicacion y tambien los manipula, creando luego los componentes hijos y mostrandolos con el metodo renders.

- Estan orientados al funcionamiento de la aplicacion.
- Contienen componentes de presentacion y(u otros componentes.
- Se comunica con la fuente de datos.
- Usualmente tiene estado para presentar el cambio en los datos.

*/

export default function StateComponents(Props) {
        return(
            <div>
                <PropsClass modelo={"StateComp1"} precio={127} ano={2011} />
                <PropsClass modelo={"StateComp2"} precio={128} ano={2012} />
                <PropsClass modelo={"StateComp3"} precio={129} ano={2013} />
            </div>
        );
}

/*

De esta manera en un componente podemos alojar varios componentes, y despues aplicarlo en el componente padre. De esta manera nos referimos con estate components.
*/