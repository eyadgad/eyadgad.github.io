<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get form data
  $first_name = $_POST["first_name"];
  $last_name = $_POST["last_name"];
  $email = $_POST["email"];
  $major = $_POST["major"];
  $interests = $_POST["interests"];
  $social_media = $_POST["social_media"];
  $message = $_POST["message"];

  // Compose email content
  $to = "eyad.gad@outlook.com";
  $subject = "Work Request from $first_name $last_name";
  $message_body = "Name: $first_name $last_name\n";
  $message_body .= "Email: $email\n";
  $message_body .= "Major: $major\n";
  $message_body .= "Interests: $interests\n";
  $message_body .= "Social Media: $social_media\n\n";
  $message_body .= "Message:\n$message";

  // Send the email
  $headers = "From: $email\r\n";
  if (mail($to, $subject, $message_body, $headers)) {
    echo "Email sent successfully!";
  } else {
    echo "Failed to send email.";
  }
}
?>
