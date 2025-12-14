---
layout: page
title: Experience
permalink: /experience/
description:
nav: true
nav_order: 3
---

{% assign exp_items = site.data.resume.work | default: empty %}

<style>
  .exp-page {
    --exp-accent: var(--global-theme-color);
    --exp-card-bg: var(--global-card-bg-color);
    --exp-text: var(--global-text-color);
    --exp-muted: var(--global-text-color-light);
    --exp-divider: var(--global-divider-color);

    --exp-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }

  html[data-theme="dark"] .exp-page {
    --exp-shadow: 0 14px 46px rgba(0, 0, 0, 0.30);
  }

  .exp-hero {
    max-width: 980px;
    margin: 0 auto 1.75rem;
  }

  .exp-title {
    margin: 0;
    font-weight: 900;
    letter-spacing: -0.03em;
  }

  .exp-kicker {
    margin: 0.5rem 0 0;
    color: var(--exp-muted);
    max-width: 70ch;
  }

  .exp-timeline {
    max-width: 980px;
    margin: 0 auto;
    padding: 0.25rem 0 1.5rem;
  }

  .exp-tl {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .exp-tl-item {
    display: grid;
    grid-template-columns: 180px 34px 1fr;
    column-gap: 18px;
    align-items: start;
    position: relative;

    opacity: 0;
    transform: translateY(18px);
    transition: opacity 520ms ease, transform 520ms cubic-bezier(0.2, 1, 0.2, 1);
  }

  .exp-tl-item.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .exp-tl-item:not(:last-child) {
    padding-bottom: 1.75rem;
  }

  .exp-tl-date {
    padding-top: 0.35rem;
    text-align: right;
    color: var(--exp-muted);
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 0.78rem;
    line-height: 1.35;
  }

  .exp-tl-date time {
    display: inline-block;
  }

  .exp-tl-rail {
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 0.2rem;
  }

  .exp-tl-rail::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px;
    border-radius: 999px;
    background: var(--exp-divider);
  }

  .exp-tl-item:not(:last-child) .exp-tl-rail::before {
    bottom: -1.75rem;
  }

  .exp-tl-dot {
    width: 14px;
    height: 14px;
    border-radius: 999px;
    background: var(--exp-card-bg);
    border: 3px solid var(--exp-accent);
    position: relative;
    top: 0.38rem;
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    animation: exp-dot-pulse 1400ms ease-in-out infinite;
  }

  @keyframes exp-dot-pulse {
    0%,
    100% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    50% {
      box-shadow: 0 0 0 10px color-mix(in srgb, var(--exp-accent) 18%, transparent);
    }
  }

  @supports not (color: color-mix(in srgb, #000 50%, #fff)) {
    .exp-tl-dot {
      animation: none;
    }
  }

  .exp-card {
    width: 100%;
    border: 1px solid var(--exp-divider);
    background: var(--exp-card-bg);
    border-radius: 14px;
    padding: 1rem 1.1rem;
    text-align: left;
    cursor: pointer;
    transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
    box-shadow: var(--exp-shadow);
  }

  .exp-card:hover {
    transform: translateY(-4px);
    border-color: color-mix(in srgb, var(--exp-accent) 45%, var(--exp-divider));
  }

  .exp-card:focus {
    outline: none;
  }

  .exp-card:focus-visible {
    border-color: var(--exp-accent);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--exp-accent) 22%, transparent), var(--exp-shadow);
  }

  .exp-card-top {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    justify-content: space-between;
  }

  .exp-role {
    margin: 0;
    font-weight: 900;
    letter-spacing: -0.02em;
    color: var(--exp-text);
    font-size: 1.05rem;
  }

  .exp-company {
    margin: 0.35rem 0 0;
    color: var(--exp-accent);
    font-weight: 800;
  }

  .exp-summary {
    margin: 0.65rem 0 0;
    color: var(--exp-muted);
    font-size: 0.92rem;
    line-height: 1.55;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .exp-chip {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.35rem 0.65rem;
    border-radius: 999px;
    font-size: 0.74rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--exp-muted);
    border: 1px solid color-mix(in srgb, var(--exp-divider) 70%, transparent);
    background: color-mix(in srgb, var(--exp-accent) 9%, transparent);
  }

  .exp-cta {
    margin-top: 0.6rem;
    color: var(--exp-muted);
    font-weight: 800;
    font-size: 0.82rem;
  }

  .exp-cta span {
    color: var(--exp-accent);
    font-weight: 900;
  }

  /* Responsive */
  @media (max-width: 860px) {
    .exp-tl-item {
      grid-template-columns: 28px 1fr;
      column-gap: 14px;
    }

    .exp-tl-date {
      grid-column: 2;
      text-align: left;
      padding-top: 0;
      margin-bottom: 0.4rem;
    }

    .exp-tl-rail {
      grid-column: 1;
      grid-row: 1 / span 2;
      justify-content: flex-start;
    }

    .exp-tl-rail::before {
      left: 13px;
    }

    .exp-tl-dot {
      left: 6px;
    }

    .exp-card {
      grid-column: 2;
    }
  }

  /* Modal polish (Bootstrap) */
  .exp-modal .modal-content {
    background: var(--exp-card-bg);
    border: 1px solid var(--exp-divider);
    border-radius: 18px;
    box-shadow: 0 26px 70px rgba(0, 0, 0, 0.32);
    overflow: hidden;
  }

  .exp-modal .modal-header {
    border-bottom: 1px solid var(--exp-divider);
  }

  .exp-modal .modal-title {
    font-weight: 900;
    letter-spacing: -0.02em;
  }

  .exp-modal .modal-body {
    padding: 1.15rem 1.35rem 1.35rem;
  }

  .exp-detail-role {
    margin: 0;
    font-weight: 900;
    font-size: 1.25rem;
    letter-spacing: -0.02em;
    color: var(--exp-text);
  }

  .exp-detail-company {
    margin: 0.35rem 0 0;
    color: var(--exp-accent);
    font-weight: 800;
  }

  .exp-detail-company a {
    color: var(--exp-accent);
    text-decoration: none;
  }

  .exp-detail-company a:hover {
    text-decoration: underline;
  }

  .exp-detail-date {
    margin: 0.6rem 0 0;
    color: var(--exp-muted);
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 0.78rem;
  }

  .exp-detail-summary {
    margin: 1rem 0 0;
    padding: 0.9rem 1rem;
    border-radius: 14px;
    border: 1px solid color-mix(in srgb, var(--exp-divider) 70%, transparent);
    background: color-mix(in srgb, var(--exp-accent) 10%, transparent);
    color: var(--exp-text);
    font-style: italic;
  }

  .exp-detail-section {
    margin-top: 1.1rem;
  }

  .exp-detail-section-title {
    margin: 0 0 0.55rem;
    font-size: 0.8rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    font-weight: 900;
    color: var(--exp-accent);
  }

  .exp-detail-list {
    margin: 0;
    padding-left: 1.15rem;
    color: var(--exp-text);
  }

  .exp-detail-list li {
    margin: 0.55rem 0;
    line-height: 1.6;
  }

  @media (prefers-reduced-motion: reduce) {
    .exp-tl-item {
      transition: none;
      transform: none;
      opacity: 1;
    }
    .exp-card,
    .exp-card:hover {
      transition: none;
      transform: none;
    }
  }
