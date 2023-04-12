<?php
require("bdd.php");

if(isset($_GET['search'])){
    $search = $_GET['search'];
    $requete = $bdd->prepare('SELECT * FROM grimpeurs WHERE prenom LIKE :search OR nom LIKE :search' );
    $requete->execute(array('search' => '%'.$search.'%'));

}
if(isset($_GET['id'])){
    $id = $_GET['id'];
    $requete = $bdd->prepare('SELECT * FROM grimpeurs WHERE id= :id' );
    $requete->execute(array('id' => $id));

}


$result = $requete->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($result);

?>
 