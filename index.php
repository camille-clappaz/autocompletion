<?php
require("bdd.php");
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body>
    <header>
        <?php require("header.php") ?>
    </header>
    <main class="d-flex justify-content-center">
        <div class="wrapper">
            <form class="search-input" role="search" method="get">
                <a href="" target="_blank" hidden></a>
                <input id="search" class="form-control me-2" type="search" placeholder="Type to search..">
                <div class="autocom-box">
                    <!-- here list are inserted from javascript -->
                </div>
                <div class="icon"><i class="fas fa-search"></i></div>
            </form>
        </div>
    </main>
    <footer></footer>
</body>

</html>
<!-- requete sql avec like pour afficher uniquement ce qu'on a chercher -->
<script src="script.js"></script>
<script src="suggestions.js"></script> 