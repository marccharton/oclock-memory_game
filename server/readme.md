# Marmelade - Partie Serveur

## contexte

- test technique pour [o'clock](https://oclock.io/blog/275/on-a-besoin-de-renforts) :clock1:.
- sujet : [Test technique - Full stack.pdf](../Test&#32;technique&#32;-&#32;Full&#32;stack.pdf)
- plus dinfo : [Dépot principal](https://github.com/marccharton/oclock-memory_game)

## utilisation

 - créer la base de données grâce au [scipt SQL](https://github.com/marccharton/oclock-memory_game/tree/master/server/create_database.sql) à la racine
 - mettre à jour le fichier [App.php](https://github.com/marccharton/oclock-memory_game/tree/master/server/src/App.php) pour l'acès à la base
 - heberger le code server sur un apache, nginx, wamp/lamp de votre choix, ou simplement avec [```php -S```](https://www.php.net/manual/fr/features.commandline.webserver.php)
 - une fois ceci fait le serveur est accessible à l'addresse suivante : ``` {votreVirtualHost}/server/src/api/ ```
