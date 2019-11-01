<?php

// Acceptation de toutes les origines
header("Access-Control-Allow-Origin: *");
// Formatage de la réponse au format JSON
header("Content-Type: application/json; charset=utf-8");
// acceptation de la méthode POST du protocole HTTP
header("Access-Control-Allow-Methods: POST");
// liste des headers acceptés
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With");


ini_set('html_errors', false);

/**
 * Inclusion de l'application et du repository
 */
include_once "../App.php";
include_once "../Repository/ScoreRepository.php";
include_once "../Util/Validator.php";

/**
 * objet permettant l'accès à la base de donnée
 * @var Database
 */
$db = App::getDb();

/**
 * Couche de manipulation des "Score"
 * @var ScoreRepository
 */
$scoreRepository = new ScoreRepository($db);

/**
 * Données envoyée par POST à l'url
 * @var object
 */
$data = json_decode(file_get_contents("php://input"));

/**
 * Validation des données d'entrée.
 */
if (!Validator::isDataValid($data)) {
	die ;
}

/**
 * Nouvel entité Score qui nous servira de transport des données jusqu'à la base
 * @var Score
 */
$score = new Score();
$score->started_at = $data->started_at;
$score->finished_at = $data->finished_at;
$score->score = $data->score;
$score->is_finished = $data->is_finished;

/**
 * Indique si la création du post a été correctement créée.
 * @var bool
 */
$success = $scoreRepository->createScore($score);

/**
 * Affiche le message approprié au résultat de la requête
 */
if ($success) {
	echo json_encode(
		array("id" => $db->lastId())
	);
}
else {
	echo json_encode(
		array("message" => "Erreur lors de la création du score.")
	);
}
