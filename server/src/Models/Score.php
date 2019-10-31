<?php

class Score
{
	/**
	 * Identifiant unique
	 * @var int
	 */
	public $id;

	/**
	 * début du jeu
	 * @var date
	 */
    public $started_at;

    /**
     * fin du jeu
     * @var date
     */
    public $finished_at;

    /**
     * nombre de points obtenus
     * @var int
     */
    public $score;

    /**
     * le joueur a t-il fini le jeu ?
     * @var bool
     */
    public $is_finished;
}
