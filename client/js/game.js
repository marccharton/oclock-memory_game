let cardList;
let cardVisible = false;
let lockBoard = false;
let firstCard;
let secondCard;
let timeOutToFlip = 500;
let totalCardNumber;
let validatedCardNumber = 0;

export function init() {
    cardList = document.querySelectorAll('.card');
    totalCardNumber = cardList.length;
    cardList.forEach(card => {
        card.addEventListener('click', revealCard);
        card.style.order = Math.floor(Math.random() * totalCardNumber);
    });
}

function resetConfiguration() {
    cardVisible = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

function endGame() {
    alert("bravo ! :D");
}

function revealCard() {
    if (lockBoard || this === firstCard) {
        return;
    }
    this.classList.remove('card-back');
    this.classList.add('card-front');
    if (!cardVisible) {
        cardVisible = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    firstCard.id === secondCard.id ? validateCards() : showFront();
}

function validateCards() {
    [firstCard, secondCard].forEach((card) => {
        card.removeEventListener('click', revealCard);
        card.classList.add('valid');
    });

    validatedCardNumber += 2;

    if (validatedCardNumber == totalCardNumber) {
        setTimeout(() => endGame(), 200);
    }
    resetConfiguration();
}

function showFront() {
    lockBoard = true;

    setTimeout(() => {
        [firstCard, secondCard].forEach((card) => {
            card.classList.remove('card-front');
            card.classList.add('card-back');
        });

        resetConfiguration();
    }, timeOutToFlip);
}
