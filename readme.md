# memory game

## contexte

ce jeu a été développé dans le cadre d'un test technique pour la société [o'clock](https://oclock.io/blog/275/on-a-besoin-de-renforts) :clock1:. <br/>
lien vers le sujet : [Test technique - Full stack.pdf](../Test&#32;technique&#32;-&#32;Full&#32;stack.pdf)

## contenu

 - [un client](https://github.com/marccharton/oclock-memory_game/tree/feature/frontend/client)
 - [un serveur](https://github.com/marccharton/oclock-memory_game/tree/feature/frontend/server)

## approche

### communication
 - la communication entre les deux parties se fait par le biais d'une API.
 - le format de communication des données est le JSON

### technologies
 - le backend est développé en PHP, sans framework.
 - le frontend est développé en javascript
 - la base de donnée est en SQL

### choix techniques

De manière général, j'ai cherché un bon compromis entre pédagogie, adaptation aux besoins et clareté.

#### client
 - coté front j'ai choisi d'utiliser des bonnes pratiques ES6
 - le but étant d'avoir un exemple de code moderne
 - adapté aux besoins actuels du marché
 - permettre également une meilleure compréhension de framework comme react avec de la génération de dom coté JS plutôt que de binder le DOM à des fonctions diverses.

#### serveur
 - utilisation de php simple pour voir qu'un framework n'est pas obligatoire
 - une structure assez simple en couches pour comprendre l'intérêt d'organiser son code

