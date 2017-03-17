<?php

require 'connection.php';
$conn    = Connect();
$email   = $conn->real_escape_string($_POST['u_email']);
$query   = "INSERT into mailinglist (u_email) VALUES('$email')";
$success = $conn->query($query);

if (!$success) {
  die("Couldn't enter data: ".$conn->error);
}

echo "Thank You For Contacting Us <br>";

$conn->close();

?>
