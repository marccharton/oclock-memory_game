<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include_once "../App.php";
include_once "../Repository/ScoreRepository.php";

$db = App::getDb();
$scoreRepository = new ScoreRepository($db);
$scoreList = $scoreRepository->getScoreList();

echo json_encode($scoreList);
