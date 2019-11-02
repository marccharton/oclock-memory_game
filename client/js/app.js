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

    //let timerId = setInterval(() => increaseProgressBar(), 1000);
    game.init(document.querySelectorAll('.card'));

    var progressBar = $('#progress-bar'), width = 0;
    progressBar.width(width);

    var interval = setInterval(function () {
        width += 1;
        $('#progress-bar').width(width);
        if (width >= 100) {
            clearInterval(interval);
        }
    }, 100);

    console.log($("#progress-bar"));
});

function readScore() {
    scoreApi.read();
}

function createScore() {
    // var currentDate = new Date();
    // scoreApi.create(currentDate, currentDate, Math.floor(Math.random() * 100000), "1")
    scoreApi.create("2019-10-17", "2019-10-14", Math.floor(Math.random() * 100000), "1")
}

function increaseProgressBar() {
    let current = document.getElementsByClassName("progress-bar")[0].style.width;
    console.log(current);
    document.getElementsByClassName("progress-bar")[0].style.width = "70%";
}
