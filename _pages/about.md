---
layout: about
title: About
permalink: /
subtitle: <h3>Welcome! <span class="wave">👋</span></h3>

profile:
  align: right
  image: komugiko_cat.gif
  image_circular: false
  more_info: false

selected_papers: false
social: True

announcements:
  enabled: false
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

<style>
.profile {
  position: relative;
}

.profile img {
  border-radius: 20px !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15) !important;
  transition: all 0.3s ease;
  max-width: 280px;
  width: 100% !important;
  height: auto;
  object-fit: cover;
}

.profile:hover img {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2) !important;
}

.profile::before {
  content: '';
  position: absolute;
  top: -10px;
  right: -10px;
  bottom: -10px;
  left: -10px;
  background: linear-gradient(135deg, var(--global-theme-color), var(--global-hover-color));
  border-radius: 25px;
  opacity: 0.1;
  z-index: -1;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.15; transform: scale(1.02); }
}

.intro-section {
  margin-bottom: 2rem;
}

.highlight-box {
  background: linear-gradient(135deg, rgba(var(--global-theme-color-rgb), 0.05), rgba(var(--global-hover-color-rgb), 0.05));
  border-left: 4px solid var(--global-theme-color);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.interest-item {
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;
}

.interest-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--global-theme-color);
}

.interest-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.cta-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.cta-card {
  background: linear-gradient(135deg, var(--global-theme-color), var(--global-hover-color));
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  display: block;
}

.cta-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  color: white;
  text-decoration: none;
}

.cta-card h3 {
  margin: 0 0 0.5rem 0;
  color: white;
  font-size: 1.2rem;
}

.cta-card p {
  margin: 0;
  opacity: 0.9;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .profile img {
    max-width: 200px;
  }
  
  .interests-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="intro-section">

I am a **Researcher & Data Scientist** at [NORDIK Institute](https://nordikinstitute.com), where I contribute to cutting-edge research in artificial intelligence and data analytics.

</div>

<div class="highlight-box">

### 🎓 Academic Background

I hold a **Master's in Computer Science** from [The University of Western Ontario](https://www.uwo.ca/), where I was supervised by [Prof. Zubair Fadlullah](https://www.zfadlullah.org/home), and a **Bachelor's in Computer Engineering** from [Nile University](https://www.nu.edu.eg/), under the guidance of [Prof. Mohamed Darweesh](https://www.nu.edu.eg/academic-staff/dr-mohamed-s-darweesh).

</div>

### 🔬 Research Focus

My research interests center on **Artificial Intelligence** and its transformative applications across:

<div class="interests-grid">
  <div class="interest-item">
    <div class="interest-icon">🌐</div>
    <strong>Internet of Things</strong>
  </div>
  <div class="interest-item">
    <div class="interest-icon">🏥</div>
    <strong>Medical Imaging</strong>
  </div>
  <div class="interest-item">
    <div class="interest-icon">📡</div>
    <strong>Smart Networks</strong>
  </div>
  <div class="interest-item">
    <div class="interest-icon">🔒</div>
    <strong>Cybersecurity</strong>
  </div>
</div>

### 🎯 Beyond Research

When I'm not immersed in research, I maintain an active lifestyle through **walking, running, and cycling**. Music is my constant companion—I'm particularly drawn to **Rock, Metal, and Classical** genres.

<div class="cta-section">
  <a href="/research/" class="cta-card">
    <h3>📚 Explore Research</h3>
    <p>Check out my publications and ongoing projects</p>
  </a>
  <a href="/contact/" class="cta-card">
    <h3>💬 Let's Connect</h3>
    <p>Interested in collaboration? Get in touch!</p>
  </a>
</div>
