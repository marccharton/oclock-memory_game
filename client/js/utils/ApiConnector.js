import { httpRequest } from "./config.js"
import * as $ from "jquery";

/**
 * Couche de connection à l'api du serveur
 */
class ApiConnector {

    /**
     * Construction par défaut : définit les paramètres de la connexion à l'api du serveur
     */
    constructor() {

        // url d'accès au serveur (voir la configuration)
        this.apiBaseUrl = `${httpRequest.serverAddress}:${httpRequest.port}/${httpRequest.serverPath}`;

        // ensemble des routes accessibles du serveur
        this.url = {
            score: {
                read: "read.php",
                create: "create.php"
            }
        };

        // paramètres de la requête envoyée au serveur
        this.settings = {
            async: true,
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };
    }

    /**
     * envoie une requête GET au serveur
     * @param {string} route - chemin d'accès de la donnée
     */
    get(route) {
        this.settings.method = "GET";
        this.settings.url = `${this.apiBaseUrl}/${route}`;
        return this.send(this.settings);
    }

    /**
     * envoie une requêt POST au serveur
     * @param {string} route - chemin d'accès de la donnée
     * @param {object} data - paramètres à envoyer au serveur
     */
    post(route, data) {
        this.settings.method = "POST";
        this.settings.url = `${this.apiBaseUrl}/${route}`;
        this.settings.data = JSON.stringify(data);
        this.send(this.settings);
    }

    /**
    * permet d'envoyer une requête au serveur
    * @param {Object} settings - paramètres de configuration spécifiques pour la requête
    */
    send(settings) {
        return $.ajax(settings);
    }

} export let apiConnector = new ApiConnector();
