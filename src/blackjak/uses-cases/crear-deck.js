import _ from "underscore";
 
// export const nombre = "Dario";

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposCartas Ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array} retona un nuevo deck 
 */

 export const crearDeck = (tiposCartas,tiposEspeciales) => {
    let deck = [];

    if(!tiposCartas || tiposCartas.length ===0) throw new Error("tipos de cartas es obligatorio como un string");

    if(!tiposEspeciales || tiposEspeciales.length ===0) throw new Error("tipos especiales es obligatorio como un string");


    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
};
// export default crearDeck;