import logo from './logo.svg';
import './App.css';
import Menu from './Componentes/Menu/Menu.js';
import MenuClass from './Componentes/Menu/Menu-class.js';
import Propiedades from './Componentes/Props/Propiedades.js';
import PropsClass from './Componentes/Props/Props-Clases.js';
import StateComponents from './Componentes/StateComponents/StateComponents.js';
import Children from './Componentes/Children/Children.js';
import EstadosFunciones from './Componentes/States/State.js'
import EjercicioUno from './Componentes/States/Ejercicio1';
function App() {
  return (
    <body>
      <Menu></Menu>{/* Funciones de componente*/}
      <main>
        <section>
          {/*<MenuClass></MenuClass>
          <br/>
          <br/>
          <h1>Clase componente</h1>*/}
        </section>

        <section>
        <h1>Propiedades(PROPS) formato de funciones</h1>
          <Propiedades titulo={"Remera"} precio={522} talle={"S"} />

        </section>

        <section className="section-props-class">
          <h1>Propiedades(PROPS) formato de clases</h1>
          <PropsClass modelo={"Renault"} precio={2580} ano={2010} />
        </section>

        <section>
          <br/>
          <br/>
          <br/>
          <h1>ESTADO DE COMPONENTES</h1>
          <StateComponents />
        </section>


        <section>
          <br/><br/><br/>
          <Children>
          {/*
          Para empezar vincular un children primero se pone etiqueta de abierto y cierre como estamos viendo a continuacion es decir 

          <componente> </componente>

          y dentro de esa etiqueta se añade el contenido, y ese contenido se va estar reflejando en el {children} del componente hijo.
          */}
          <p>Soy un children</p> 
          </Children>

          <Children>
            <p>Soy un segundo children</p>
          </Children>
        </section>
        <section className='Estados-Funcionales'>
          <EstadosFunciones/>
        </section>

        <section>
          <EjercicioUno/>
        </section>


      </main>
    </body>
  );
}

export default App;
 