<?php

session_start();
//var_dump($_GET);
$_SESSION["colour"] = $_GET["colour"];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Other</title>
</head>
<body>
    The colour has been set to <?=$_GET["colour"]?>.
    <a href="index.php">Home</a>
</body>
</html>