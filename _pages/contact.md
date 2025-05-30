---
layout: page
title: Contact
permalink: /contact/
nav: true
nav_order: 6
---

<div style="text-align: center;">
  <h2>📬 Get in Touch</h2>
  <p>If you're interested in collaboration, research consulting, or just want to say hello, feel free to reach out using the form below. I'll get back to you as soon as I can.</p>
</div>

<form class="contact-form" onsubmit="sendEmail(); reset(); return false;" style="max-width: 600px; margin: auto;">
  <div style="display: grid; gap: 1rem;">
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
      <textarea id="message" rows="4" required></textarea>
    </div>
    <div>
      <input type="submit" value="Send" style="padding: 0.5rem 1rem;">
    </div>
  </div>
</form>

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
