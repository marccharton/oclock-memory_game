<?php

// Acceptation de toutes les origines
header("Access-Control-Allow-Origin: *");
// Formatage de la réponse au format JSON
header("Content-Type: application/json");

/**
 * Inclusion de l'application et du repository
 */
include_once "../App.php";
include_once "../Repository/ScoreRepository.php";

/**
 * classe d'accès à la base de donnée
 * @var Database
 */
$db = App::getDb();

/**
 * Couche de manipulation des "Score"
 * @var ScoreRepository
 */
$scoreRepository = new ScoreRepository($db);


/**
 * Liste des entrée "Score" présentes dans la base
 * @var array
 */
$scoreList = $scoreRepository->getScoreList();

/**
 * Renvoi de la liste au format JSON
 */
echo json_encode($scoreList);

