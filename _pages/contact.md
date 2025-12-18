---
layout: page
title: Contact
hide_title: true
permalink: /contact/
nav: true
nav_order: 6
---

<div class="post">
  <h1>Get in touch</h1>
  <p>If you’d like to collaborate or reach out, the fastest way is email.</p>
  {% assign email_addr = site.data.socials.email %}
  {% if email_addr and email_addr != "" %}
    <p><a href="mailto:{{ email_addr | encode_email }}">{{ email_addr }}</a></p>
  {% endif %}
</div>
