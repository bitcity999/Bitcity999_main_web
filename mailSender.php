<?php

$to = "bitcity999@gmail.com";
$subject = $_POST["usrname"];
$message = $_POST["subject"];
$from = $_POST["usrmail"];
$headers = "From:" . $from;

mail($to,$subject,$message,$headers)

?>