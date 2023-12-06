<?php
function connect() {
    static $conn;
    if ($conn === NULL){ 
        $conn = mysqli_connect('localhost','root','','social_media');
    }
    return $conn;
}
?>