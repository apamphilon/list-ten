<?php

function Connect() {
 $dbhost = "localhost";
 $dbuser = "root";
 $dbpass = "root";
 $dbname = "list-ten";

 // Create connection
 $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname) or die($conn->connect_error);

 return $conn;
}

?>
