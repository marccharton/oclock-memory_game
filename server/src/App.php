<?php

require "Database.php";

/**
 * Classe principale de l'application serveur.
 * Sert principalement de surcouche à la confguration et l'accès aux données.
 */
class App {

    /**
     * Constantes de configuration de l'accès à la base de données
     */
    const DB_NAME = "memory_game";
    const DB_USER = "root";
    const DB_PASS = "";
    const DB_HOST = "localhost";
    const DB_PORT = "3306";

    /**
     * Object d'accès et de manipulation de la base de données.
     * @var Database
     */
    private static $database;

    /**
     * S'assure de retourner toujours la même instance d'accès à la base de données.
     * @return Database - Object d'accès et de manipulation de la base de données.
     */
    public static function getDb() {
        if (self::$database == null) {
            self::$database = new Database(self::DB_NAME,
                                           self::DB_USER,
                                           self::DB_PASS,
                                           self::DB_HOST,
                                           self::DB_PORT);
        }
        return self::$database;
    }

}
