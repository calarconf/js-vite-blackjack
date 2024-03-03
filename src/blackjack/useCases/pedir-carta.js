

/**
 * @param {Array<String>} deck un arrray como ['2H','7D','6H'.....] 
 * @returns {String}una carta del deck
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}