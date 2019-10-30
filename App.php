<?php

require "Database.php";

class App {

    const DB_NAME = "memory_game";
    const DB_USER = "root";
    const DB_PASS = "";
    const DB_HOST = "localhost";
    const DB_PORT = "3308";

    private static $database;

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

    public static function notFound() {
        header("HTTP/1.0 404 Not Found");
        header("Location:index.php?p=404");
    }
}
