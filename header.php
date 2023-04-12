<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Autocompletion</title>
</head>

<body>
    <nav>
        <div>
            <a class="acceuil" href="index.php">
                <img class="prise" src="./img/prise.png" alt="logo">
            </a>
        </div>
        <div class="searchInputWrapper">
            <form action="" method="get">
                <a href="" target="_blank" hidden></a>
                <input type="text" id="recherche" placeholder="Search your favorite climber..">
                <div class="autocom-box3">
                    <!-- here list are inserted from javascript -->
                </div>
                <hr class="my-4 ">
                <div class="autocom-box4">
  <!-- here list are inserted from javascript -->
                </div>
                <i class="searchInputIcon fa fa-search"></i>

            </form>
        </div>

    </nav>
</body>

</html>