class Deck{
    constructor(){
      this.deck = [];
      this.reset();
      this.shuffle();
    }
  
    reset(){
      this.deck = [];
  
      const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
      const ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
      const values = [1,2,3,4,5,6,7,8,9,10,11];
  
      for (let suit in suits) {
        for (let rank in ranks) {
          this.deck.push(`${ranks[rank]} of ${suits[suit]}`);
        }
      }
    }
  
    shuffle(){
      const { deck } = this;
      let m = deck.length, i;
  
      while(m){
        i = Math.floor(Math.random() * m--);
  
        [deck[m], deck[i]] = [deck[i], deck[m]];
      }
  
      return this;
    }
  
    deal(){
      return this.deck.pop();
    }
  }
  
  const ogDeck = new Deck();
  console.log(ogDeck.deck);
  console.log(ogDeck.deal());
  ogDeck.reset();
  console.log(ogDeck.deck);

  const one = document.getElementById("1");
  const five = document.getElementById("5");
  const ten = document.getElementById("10");
  const twenty = document.getElementById("20");
  const fifty = document.getElementById("50");
  const oneHundred = document.getElementById("100");
  const oneThousand = document.getElementById("1k");
  const fiveThousand = document.getElementById("5k");
  const deal = document.getElementById("deal");
  const hit = document.getElementById("hit");
  const stand = document.getElementById("stand");
  const bets = document.getElementById("bets");
  const img = new Image(60, 60);
  img.id = "bet";

  const handleClick = evt => {
    console.log(evt.target.id);
  }
  const addOne = evt => {
    img.src = "images\\Overall UI\\Chip5.png";
   bets.innerHTML += document.body.appendChild(img); 
  }
  const makeHit = evt => {
  playerTotal += ogDeck.deal().rank;
  }
  const makeStand = evt =>{
    if(playerTotal > 21 || dealerTotal == 21){
      money -= bet;
    }else if(playerTotal < 21 && playerTotal > dealerTotal){
      money += bet;
    }else if(playerTotal == 21){
      money += (bet * 2);
    }
  }
 
  one.addEventListener('click', addOne);
  // five.addEventListener('click', addFive);
  // ten.addEventListener('click', addTen);
  // twenty.addEventListener('click', addTwenty);
  // fifty.addEventListener('click', addFifty);
  // oneHundred.addEventListener('click', addOneHundred);
  // oneThousand.addEventListener('click', addOneThousand);
  // fiveThousand.addEventListener('click', addFiveThousand);
  deal.addEventListener('click', dealCard);
  hit.addEventListener('click', makeHit);
  stand.addEventListener('click', makeStand);


var bet;
var currentCardValue;
var playerTotal;
var dealerTotal;
var dealerTurn = true;
var money; 

do{
dealerTotal += ogDeck.deal().rank;
}while(dealerTotal < 17);
