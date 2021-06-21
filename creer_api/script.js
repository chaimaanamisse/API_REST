let req = new XMLHttpRequest();

// on s'accroche au changement d'état

// ouvrir la transaction et présices à cet objet vers quel élement il va devoir pointer 
// "le serveur" et sous quelle format càd la méthode qu'on utilisera

// sur notre objet on ouvre la connexion

req.open("GET", "http://localhost/creer_api/produits/lire.php)", false);

// false donne l'instruction à notre objet de fonctionner en mode synchrone
// càd tant qu'il n'aura pas recu de reponse du serveur le traitement va etre interrompue le code javascript 
// ne continue pas à s'exécuter

req.send();

if(req.status == 200){
    console.log(req);
    console.log("ça fonctionne");
}else{
    console.log("erreur");
}