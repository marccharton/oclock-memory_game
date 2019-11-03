import * as game from "./game"
import * as $ from "jquery";

class Timer {

    /**
     * Initialise les paramètres concernant le timer
     * @param {int} nbSecond - nombre de secondes
     */
    init(nbSecond = 10) {
        this.width = 0;
        this.intervalTime = 100;
        this.timeSpent = 0;

        this.nbSecond = nbSecond; // définiton d'une valeur par défaut pour le timer
        $('#progress-bar').width(this.width); // initiatlisation de la width à zéro. (par précaution)
    }

    /**
     * lance le timer
     */
    run() {
        this.progressBarInterval = setInterval(() => this.increaseProgressBar(), this.intervalTime);
    }

    /**
     * augmente le contenu de la bar du timer
     */
    increaseProgressBar() {
        this.width += 100 / this.nbSecond * this.intervalTime / 1000; // calcul de la vitesse d'incrémentation en fonction du nombre de secondes total attendu
        $('#progress-bar').width(`${this.width}%`); // définition de la width
        if (this.width >= 100) {
            this.stopTimer(false);
        }
        this.timeSpent += this.intervalTime;
    }

    /**
     * arrête le timer que la partie soit gagnée ou pas
     * @param {bool} isFinished - détermine si la partie a été terminée avec succès ou non
     */
    stopTimer(isFinished) {
        clearInterval(this.progressBarInterval);
        if (!isFinished) {
            setTimeout(() => { game.endGame(isFinished, this.timeSpent) }, 500);
        }
    }

    /**
     * retourne le temps passé (en millisecondes)
     */
    getTimeSpent() {
        return this.timeSpent;
    }

    /**
     * retourne le temps passé (en secondes)
     */
    getTimeSpentSecond() {
        return this.timeSpent / 1000;
    }

} export let timer = new Timer();