</style>

<div class="post exp-page">
  <!-- <div class="exp-hero">
    <h1 class="exp-title">Experience</h1>
    <p class="exp-kicker">A chronological timeline. Click any role to open full details.</p>
  </div> -->

  <div class="exp-timeline">
    {% if exp_items == empty %}
      <p>No experience data found.</p>
    {% else %}
      {% assign exp_sorted = exp_items | sort: "startDate" | reverse %}
      <ol class="exp-tl">
        {% for item in exp_sorted %}
          {% assign idx = forloop.index0 %}
          {% assign summary = item.summary | default: item._summary %}
          {% assign start_dt = item.startDate %}
          {% assign end_dt = item.endDate %}

          <li class="exp-tl-item js-exp-item">
            <div class="exp-tl-date">
              <time datetime="{{ start_dt }}">{{ start_dt | date: "%b %Y" }}</time>
              <span aria-hidden="true"> — </span>
              {% if end_dt and end_dt != "" %}
                <time datetime="{{ end_dt }}">{{ end_dt | date: "%b %Y" }}</time>
              {% else %}
                <span>Present</span>
              {% endif %}
            </div>

            <div class="exp-tl-rail" aria-hidden="true">
              <span class="exp-tl-dot"></span>
            </div>

            <button
              type="button"
              class="exp-card js-exp-open"
              data-exp-index="{{ idx }}"
              data-toggle="modal"
              data-target="#experienceModal"
              aria-controls="experienceModal"
            >
              <div class="exp-card-top">
                <div>
                  <p class="exp-role">{{ item.position }}</p>
                  <p class="exp-company">
                    {{ item.name }}
                  </p>
                </div>
              </div>

              {% if summary and summary != "" %}
                <p class="exp-summary">{{ summary | strip_html | strip_newlines | truncate: 160 }}</p>
              {% endif %}

              <div class="exp-cta">Click to <span>open</span></div>
            </button>

            <template id="exp-template-{{ idx }}">
              <div class="exp-detail">
                <p class="exp-detail-role">{{ item.position }}</p>
                <p class="exp-detail-company">
                  {% if item.url and item.url != "" %}
                    <a href="{{ item.url }}" target="_blank" rel="noopener noreferrer">{{ item.name }}</a>
                  {% else %}
                    {{ item.name }}
                  {% endif %}
                </p>
                <p class="exp-detail-date">
                  {{ start_dt | date: "%b %Y" }} – {% if end_dt and end_dt != "" %}{{ end_dt | date: "%b %Y" }}{% else %}Present{% endif %}
                </p>

                {% if summary and summary != "" %}
                  <div class="exp-detail-summary">{{ summary }}</div>
                {% endif %}

                {% if item.highlights and item.highlights.size > 0 %}
                  <div class="exp-detail-section">
                    <p class="exp-detail-section-title">Highlights</p>
                    <ul class="exp-detail-list">
                      {% for h in item.highlights %}
                        <li>{{ h }}</li>
                      {% endfor %}
                    </ul>
                  </div>
                {% endif %}
              </div>
            </template>
          </li>
        {% endfor %}
      </ol>
    {% endif %}

  </div>

  <div
    class="modal fade exp-modal"
    id="experienceModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="experienceModalTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" id="expModalBody"></div>
      </div>
    </div>
  </div>
