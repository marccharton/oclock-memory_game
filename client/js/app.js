import * as $ from "../node_modules/jquery/dist/jquery.js";
import * as pouet from "./pouet.js";

window.$ = $;

$(document).ready(function () {
    // pouet.myAlert("pouetpouet");

    var button = $('<button> Call Back </button>');
    button.click(() => sendRequest());
    $("body").append(button);

    sendRequest();

});


function sendRequest() {
    let apiBaseUrl = "http://oclock/server/src/api";

    let url = {
        score: {
            read: "read.php",
            create: "create.php"
        }
    }

    let score = {
        "started_at": "2019-10-17",
        "finished_at": "2019-10-14",
        "score": Math.floor(Math.random() * 100000),
        "is_finished": "1"
    };

    let createRoute = {
        method : "POST",
        url: `${apiBaseUrl}/${url.score.create}`
    }

    let readRoute = {
        method : "GET",
        url: `${apiBaseUrl}/${url.score.read}`
    }

    let route = createRoute;

    const settings = {
        async: true,
        crossDomain: true,
        url: route.url,
        method: route.method,
        headers: {
             "Accept": "*/*",
        },
        data: JSON.stringify(score)
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}
