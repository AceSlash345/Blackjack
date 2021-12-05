let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let message = ""
let cards = []
let sum = 0
let isAlive = false
let winner = false


function randomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else{
        return randomNumber
    }
}

function startGame(){
    let firstCard = randomCard()
    let secondCard = randomCard()
    betAmount = Math.floor( Math.random()*500 ) + 50
    isAlive = true
    winner = false
    cards = [firstCard, secondCard]
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sum = firstCard + secondCard
    sumEl.textContent = "Sum:" + sum
    playGame()
}

function playGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum  <= 20){
        message = "Would you like to draw another card?"
        } else if (sum === 21 ){
            message = "Blackjack!"
            winner = true
        } else{
            message = "You are over 21! Game over!"
            isAlive = false
        }
    messageEl.textContent = message
}

function addCard(){
    if (isAlive === true && winner === false){
        let card = randomCard()
        sum += card
        cards.push(card)
        playGame()
    }
}