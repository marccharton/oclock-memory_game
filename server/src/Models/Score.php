<?php

class Score
{
	/**
	 * Identifiant unique
	 * @var int
	 */
	public $id;

    /**
     * date de la partie
     * @var date
     */
    public $game_date;

    /**
     * durée de la partie
     * @var int
     */
    public $game_duration;

    /**
     * nombre de points obtenus
     * @var int
     */
    public $score;

    /**
     * nom du joueur
     * @var string
     */
    public $player_name;
}
