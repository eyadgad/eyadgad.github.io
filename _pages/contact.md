---
layout: page
title: Contact
hide_title: true
permalink: /contact/
nav: true
nav_order: 6
---

{% assign socials = site.data.socials | default: empty %}
{% assign email_addr = socials.email %}
{% assign github_user = socials.github_username %}
{% assign linkedin_user = socials.linkedin_username %}
{% assign scholar_id = socials.scholar_userid %}

<style>
  .ct-page {
    --ct-accent: var(--global-theme-color);
    --ct-card-bg: var(--global-card-bg-color);
    --ct-text: var(--global-text-color);
    --ct-muted: var(--global-text-color-light);
    --ct-divider: var(--global-divider-color);
    --ct-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }

  html[data-theme="dark"] .ct-page {
    --ct-shadow: 0 14px 46px rgba(0, 0, 0, 0.30);
  }

  .ct-wrap {
    max-width: 980px;
    margin: 0 auto;
  }

  .ct-hero {
    margin: 0 0 1.25rem;
  }

  .ct-title {
    margin: 0;
    font-weight: 900;
    letter-spacing: -0.03em;
  }

  .ct-subtitle {
    margin: 0.55rem 0 0;
    color: var(--ct-muted);
    max-width: 70ch;
  }

  .ct-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.9rem;
    margin-top: 1rem;
  }

  .ct-card {
    border: 1px solid var(--ct-divider);
    background: var(--ct-card-bg);
    border-radius: 14px;
    padding: 1.05rem 1.15rem;
    box-shadow: var(--ct-shadow);
  }

  .ct-card-title {
    margin: 0;
    font-weight: 900;
    letter-spacing: -0.02em;
    color: var(--ct-text);
    font-size: 1.05rem;
  }

  .ct-card-desc {
    margin: 0.55rem 0 0;
    color: var(--ct-muted);
    line-height: 1.55;
  }

  .ct-actions {
    margin-top: 0.85rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }

  .ct-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    padding: 0.75rem 0.95rem;
    border-radius: 12px;
    border: 1px solid var(--ct-divider);
    background: color-mix(in srgb, var(--ct-accent) 10%, transparent);
    color: var(--ct-text);
    text-decoration: none;
    font-weight: 900;
    letter-spacing: -0.01em;
    line-height: 1;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    transition: transform 160ms ease, border-color 160ms ease;
  }

  .ct-btn:hover {
    transform: translateY(-2px);
    border-color: color-mix(in srgb, var(--ct-accent) 45%, var(--ct-divider));
    text-decoration: none;
  }

  .ct-btn:active {
    transform: translateY(0) scale(0.99);
  }

  .ct-btn:focus {
    outline: none;
  }

  .ct-btn:focus-visible {
    border-color: var(--ct-accent);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--ct-accent) 22%, transparent);
  }

  @supports not (color: color-mix(in srgb, #000 50%, #fff)) {
    .ct-btn {
      background: transparent;
    }
  }

  @media (min-width: 900px) {
    .ct-grid {
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
</style>

<div class="post ct-page">
  <div class="ct-wrap">
    <div class="ct-hero">
      <h1 class="ct-title">Contact</h1>
      <p class="ct-subtitle">For research collaboration, speaking, or opportunities, email is best. I usually reply within a few days.</p>
    </div>

    <div class="ct-grid">
      <div class="ct-card">
        <p class="ct-card-title">Email</p>
        {% if email_addr and email_addr != "" %}
          <p class="ct-card-desc">{{ email_addr }}</p>
          <div class="ct-actions">
            <a class="ct-btn" href="mailto:{{ email_addr | encode_email }}">Send email</a>
          </div>
        {% else %}
          <p class="ct-card-desc">Email is not configured.</p>
        {% endif %}
      </div>
    </div>
  </div>
</div>
