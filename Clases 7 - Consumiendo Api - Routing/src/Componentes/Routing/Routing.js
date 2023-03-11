import { BrowserRouter, Routes, Route } from "react-router-dom";

/* 
Cuando utilizamos esta dependencia vamos a tener que usar import { BrowserRouter, Routes, Route } from "react-router-dom";


*/
export default function name(){

    return(
        <>
         {/*------------------ROUTER EXPLICACION APARTADA ----------------------------- */}
      
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

          <Route path='/ejemplo1' element={ <Ejemplo1/>} />
          <Route path='/ejemplo2' element={ <Ejemplo2/>} />
          {/*HACER UN ERROR 404
          Cuando le agregamos un "*" le estamos diciendo que todas las rutas que no se encuentren difnida en patch tomara la ruta 
          mencionada.*/}
          <Route path='*' element={<h1>error 404</h1>} />
         </Routes>
      </BrowserRouter>






      {/*------------------FIN DE ROUTER ----------------------------- */}
        </>
    );
}; 



/* 
ROUTING
El routing es cuando nos permite poder navegar desde nuestra aplicacion, por ejemplo ir a categoria, tienda, producto, formulario, ect.
Es el que nos va estar trasportando por medio de secciones.

REACT ROUTER

Para hacer las rutas vamos a tener que instalar la dependencia llamada "react router" que nos va permitir trabajar con las rutas en nuestra aplicacion.

Por defecto, recat no viene con un mecanismo integrado de navegacion. Esto para mantener sus dependecias al minimo y dado que no todo proyecto, necesita

routing se maneja como una dependencia aparte.

HAY VARIAS SOLUCIONES LA DEL EJEMPLO SERA

REACT-ROUTER-DOM
"npm install react-router-dom"


*/