</div>

<script>
  (function () {
    "use strict";

    const root = document.querySelector(".exp-page");
    if (!root) return;

    // Reveal on scroll
    const items = root.querySelectorAll(".js-exp-item");
    const reveal = (el) => el.classList.add("is-visible");

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target);
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -12% 0px" }
      );

      items.forEach((el) => io.observe(el));
    } else {
      items.forEach(reveal);
    }

    // Bootstrap modal content injection
    const modalEl = document.getElementById("experienceModal");
    if (!modalEl) return;

    const modalBody = modalEl.querySelector("#expModalBody");

    const populateFromIndex = (idx) => {
      if (!modalBody) return;
      modalBody.innerHTML = "";

      if (idx === null || idx === undefined || idx === "") {
        modalBody.textContent = "No details available.";
        return;
      }

      const tpl = document.getElementById(`exp-template-${idx}`);
      if (!tpl || !tpl.content) {
        modalBody.textContent = "No details available.";
        return;
      }

      modalBody.appendChild(tpl.content.cloneNode(true));
    };

    const populateFromTrigger = (trigger) => {
      if (!trigger) {
        populateFromIndex(null);
        return;
      }

      const btn = trigger.closest ? trigger.closest(".js-exp-open") : trigger;
      const idx = btn
        ? (btn.getAttribute("data-exp-index") || (btn.dataset ? btn.dataset.expIndex : null))
        : null;
      populateFromIndex(idx);
    };

    // Primary path: populate immediately on click so it works even if jQuery is not on window.
    root.addEventListener("click", (e) => {
      const btn = e.target.closest(".js-exp-open");
      if (!btn) return;
      populateFromTrigger(btn);
    });

    const renderModal = (evt) => {
      const trigger = evt && evt.relatedTarget ? evt.relatedTarget : null;
      populateFromTrigger(trigger);
    };

    const clearModal = () => {
      if (modalBody) modalBody.innerHTML = "";
    };

    if (window.jQuery && window.jQuery.fn && typeof window.jQuery.fn.modal === "function") {
      window.jQuery(modalEl).on("show.bs.modal", renderModal);
      window.jQuery(modalEl).on("hidden.bs.modal", clearModal);
    } else {
      modalEl.addEventListener("show.bs.modal", renderModal);
      modalEl.addEventListener("hidden.bs.modal", clearModal);
    }
  })();
</script>
