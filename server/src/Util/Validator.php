<?php

class Validator
{

    public static function isDataValid($data)
    {
        $messageList = (object)array();

        // vérification de l'existence des données d'entrée
        if (!isset($data) || !is_object($data)) {
            $messageList->data = "Bad input data" . isset($data) ? $data : "";
        }

        // vérification de l'existence des propriétés de manière dynamique
        $propertyNameList = array("game_date", "game_duration", "score", "player_name");
        foreach ($propertyNameList as $propertyName) {
            $messageList = self::checkIfProperyExist($data, $propertyName, $messageList);
        }

        if (!empty((array)$messageList)) {
            echo json_encode(
                array("message" => $messageList)
            );
            return false;
        }

        return true;
    }

    public static function checkIfProperyExist($data, $propertyName, $messageList)
    {
        if (!isset($data->$propertyName) || is_object($data->$propertyName)) {
            $messageList->$propertyName = "Not set or not an object";
        }
        return $messageList;
    }
}
