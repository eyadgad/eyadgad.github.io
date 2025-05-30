---
layout: page
title: Contact
permalink: /contact/
nav: true
nav_order: 7
---

# 📬 Get in Touch

If you're interested in collaboration, research consulting, or just want to say hello, feel free to reach out using the form below. I’ll get back to you as soon as I can.

<form class="work-request" onsubmit="sendEmail(); reset(); return false;">
  <div class="work-request--information">
    <div class="information-name">
      <label for="first-name">First Name</label>
      <input id="first-name" type="text" spellcheck="false" required>
    </div>
    <div class="information-name">
      <label for="last-name">Last Name</label>
      <input id="last-name" type="text" spellcheck="false" required>
    </div>
    <div class="information-email">
      <label for="email">Email</label>
      <input id="email" type="email" spellcheck="false" required>
    </div>
    <div class="information-major">
      <label for="major">Major</label>
      <input id="major" type="text" spellcheck="false">
    </div>
    <div class="information-interests">
      <label for="interests">Interests</label>
      <input id="interests" type="text" spellcheck="false">
    </div>
    <div class="information-social">
      <label for="social-media">Social Media</label>
      <input id="social-media" type="text" spellcheck="false">
    </div>
    <div class="information-boxmsg">
      <label for="message">Message</label>
      <textarea id="message" rows="4" spellcheck="false" required></textarea>
    </div>
  </div>
  <br><br>
  <input type="submit" value="Send">
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
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("major").value = "";
    document.getElementById("interests").value = "";
    document.getElementById("social-media").value = "";
    document.getElementById("message").value = "";
  }
</script>
