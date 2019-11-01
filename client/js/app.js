import * as $ from "../node_modules/jquery/dist/jquery.js";
// import { apiConnector } from "./utils/ApiConnector.js"
import { scoreApi } from "./api/score.js"

window.$ = $;

$(document).ready(function () {

    var readButton = $('<button> Voir Scores </button>');
    readButton.click(() => readScore());
    $("#app").append(readButton);

    var createButton = $('<button> Créer Score </button>');
    createButton.click(() => createScore());
    $("#app").append(createButton);

});

function readScore() {
    scoreApi.read();
}

function createScore() {
    scoreApi.create("2019-10-17", "2019-10-14", Math.floor(Math.random() * 100000), "1")
}
