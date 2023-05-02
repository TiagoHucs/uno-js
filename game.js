let = deck = gererateCards();

let player1 = { name: 'John', hand: deck.splice(0, 3) };
let player2 = { name: 'Paul', hand: deck.splice(0, 3) };
let player3 = { name: 'Ringo', hand: deck.splice(0, 3) };
let player4 = { name: 'George', hand: deck.splice(0, 3) };

let players = [player1, player2, player3, player4];
let winner = null;
let lastCard = null;

function gameLoop() {
    let i = 1;
    while (winner == null) {
        play(players[i])
        checkWinner();
        i++;
        if(i >= players.length){
            i = 0;
        }
    }
    console.log('O vencedor: ' + winner.name)
}

function play(activePlayer){
    let cardToDiscart = null;
    activePlayer.hand.forEach(card => {
        
    });

    lastCard = (activePlayer.hand.splice(0, 1))[0];
    console.log(`O player ${activePlayer.name} jogou a carta: ${JSON.stringify(lastCard)}`);
}

function checkWinner() {
    players.forEach(element => {
        if (element.hand.length <= 0 && winner == null) {
            winner = element;
        }
    });
}

function gererateCards() {
    const colors = ['blue', 'green', 'yellow', 'red'];
    let cards = [];

    colors.forEach(color => {
        for (let i = 0; i <= 9; i++) {
            cards.push({ name: i + '', color: color })
        }
        for (let i = 1; i <= 9; i++) {
            cards.push({ name: i + '', color: color })
        }
        cards.push({ name: 'jump', color: color })
        cards.push({ name: 'jump', color: color })
        cards.push({ name: 'revert', color: color })
        cards.push({ name: 'revert', color: color })
        cards.push({ name: '+2', color: color })
        cards.push({ name: '+2', color: color })
    });

    for (let i = 0; i < 4; i++) {
        cards.push({ name: '+4', color: 'any' });
        cards.push({ name: 'changeColor', color: 'any' });
    }

    return shuffle(cards);
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

gameLoop();
