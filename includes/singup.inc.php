<?php

if(isset($_POST['submit'])){
    
    include_once 'dbh.inc.php';
    
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    
    //Error handlers
    if(empty($username) || empty($email) || empty($password)){
        header("Location: ../create.html?signup=empty");
        exit();
    } else {
        //Check if valid
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            header("Location: ../crete.html?signup=notvalidemail");
            exit();
        } else {
            $sql = "SELECT * FORM users WHERE user_first='$username'";
            $result = mysqli_query($conn, $sql);
            $resultCheck = mysqli_num_rows($result);
            
            if ($resultCheck > 0) {
                header("Loccaion: ../create.html?signup=usertaken");
                exit();
            } else{
                //hashing the password
                $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
                //Insert the user into the database
                $sql = "INSERT INTO users (username, email, password) VALUES ('$username','$email', '$hashedPassword');";
                mysqli_query($conn, $sql);
                header("Loccaion: ../index.html?signup=success");
                exit();
            }
        }
    }
}
else {
    header("Location: ../create.html");
    exit();
}