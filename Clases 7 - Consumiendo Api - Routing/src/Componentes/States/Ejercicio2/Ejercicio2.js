import React, {useState} from "react";
import Carrito from "./carrito";

export default function EjercicioDos(props) {

    const [CountStock, getCountStock] = useState(0)
    const [StockLimit, getStockLimit] = useState(props.stock)
    const [CountLimit, getCountLimit] = useState(0)

    function AddStock() {
        
        if(CountStock >= StockLimit)
        getCountStock(
            CountStock 
        )
        else{
            getCountStock(
                CountStock +1
            )
        }
    }

    function QuitStock() {
        if(CountStock <= CountLimit){
            getCountStock(
                CountStock
            )
        }
        else{
            getCountStock(
                CountStock - 1
            )
        }
    }


    return(

        <div>
            <h1>{props.tipo}</h1>
            <p>{props.stock}</p>
            <p>{props.precio}</p>
            <button onClick={AddStock}>+</button>
            <p>{CountStock}</p>
            <button onClick={QuitStock}>-</button>
        </div>


    );
}