import React from "react";

export default function CicloDeVida(params) {
    return(
        <div>

        </div>
    );
}

/*
CICLO DE VIDA

El ciclo de vida no es mas que una serie de estados por los cuales pasan todos los cmponente a lo largo de su existencia.

Esos estados tienen correspondencia en diversos metodos, que podemos implementar para realizar acciones cuando se van producciendo.

En react es fundamental el ciclo de vida, porque hay determinadas acciones que necesariamente debemos realizar en el momento correcto de ese ciclo. Conocer estos ciclos nos ayudara optimizar aplicaicones siguiendo las reglas basicas que pone react.

REGLAS BASICAS:

    - NO BLOQUEAR EL RENDERING CON TAREAS PESADAS Y SINCRONICA.

    - EJECUTAR TAREAS ASINCRONICAS CON EFECTOS SECUNDARIOS LUEGO DEL MONTAJE (MOUNT).


TRES CLASIFICACIONES DE ESTADOS DENTRO DE UN CICLO DE VIDA.

-> MONTAJE -> se produce la primera vez que un componente va generse, incluyendo en el dom.

-> Actualizacion -> se produce cuando el componte ya esta generado se esta actualizando

-> Demontaje -> Se produce cuando el componente se elimina del dom.

Adermas dependiendo del estado actual de un componente y lo que esta ocurriendo con el, se produciran grupos de diferentes de etapas del ciclo de vida.

1.13.40

*/