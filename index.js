let player = {
    name : "Per",
    chips: 145
}

let cards = []
let sum = 0 
let isAlive = false;
let hasBlackjack = false; 
let msg = ""
let msgEl = document.getElementById("msg-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    // it has to be between 1 to 13. 
    let num =  Math.floor(Math.random() * 13) +1 
    if (num === 1) { 
        return 11 
    }
    else if(num>10){
        return 10 
    }
    else{
        return num
    }
}

function start(){
    isAlive = true
    let firstCard = getRandomCard(); 
    let secondCard = getRandomCard(); 
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        msg = "Do you want to draw a new card?"
    } else if (sum === 21) {
        msg = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        msg = "You're out of the game!"
        isAlive = false
    }
    msgEl.textContent = msg
}

function newCard(){
    if(isAlive && hasBlackjack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
