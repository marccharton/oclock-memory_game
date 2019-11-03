import { apiConnector } from "../utils/ApiConnector";
import { httpRoutes } from "../utils/config";


export {
    scoreApi
};


/**
 * Couche api concernant les scores
 */
const scoreApi = {

    /**
     * Liste les scores enregistrés dans la BDD
     */
    read() {
        const readScoreListUrl = httpRoutes.score.read;
        return apiConnector.get(readScoreListUrl);
    },

    /**
     * Créer un nouveau score dans la BDD
     * @param {date} game_date - date de la partie
     * @param {int} game_duration - durée de la partie
     * @param {int} score - score obtenu lors de la partie
     * @param {string} player_name - nom du joueur
     */
    create(game_date, game_duration, score, player_name) {
        //return new Promise(function (resolve, reject) {
        const data = {
            "game_date": game_date,
            "game_duration": game_duration,
            "score": score,
            "player_name": player_name
        };

        const createScoreUrl = httpRoutes.score.create;

        apiConnector.post(createScoreUrl, data);
        //});
    }
};

