<?php

include_once "../Models/Score.php";

/**
 * Couche de manipulation des scores
 * Contient toutes les manipulations concernant les scores et la communication avec la base.
 * Permet plus de souplesse.
 */
class ScoreRepository
{
    /**
     * Object d'accès et de manipulation de la base de données
     * @var Database
     */
    private $db;

    /**
     * Nom de table associée au repository
     * @var string
     */
    private $table = "scores";

    /**
     * Construction de l'objet, permet simplement de faire le lien avec l'objet de manipulation de la BDD.
     * @param Database $db Object d'accès et de manipulation de la base de données
     */
    public function __construct($db)
    {
        $this->db = $db;
    }

    /**
     * Retourne la liste des scores enregistrés en BDD
     * @return array Lite des scores en BDD
     */
    public function getScoreList()
    {
        // création de la requête
        $statement = "SELECT * FROM {$this->table}";

        // exécution de la requête
        $result = $this->db->query($statement);

        // création de la liste des score à retourner
        $scoreList = array();

        // on récupère chaque ligne une par une dans une boucle
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {

            // utilisation de chaque colonnes sous forme de variable
            extract($row);

            // création d'un objet contenant toutes les propriétés de la ligne actuelle
            $scoreItem = array(
                "id" => $id,
                "started_at" => $started_at,
                "finished_at" => $finished_at,
                "score" => $score,
                "is_finished" => $is_finished,
            );

            // on ajoute cet objet à la liste des objets à retourner
            array_push($scoreList, $scoreItem);
        }

        return $scoreList;
    }

    /**
     * Création d'un score en BDD
     * @param  Score $score le score à créer
     * @return bool        résulat de la création
     */
    public function createScore($score) {

        // création de la requête
        $statement = "
            INSERT INTO {$this->table}
            SET started_at = :started_at,
                finished_at = :finished_at,
                score = :score,
                is_finished = :is_finished
        ";

        // préparation de la requête
        $request = $this->db->prepare($statement);

        // parcours des propriétés de manière dynamique
        $propList = array("started_at", "finished_at", "score", "is_finished");
        foreach($propList as $prop){

            // échappement des caractères spéciaux HTML
            $score->$prop = htmlspecialchars($score->$prop);

            // lien avec mes données
            $request->bindParam($prop, $score->$prop);
        }

        // execution de la requête :
        //      - si elle réussi on retourne true pour dire que tout va bien
        //      - sinon on affiche un message d'erreur avec le détail et on retourn false
        if ($request->execute()) {
            return true;
        }
        echo "Erreur lors de la création du score : {$request->error}";
        return false;

    }
}
