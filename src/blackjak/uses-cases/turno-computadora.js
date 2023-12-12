 
 import { pedirCarta,valorCarta } from ".";
import { crearCarta } from "./crearCarta";

 /**
  * 
  * @param {Number} puntosMinimos puntos minimos que la computradora necesita para ganar
  * @param {HTMLElement} puntosHTML Elementos HTML para mostrar los puntos
  * @param {HTMLElement} divCartasComputadora ELemento HTML para mostrar las cartas
  */
 export const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora) => {

     if(!puntosMinimos) throw new Error("puntos minimos son necesarios");
     if(!puntosHTML) throw new Error("argumentos puntosHTML son necesarios");

      let puntosComputadora = 0;

    do {
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        const imgCarta = crearCarta(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        };

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 95 );
}