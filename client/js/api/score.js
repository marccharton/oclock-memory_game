import { apiConnector } from "../utils/ApiConnector";
import { httpRoutes } from "../utils/config";

/**
 * Couche api concernant les scores
 */
const scoreApi = {

    /**
     * Liste les scores enregistrés dans la BDD
     */
    read() {
        const readScoreListUrl = httpRoutes.score.read;
        apiConnector.get(readScoreListUrl);
    },

    /**
     * Créer un nouveau score dans la BDD
     * @param {date} started_at - temps de début de la partie
     * @param {date} finished_at - temps de fin de la partie
     * @param {int} score - score obtenu lors de la partie
     * @param {bool} is_finished - est ce que la partie est allé jusqu'au bout
     */
    create(started_at, finished_at, score, is_finished) {
        //return new Promise(function (resolve, reject) {
        const data = {
            "started_at": started_at,
            "finished_at": finished_at,
            "score": score,
            "is_finished": is_finished
        };

        const createScoreUrl = httpRoutes.score.create;

        apiConnector.post(createScoreUrl, data);
        //});
    }
};

export { scoreApi };
