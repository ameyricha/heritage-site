<!-- login.php -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Here, you would typically perform authentication checks with a database.
    // For simplicity, we're just echoing the submitted data.
    echo "Username: $username <br>";
    echo "Password: $password <br>";
}
?>
