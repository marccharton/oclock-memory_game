<?php
class ScoreRepository
{
    private $db;
    private $table = "scores";

    public $id;
    public $started_at;
    public $finished_at;
    public $score;
    public $is_finished;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function query() {
        $statement = "SELECT * FROM {$this->table}";
        return $this->db->query($statement);
    }

    public function getScoreList()
    {
        $result = $this->query();
        $scoreList = array();

        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            extract($row);

            $scoreItem = array(
                "id" => $id,
                "started_at" => $started_at,
                "finished_at" => $finished_at,
                "score" => $score,
                "is_finished" => $is_finished,
            );

            array_push($scoreList, $scoreItem);
        }

        return $scoreList;
    }
}
