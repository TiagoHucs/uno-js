let = deck = gererateCards();

let player1 = {name:'Jogador 1',hand : deck.splice(0,7)};
let player2 = {name:'Jogador 2',hand : deck.splice(0,7)};
let player3 = {name:'Jogador 3',hand : deck.splice(0,7)};
let player4 = {name:'Jogador 4',hand : deck.splice(0,7)};

let players = [player1,player2,player3,player4];

function gameLoop(){
    while(player4.hand.length > 0){
        for(let i = 0; i < players.length ; i++){
            let activePlayer = players[i];
            const dropCard = (activePlayer.hand.splice(0,1))[0];
            console.log( `O player ${activePlayer.name} jogou a carta: ${JSON.stringify(dropCard)}`);
        }
    }
}

function gererateCards() {
    const colors = ['blue','green','yellow','red'];
    let cards = [];

    colors.forEach(color => {
        for(let i = 0 ; i <= 9; i++){
            cards.push({name:i+'',color:color})
        }
        for(let i = 1 ; i <= 9; i++){
            cards.push({name:i+'',color:color})
        }
        cards.push({name:'jump',color:color})
        cards.push({name:'jump',color:color})
        cards.push({name:'revert',color:color})
        cards.push({name:'revert',color:color})
        cards.push({name:'+2',color:color})
        cards.push({name:'+2',color:color})
    });

    for(let i = 0; i < 4; i++){
        cards.push({name:'+4',color:'any'});
        cards.push({name:'changeColor',color:'any'});
    }

    return shuffle(cards);
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
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
