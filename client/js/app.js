import '../style/scss/main.scss';

import * as $ from "jquery";
import { scoreApi } from "./api/score"
import * as game from "./game"

$(document).ready(function () {

    var readButton = $('<button> Voir Scores </button>');
    readButton.click(() => readScore());
    $("body").append(readButton);

    var createButton = $('<button> Créer Score </button>');
    createButton.click(() => createScore());
    $("body").append(createButton);

    game.init(document.querySelectorAll('.card'));

});

function readScore() {
    scoreApi.read();
}

function createScore() {
    // var currentDate = new Date();
    // scoreApi.create(currentDate, currentDate, Math.floor(Math.random() * 100000), "1")
    scoreApi.create("2019-10-17", "2019-10-14", Math.floor(Math.random() * 100000), "1")
}
