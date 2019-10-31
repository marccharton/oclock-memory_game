import * as $ from "../node_modules/jquery/dist/jquery.js";
import { apiConnector } from "./ApiConnector.js"

window.$ = $;

$(document).ready(function () {
    // pouet.myAlert("pouetpouet");

    var readButton = $('<button> Voir Scores </button>');
    readButton.click(() => apiConnector.readScoreList());
    $("body").append(readButton);

    var createButton = $('<button> Créer Score </button>');
    createButton.click(() => apiConnector.createScore());
    $("body").append(createButton);

});
