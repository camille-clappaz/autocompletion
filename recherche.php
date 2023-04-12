<?php
require("bdd.php");

if(isset($_GET['search'])){
    $search = $_GET['search'];
    $requete = $bdd->prepare('SELECT * FROM grimpeurs WHERE prenom LIKE :search OR nom LIKE :search' );
    $requete->execute(array('search' => $search.'%'));

}
if(isset($_GET['search2'])){
    $search2 = $_GET['search2'];
    $requete = $bdd->prepare('SELECT * FROM grimpeurs WHERE prenom LIKE :search2 OR nom LIKE :search2' );
    $requete->execute(array('search2' => '%'.$search2.'%'));

}
if(isset($_GET['recherche'])){
    $recherche = $_GET['recherche'];
    $requete = $bdd->prepare('SELECT * FROM grimpeurs WHERE prenom LIKE :recherche OR nom LIKE :recherche' );
    $requete->execute(array('recherche' => $recherche.'%'));

}
if(isset($_GET['recherche2'])){
    $recherche2 = $_GET['recherche2'];
    $requete = $bdd->prepare('SELECT * FROM grimpeurs WHERE prenom LIKE :recherche2 OR nom LIKE :recherche2' );
    $requete->execute(array('recherche2' => '%'.$recherche2.'%'));

}

if(isset($_GET['id'])){
    $id = $_GET['id'];
    $requete = $bdd->prepare('SELECT * FROM grimpeurs WHERE id= :id' );
    $requete->execute(array('id' => $id));

}


$result = $requete->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($result);

?>
 