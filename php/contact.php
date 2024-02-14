<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Email details
    $to = "softwarekingaman@gmail.com"; // Change to your email
    $subject = "New Contact Form Submission";
    $body = "First Name: $firstName\nLast Name: $lastName\nEmail: $email\nPhone: $phone\nMessage: $message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo "Message sent successfully!";
    } else {
        echo "Error: Unable to send message.";
    }
}
?>
