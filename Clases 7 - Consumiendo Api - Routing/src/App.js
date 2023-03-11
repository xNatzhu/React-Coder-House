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
import UseEffect from './Componentes/UseEffect/UseEffect';
import EjercicioDos from './Componentes/States/Ejercicio2/Ejercicio2';
import Carrito from './Componentes/States/Ejercicio2/carrito';
import Promesas from './Componentes/Promesa/Promesa';



//ROUTEO
import { BrowserRouter, Routes, Route } from "react-router-dom";
// ejemplos de routeo
import Ejemplo1 from './Componentes/Routing/Ejemplo1';
import Ejemplo2 from './Componentes/Routing/Ejemplo2';


function App() {

  
  return (
    <body>

      {/*------------------ROUTER ----------------------------- */}
      
      {/*PASO 1: SE ENGLOBA EL ROUTEO EN LA ETIQUTA BrowserRouter
        Aca es donde se van utilizar las rutas.*/}
      <BrowserRouter>
        <Menu/> {/*EL MENU SE DEJA AFUERA PORQUE QUIERO QUE ESTE EN TODAS LAS RUTAS.*/}
        
        {/*PASO 2: Vamos utilizar Routes que nos servira para poder definit cada una de las rutas de 
         nuestra aplicacin.*/}

         <Routes>

          {/*PASO 3: Vamos a definir cada una de las rutas de nuestra app, usaremos la etiqueta: con ROUTE.
          Permite acceder a otras paginas de la app sin hacer recarga.
          
          DEFINICION DE RUTAS:
          - Vamos a definir nuestra ruta con el atributo "path=" que va ser la URL.

          - Luego se utiliza otro atributo llamado element="" en el cual le vamos a decir que me va mostrar en la ruta pactada.

          Route path='/' element={} EN ESTE CASO MOSTRARIA HOME.

          */}

          <Route path='/ejemplo1' element={<Ejemplo1/>} />
          <Route path='/ejemplo2' element={ <Ejemplo2/>} />
          {/*HACER UN ERROR 404
          Cuando le agregamos un "*" le estamos diciendo que todas las rutas que no se encuentren difnida en patch tomara la ruta 
          mencionada.
          <Route path='*' element={<h1>error 404</h1>} />
          */}
          

          {/*continua el ejemplo en el componente menu para vincular las rutas. */}
         </Routes>
      </BrowserRouter>






      {/*------------------FIN DE ROUTER ----------------------------- */}

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


        <section className="UseEffect">
          <UseEffect/>
        </section>

        <section>
          <EjercicioDos stock={30} precio={2600} tipo={"Remera"}/>
        </section>
        <section>
          <h1>PROMESAS</h1>
        <Promesas stock={30} precio={2600} tipo={"Remera"}/>
        </section>
      </main>
    </body>
  );
}

export default App;
 