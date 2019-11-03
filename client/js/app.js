import '../style/scss/main.scss';

import * as $ from "jquery";
import { scoreApi } from "./api/score"
import * as game from "./game"
import { timer } from "./Timer"

$(document).ready(function () {
    launchGame();
});

/**
 * lance le jeu après la lecture des scores
 */
function launchGame() {
    scoreApi.read().done((scoreList) => {
        showScore(scoreList);
        game.run();
        timer.init();
        timer.run();
    });
}

/**
 * affiche la liste des scores en BDD.
 * @param {Object} scoreList - liste des scores en BDD
 */
function showScore(scoreList) {
    let message = "Voici la liste des scores : \n";

    for (let scoreIndex in scoreList) {
        message += scoreList[scoreIndex].player_name;
        message += " [" + scoreList[scoreIndex].game_date + "] = ";
        message += scoreList[scoreIndex].score;
        message += `en (${scoreList[scoreIndex].game_duration / 1000}s)\n`;
    }

    alert(message);
}
