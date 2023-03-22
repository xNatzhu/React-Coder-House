import React from "react";

export default class PropsClass extends React.Component{
    constructor(Props){
        super(Props)
        /*TEORIA DE SUPER:

        La palabra clave super es usada para acceder y llamar funciones del padre de un objeto. Las expresiones super. prop y super[expr] son válidas en cualquier definición de método tanto para clases como para objetos literales
        
        El método super nos permite reutilizar bloques de código sin tener que volver a escribir lo mismo, invocando al constructor de una clase superior, desde una clase hija y hacia una clase padre.
        */
    }
    render(){
        return(
            <div className="propiedades-cards">
                <h2>Modelo de Vehiculo: {this.props.modelo}</h2>{/*Las props permiten poder trasmitir / enviar datos del componente padre hacia el componente hijo, y entre componentes. */}
                <p>Precio: {this.props.precio}</p>
                <p>Año de fabricacion: {this.props.ano}</p>
                <button>Comprar</button>

                {/* 
                En las clases this.props se escribe el "props" con minuscula ya que con mayuscula no lo toma, porque lo que realiza es this(objeto.pros(objeto).el-nombre-del-objeto-valor-añadido)
                */}
            </div>
        )
    };
}