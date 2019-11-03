import * as game from "./game"
import * as $ from "jquery";

class Timer {

    init(nbSecond = 10) {
        this.width = 0;
        this.intervalTime = 100;
        this.timeSpent = 0;

        this.nbSecond = nbSecond; // définiton d'une valeur par défaut pour le timer
        $('#progress-bar').width(this.width); // initiatlisation de la width à zéro. (par précaution)
    }

    run() {
        this.progressBarInterval = setInterval(() => this.increaseProgressBar(), this.intervalTime);
    }

    increaseProgressBar() {
        this.width += 100 / this.nbSecond * this.intervalTime / 1000; // calcul de la vitesse d'incrémentation en fonction du nombre de secondes total attendu
        $('#progress-bar').width(`${this.width}%`); // définition de la width
        if (this.width >= 100) {
            this.stopTimer(false);
        }
        this.timeSpent += this.intervalTime;
    }

    stopTimer(isFinished) {
        clearInterval(this.progressBarInterval);
        if (!isFinished) {
            setTimeout(() => { game.endGame(isFinished, this.timeSpent) }, 500);
        }
    }

    getTimeSpent() {
        return this.timeSpent;
    }

    getTimeSpentSecond() {
        return this.timeSpent / 1000;
    }
}

export let timer = new Timer();
