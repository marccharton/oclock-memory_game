
export {
    httpRequest,
    httpRoutes
};


// paramètres globaux pour toutes les requêtes serveur
const httpRequest = {
    serverAddress: "http://oclock",
    port: "80",
    serverPath: "/server/src/api"
};

// liste des routes utilisables
const httpRoutes = {
    score: {
        read: "/read.php",
        create: "/create.php"
    }
};

