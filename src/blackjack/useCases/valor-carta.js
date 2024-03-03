
/**
 * Obtener el valor de la carta
 * @param {String} carta recibe un string como 9H o JS el cual dice que carta es
 * @returns {Number} devuelve el valor de la carta en un entero
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}