class ApiConnector {

    constructor() {
        this.apiBaseUrl = "http://oclock/server/src/api"
        this.url = {
            score: {
                read: "read.php",
                create: "create.php"
            }
        }
    }

    /**
     * Créer un nouveau score dans la BDD
     */
    createScore() {

        // TODO: création du score avec vraies data.

        let score = {
            "started_at": "2019-10-17",
            "finished_at": "2019-10-14",
            "score": Math.floor(Math.random() * 100000),
            "is_finished": "1"
        };

        this.sendRequest({
            method: "POST",
            url: `${this.apiBaseUrl}/${this.url.score.create}`,
            data: score
        });

    }

    /**
     * Liste les scores enregistrés dans la BDD
     */
    readScoreList() {
        this.sendRequest({
            method: "GET",
            url: `${this.apiBaseUrl}/${this.url.score.read}`
        });
    }

    /**
     * permet d'envoyer une requête à une route du serveur
     * @param {Object} params - paramètres de configuration d'une route spécifique
     */
    sendRequest(params) {

        const settings = {
            async: true,
            crossDomain: true,
            url: params.url,
            method: params.method,
            headers: {
                "Accept": "*/*",
            },
            data: JSON.stringify(params.data)
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }


}
export let apiConnector = new ApiConnector();
