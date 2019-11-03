
# Marmelade

(allez je vais quand même faire les readme en français :wink:)

## contexte

ce jeu a été développé dans le cadre d'un test technique pour la société [o'clock](https://oclock.io/blog/275/on-a-besoin-de-renforts) :clock1:. <br/>
lien vers le sujet : [Test technique - Full stack.pdf](Test&#32;technique&#32;-&#32;Full&#32;stack.pdf)

## contenu

 - [un client](https://github.com/marccharton/oclock-memory_game/tree/master/client)
 - [un serveur](https://github.com/marccharton/oclock-memory_game/tree/master/server)

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
 - utilisation de jquery avec parcimonie pour montrer 2 approches
 - utilisation de quelques outils
 - une stack utilisant webpack pour l'exemple

#### serveur
 - utilisation de php simple pour voir qu'un framework n'est pas obligatoire
 - une structure assez simple en couches pour comprendre l'intérêt d'organiser son code

## aperçu

<img height="500px" alt="Marmelade" src="oclock - marmelade.PNG" />
