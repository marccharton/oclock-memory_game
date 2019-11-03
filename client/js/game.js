import { timer } from "./timer";
import { scoreApi } from "./api/score"

let cardList;
let cardVisible = false;
let lockBoard = false;
let firstCard;
let secondCard;
let timeOutToFlip = 500;
let totalCardNumber;
let validatedCardNumber = 0;
let scoreMax = 100000;
let nbFail = 0;
let playerName;

export {
    run,
    endGame
};

function init() {
    cardVisible = false;
    lockBoard = false;
    timeOutToFlip = 500;
    validatedCardNumber = 0;
    scoreMax = 100000;
    nbFail = 0;
}

function run(isFirst = true) {
    if (isFirst) {
        playerName = prompt("Quel est ton nom ?", "Robert Paulson");
    }
    cardList = document.querySelectorAll('.card');
    totalCardNumber = cardList.length;
    cardList.forEach(card => {
        card.addEventListener('click', revealCard);
        card.style.order = Math.floor(Math.random() * totalCardNumber);
        if (!isFirst) {
            card.classList.remove('card-front');
            card.classList.add('card-back');
            card.classList.remove('valid');
        }
    });
}

function resetConfiguration() {
    cardVisible = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

function restart() {
    alert("je suis sûr que tu peux faire mieux ;)");
    init();
    run(false);
    timer.init();
    timer.run();
}

function endGame(isFinished) {
    let score = computeScore();

    if (isFinished) {
        timer.stopTimer(true);
        alert("bravo ! :D \nton score est de : " + score);
    }
    else {
        alert("ooowww, tu n'as pas fini à temps. ton score est de : " + score);
    }

    saveScore(score);
    restart();
}

function computeScore() {
    return Math.round(scoreMax / timer.getTimeSpentSecond() + validatedCardNumber * 500 - nbFail * 500);
}

function saveScore(score) {
    let date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    scoreApi.create(date, timer.getTimeSpent(), score, playerName);
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
    firstCard.id === secondCard.id ? validateCards() : hideCard();
}

function validateCards() {
    [firstCard, secondCard].forEach((card) => {
        card.removeEventListener('click', revealCard);
        card.classList.add('valid');
    });

    validatedCardNumber += 2;

    if (validatedCardNumber == totalCardNumber) {
        setTimeout(() => endGame(true), 200);
    }
    resetConfiguration();
}

function hideCard() {
    nbFail++;
    lockBoard = true;

    setTimeout(() => {
        [firstCard, secondCard].forEach((card) => {
            card.classList.remove('card-front');
            card.classList.add('card-back');
        });

        resetConfiguration();
    }, timeOutToFlip);
}

