import { timer } from "./Timer";
import { scoreApi } from "./api/score"

export {
    run,
    endGame
};

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

/**
 * initialise les paramètres du jeu
 */
function init() {
    cardVisible = false;
    lockBoard = false;
    timeOutToFlip = 500;
    validatedCardNumber = 0;
    scoreMax = 100000;
    nbFail = 0;
}

/**
 * lance toute la logique du jeu
 * @param {boolean} isFirst - détermine si c'est la première fois qu'on lance une partie ou non
 */
function run(isFirst = true) {
    if (isFirst) {
        playerName = prompt("Quel est ton nom ?", "Robert Paulson");
        playerName = playerName ? playerName : "John Doe";
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

/**
 * relance le jeu
 */
function restart() {
    alert("je suis sûr que tu peux faire mieux ;)");
    init();
    run(false);
    timer.init();
    timer.run();
}

/**
 * réinitialise les paramètres des cartes
 */
function resetCardConfiguration() {
    cardVisible = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

/**
 * met fin au jeu et relance une partie
 * @param {boolean} isFinished - détermine si la partie a été terminée ou si le timer a mis fin à la partie
 */
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

/**
 * calcul le score final du joueur
 */
function computeScore() {
    return Math.round(scoreMax - timer.getTimeSpentSecond() * 888 + validatedCardNumber * 2222 - nbFail * 555);
}

/**
 * enregistre le score en base de donnée
 * @param {int} score - score à enregistrer
 */
function saveScore(score) {
    let date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    scoreApi.create(date, timer.getTimeSpent(), score, playerName);
}

/**
 * montre la face visible des cartes et vérifie l'égalité entre les cartes.
 * si elles ne sont pas égales, on les retourne.
 */
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

/**
 * valide les cartes égales entre elles
 * si toutes les cartes sont valides, on met fin à la partie
 */
function validateCards() {
    [firstCard, secondCard].forEach((card) => {
        card.removeEventListener('click', revealCard);
        card.classList.add('valid');
    });

    validatedCardNumber += 2;

    if (validatedCardNumber == totalCardNumber) {
        setTimeout(() => endGame(true), 200);
    }
    resetCardConfiguration();
}

/**
 * cache les cartes après un certain temps
 */
function hideCard() {
    nbFail++;
    lockBoard = true;

    setTimeout(() => {
        [firstCard, secondCard].forEach((card) => {
            card.classList.remove('card-front');
            card.classList.add('card-back');
        });

        resetCardConfiguration();
    }, timeOutToFlip);
}

