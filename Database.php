<?php

/**
 * Classe permettant l'accès et la manipulation de la base de données
 */
class Database
{
    /**
     * nom de la base
     * @var string
     */
    private $_dbName;

    /**
     * utilisateur utilisé pour l'accès à la base
     * @var string
     */
    private $_user;

    /**
     * mot de passe utilisé pour l'accès à la base
     * @var string
     */
    private $_password;

    /**
     * adresse de connexion à la base
     * @var string
     */
    private $_host;

    /**
     * port de connexion à la base
     * @var string
     */
    private $_port;


    /**
     * instance unique de connexion à la base
     * @var PDO
     */
    private $_pdo;

    /**
     * constructeur principal
     * @param string $dbName   nom de la base
     * @param string $user     utilisateur utilisé pour l'accès à la base
     * @param string $password mot de passe utilisé pour l'accès à la base
     * @param string $host     adresse de connexion à la base
     * @param string $port     port de connexion à la base
     */
    public function __construct($dbName, $user = "root", $password = "", $host = "localhost", $port = "3308")
    {
        $this->_dbName = $dbName;
        $this->_user = $user;
        $this->_password = $password;
        $this->_host = $host;
        $this->_port = $port;
    }

    /**
     * Retourn une seule instance de la connexion à la base.
     * Si elle n'existe pas, il l'a créer.
     * @return PDO - Connexion à la base
     */
    public function getPdo()
    {
        // si la connexion n'exite pas alors on la crée.
        if ($this->_pdo == null) {
            try {

                // création de la connexion
                $pdo = new PDO(
                    "mysql:host={$this->_host}:{$this->_port};dbname={$this->_dbName}",
                    $this->_user,
                    $this->_password
                );

                // active l'affichage des erreurs SQL
                $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                // on conserve la connexion dans une propriété privée (pas touche !)
                $this->_pdo = $pdo;

            } catch (PDOException $e) { // s'il y a le moindre problème on affiche un message d'erreur avec le détail.
                echo "Erreur de connexion : " . $e->getMessage();
            }
        }

        return $this->_pdo;
    }

    /**
     * Préparation de la requête. Transforme une string en un object de requête
     * @param  string $statement requête brute, avec potentiellement des paramètres
     * @return PDOStatement      requête préparée
     */
    public function prepare($statement) {
        return $this->getPdo()->prepare($statement);
    }

    /**
     * Execute la requête après l'avoir préparé
     * @param  string $statement requête brute, avec potentiellement des paramètres
     * @return PDOStatement           requête exécutée, donc après communication avec la base
     */
    public function query($statement)
    {
        $request = $this->prepare($statement);
        $request->execute();
        return $request;
    }

    /**
     * Permet de connaitre l'id du dernier élément inséré dans la BDD.
     * @return int dernier id inséré dans la base
     */
    public function lastId() {
        return $this->getPdo()->lastInsertId();
    }

}
