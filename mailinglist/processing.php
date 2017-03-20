<?php

// connection
function Connect() {
 $dbhost = "localhost";
 $dbuser = "root";
 $dbpass = "root";
 $dbname = "list-ten";

 // Create connection
 $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname) or die($conn->connect_error);

 return $conn;
}

// processing
$conn    = Connect();
$email   = $_POST['u_email'];
$query   = "INSERT into mailinglist (u_email) VALUES('$email')";
$success = $conn->query($query);

if (!$success) {
  die("Couldn't enter data: ".$conn->error);
}

// echo "Thank You For Contacting Us <br>";

$conn->close();

?>
