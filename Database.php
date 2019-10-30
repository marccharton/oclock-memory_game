<?php

class Database
{
    private $_dbName;
    private $_user;
    private $_password;
    private $_host;
    private $_port;

    private $_pdo;

    public function __construct($dbName, $user = "root", $password = "", $host = "localhost", $port = "3308")
    {
        $this->_dbName = $dbName;
        $this->_user = $user;
        $this->_password = $password;
        $this->_host = $host;
        $this->_port = $port;
    }

    public function getPdo()
    {
        if ($this->_pdo == null) {
            try {
                $pdo = new PDO(
                    "mysql:host={$this->_host}:{$this->_port};dbname={$this->_dbName}",
                    $this->_user,
                    $this->_password
                );
                $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // active l'affichage des erreurs SQL
                $this->_pdo = $pdo;
            } catch (PDOException $e) {
                echo "Erreur de connexion : " . $e->getMessage();
            }
        }

        return $this->_pdo;
    }

    public function query($statement)
    {
        $req = $this->getPdo()->prepare($statement);
        $req->execute();
        return $req;
    }

}
