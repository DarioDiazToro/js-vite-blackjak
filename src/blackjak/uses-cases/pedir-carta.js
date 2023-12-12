
import { deckBarajeado } from "..";


/**
 * 
 * @returns {String}  retorna la carta del deck
 */
export const pedirCarta = () => {
    if ( deckBarajeado.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deckBarajeado.pop();
    return carta;
};
