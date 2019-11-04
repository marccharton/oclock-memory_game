import '../style/scss/main.scss';

import * as $ from "jquery";
import 'bootstrap';

import { scoreApi } from "./api/score";
import * as game from "./game";
import { timer } from "./Timer";
import { openModal, bindModalButton } from "./utils/modal";

$(document).ready(function () {

    showScoreModal(() => {
        launchGame();
    });

});

/**
 * lance le jeu après la lecture des scores
 */
function launchGame() {
    game.run();
    timer.init();
    timer.run();
}

/**
 * affiche la liste des scores en BDD.
 * @param {Object} scoreList - liste des scores en BDD
 */
function showScoreModal(callback) {

    // une fois la liste des scores récupérées, on attaque.
    scoreApi.read().done((scoreList) => {
        openModal(getMessageScoreList(scoreList), "liste des scores", "jouer");
        bindModalButton(callback);
    }).fail(() => {
        alert("Problème de connexion avec le serveur");
    });

}

function getMessageScoreList(scoreList) {
    let message = "";
    let date;

    // si la liste des scores est vide alors on affiche un message pour l'indiquer à l'utilisateur
    if (scoreList.length <= 0) {
        message = "aucun score en base pour l'instant ;) <br/> on compte sur toi pour la remplir !";
    }
    // on parcourt la liste et on met en forme le texte
    else {
        for (let scoreIndex in scoreList) {
            date = new Date(scoreList[scoreIndex].game_date);
            message += `<b>${scoreList[scoreIndex].player_name}</b>`;
            message += " [" + `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear().toString().substr(-2)} ${date.getHours()}:${date.getMinutes()}` + "] = ";
            message += scoreList[scoreIndex].score;
            message += ` (${scoreList[scoreIndex].game_duration / 1000}s)`;
            message += "<br />";
        }
    }

    return message;
}



