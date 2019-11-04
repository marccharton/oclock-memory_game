
export {
    httpRequest,
    httpRoutes
};


// paramètres globaux pour toutes les requêtes serveur
const httpRequest = {
    port: "80",
    serverAddress: "http://localhost",
    serverPath: "/src/api"
};

// liste des routes utilisables
const httpRoutes = {
    score: {
        read: "/read.php",
        create: "/create.php"
    }
};

