<?php
$land = $_SERVER['HTTP_CF_IPCOUNTRY'];
$besucherInfo = "Nutzer aus $land hat die Webseite besucht";
file_put_contents('besucher.txt', $besucherInfo, FILE_APPEND);
?>
