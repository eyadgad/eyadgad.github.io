---
layout: page
title: Contact
permalink: /contact/
nav: true
nav_order: 6
---

<style>
  body {
    background-color: #0e0e0e;
    font-family: 'Inter', sans-serif;
    color: #fff;
  }

  h2 {
    font-size: 2em;
    margin-top: 2rem;
    text-align: center;
  }

  p {
    color: #ccc;
    margin-bottom: 2rem;
    text-align: center;
  }

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    max-width: 900px;
    width: 100%;
    margin: auto;
    padding: 2rem;
  }

  form div {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 0.3rem;
    font-size: 0.9rem;
    color: #ccc;
  }

  input, textarea {
    padding: 0.7rem;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #aaa;
    color: #fff;
    font-size: 1rem;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
    grid-column: span 2;
  }

  .submit-button {
    grid-column: span 2;
    text-align: center;
  }

  .submit-button input {
    padding: 0.8rem 2rem;
    background-color: #8a2be2;
    color: #fff;
    font-weight: bold;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;
  }

  .submit-button input:hover {
    background-color: #6d22b9;
  }

  @media (max-width: 700px) {
    form {
      grid-template-columns: 1fr;
    }

    textarea, .submit-button {
      grid-column: span 1 !important;
    }
  }
</style>

<p>If you're interested in research collaboration, or just want to say hello, feel free to reach out using the form below, or send me directly at <a href="mailto: eyad.gad@outlook.com">

<form onsubmit="sendEmail(); reset(); return false;">
  <div>
    <label for="first-name">First Name</label>
    <input id="first-name" type="text" required>
  </div>
  <div>
    <label for="last-name">Last Name</label>
    <input id="last-name" type="text" required>
  </div>
  <div>
    <label for="email">Email</label>
    <input id="email" type="email" required>
  </div>
  <div>
    <label for="major">Major</label>
    <input id="major" type="text">
  </div>
  <div>
    <label for="interests">Interests</label>
    <input id="interests" type="text">
  </div>
  <div>
    <label for="social-media">Social Media</label>
    <input id="social-media" type="text">
  </div>
  <div>
    <label for="message">Message</label>
    <textarea id="message" required></textarea>
  </div>
  <div class="submit-button">
    <input type="submit" value="SEND">
  </div>
</form>

<script src="https://smtpjs.com/v3/smtp.js"></script>
<script>
  function sendEmail() {
    Email.send({
      SecureToken : "ca50e35e-1226-4e05-b8f9-e4a157867869",
      To : 'eyad.gad@outlook.com',
      From : "eyademg1@gmail.com",
      Subject: "New Message from Eyad Gad's Website",
      Body: "Name: " + document.getElementById("first-name").value + " " + document.getElementById("last-name").value
        + "<br>Email: " + document.getElementById("email").value
        + "<br>Major: " + document.getElementById("major").value
        + "<br>Interests: " + document.getElementById("interests").value
        + "<br>Social Media: " + document.getElementById("social-media").value
        + "<br>Message: " + document.getElementById("message").value
    }).then(message => alert("Your message has been sent successfully!"));
  }

  function reset() {
    ['first-name', 'last-name', 'email', 'major', 'interests', 'social-media', 'message'].forEach(id => {
      document.getElementById(id).value = "";
    });
  }
</script>
