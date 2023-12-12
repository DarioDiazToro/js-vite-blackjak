
/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} imagen de retorno
 */
 export const crearCarta = (carta)=>{
     if(!carta) throw new Error("la carta es necesaria");

      const imgCarta = document.createElement('img');
      imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
      imgCarta.classList.add('carta');
      return imgCarta;
 };