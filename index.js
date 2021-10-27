const cards = ['Lisa', 'Kaitlin', 'Jan']
const thankYou = []

function writeCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        thankYou.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
    return thankYou 
}

function countDown(number) {
    let down = number;
    while (down >= 0) {
        console.log(down--)
    }
}