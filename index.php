<?php
require("bdd.php");
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body>
<?php require("header.php") ?>
    
    <h1>La montagne ça vous gagne!</h1>
    <main >
        <div class="wrapper ">
            <form class="search-input"  method="get">
                <a href="" target="_blank" hidden></a>
                <input id="search" class="form-control me-2" type="text" placeholder="Search your favorite climber.." autocomplete="off">
                <div class="autocom-box">
                    <!-- here list are inserted from javascript -->
                </div>
                <hr class="my-4">
                <div class="autocom-box2">

                </div>
                
            </form>
        </div>
       
    </main>
    <footer></footer>
</body>

</html>
<script src="script.js"></script>
