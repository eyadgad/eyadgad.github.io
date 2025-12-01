---
layout: about
title: About
permalink: /
subtitle: <h3>👋 Welcome!</h3>

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
/* Enhanced Profile Image */
.profile {
  position: relative;
  margin-bottom: 2rem;
}

.profile img {
  border-radius: 15px !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15) !important;
  transition: all 0.3s ease;
  max-width: 320px !important;
  border: none !important;
}

.profile img:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2) !important;
}

/* Hero Text Styling */
.hero-intro {
  font-size: 1.3rem;
  line-height: 1.9;
  margin-bottom: 2.5rem;
  color: var(--global-text-color);
  position: relative;
  padding: 2rem;
  background: linear-gradient(135deg, 
    rgba(var(--global-theme-color-rgb), 0.03), 
    rgba(var(--global-hover-color-rgb), 0.03));
  border-radius: 15px;
  border-left: 4px solid var(--global-theme-color);
}

.hero-intro strong {
  background: linear-gradient(135deg, var(--global-theme-color), var(--global-hover-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}

/* Role Badge */
.role-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(var(--global-theme-color-rgb), 0.12);
  border: 2px solid rgba(var(--global-theme-color-rgb), 0.3);
  padding: 0.7rem 1.8rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 700;
  color: var(--global-theme-color);
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(var(--global-theme-color-rgb), 0.1);
}

.role-badge:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(var(--global-theme-color-rgb), 0.25);
  background: rgba(var(--global-theme-color-rgb), 0.18);
}

/* Section Headers */
.section-header {
  font-size: 2rem;
  font-weight: 800;
  margin: 3rem 0 2rem 0;
  position: relative;
  display: inline-block;
  color: var(--global-text-color);
}

.section-header::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 70%;
  height: 4px;
  background: linear-gradient(90deg, var(--global-theme-color), transparent);
  border-radius: 4px;
}

/* Academic Timeline */
.timeline {
  position: relative;
  padding-left: 40px;
  margin: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  bottom: 10px;
  width: 4px;
  background: linear-gradient(180deg, 
    var(--global-theme-color), 
    var(--global-hover-color));
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(var(--global-theme-color-rgb), 0.3);
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
  padding: 1.8rem;
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 15px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -52px;
  top: 25px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--global-theme-color);
  border: 4px solid var(--global-bg-color);
  box-shadow: 0 0 0 4px rgba(var(--global-theme-color-rgb), 0.2);
  z-index: 2;
}

.timeline-item:hover {
  transform: translateX(15px);
  border-color: var(--global-theme-color);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.timeline-degree {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--global-theme-color);
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.timeline-school {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--global-text-color);
}

.timeline-supervisor {
  font-size: 0.95rem;
  opacity: 0.8;
  font-style: italic;
}

/* Research Tags */
.research-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0 3rem 0;
}

.research-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(var(--global-theme-color-rgb), 0.08);
  border: 2px solid rgba(var(--global-theme-color-rgb), 0.25);
  padding: 0.9rem 1.6rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: default;
  position: relative;
  overflow: hidden;
}

.research-tag::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(var(--global-theme-color-rgb), 0.2), 
    transparent);
  transition: left 0.6s ease;
}

.research-tag:hover {
  transform: translateY(-5px) scale(1.05);
  border-color: var(--global-theme-color);
  background: rgba(var(--global-theme-color-rgb), 0.15);
  box-shadow: 0 8px 20px rgba(var(--global-theme-color-rgb), 0.25);
}

.research-tag:hover::before {
  left: 100%;
}

/* Interests Section */
.interests-box {
  background: linear-gradient(135deg, 
    rgba(var(--global-theme-color-rgb), 0.05), 
    rgba(var(--global-hover-color-rgb), 0.05));
  border: 2px dashed rgba(var(--global-theme-color-rgb), 0.3);
  border-radius: 20px;
  padding: 2.5rem;
  margin: 2rem 0;
}

.interests-box h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.8rem;
  color: var(--global-text-color);
}

.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.interest-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem;
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.interest-item:hover {
  transform: translateX(8px);
  border-color: var(--global-theme-color);
  box-shadow: 0 5px 15px rgba(var(--global-theme-color-rgb), 0.15);
}

.interest-emoji {
  font-size: 2.2rem;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.interest-item:hover .interest-emoji {
  transform: scale(1.2) rotate(10deg);
}

.interest-text {
  font-weight: 600;
  font-size: 1rem;
}

/* Action Buttons */
.action-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0 2rem 0;
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1.5rem 2rem;
  background: var(--global-bg-color);
  border: 3px solid var(--global-theme-color);
  border-radius: 15px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--global-theme-color);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.action-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: var(--global-theme-color);
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.action-btn:hover {
  color: white;
  transform: translateY(-5px);
  box-shadow: 0 12px 35px rgba(var(--global-theme-color-rgb), 0.4);
}

.action-btn:hover::before {
  width: 500px;
  height: 500px;
}

.action-btn-emoji {
  font-size: 1.4rem;
  position: relative;
  z-index: 1;
}

.action-btn-text {
  position: relative;
  z-index: 1;
}

/* Responsive Design */
@media (max-width: 768px) {
  .profile img {
    max-width: 250px !important;
  }
  
  .hero-intro {
    font-size: 1.1rem;
    padding: 1.5rem;
  }
  
  .section-header {
    font-size: 1.6rem;
  }
  
  .timeline {
    padding-left: 30px;
  }
  
  .timeline-item::before {
    left: -42px;
  }
  
  .interests-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .profile img {
    max-width: 200px !important;
  }
  
  .role-badge {
    font-size: 0.9rem;
    padding: 0.6rem 1.4rem;
  }
  
  .research-tags {
    gap: 0.8rem;
  }
  
  .research-tag {
    font-size: 0.9rem;
    padding: 0.7rem 1.2rem;
  }
}
</style>

<div class="role-badge">
  <span>Researcher & Data Scientist</span>
</div>

<div class="hero-intro">
  Currently contributing to cutting-edge research in <strong>Artificial Intelligence</strong> and <strong>Data Analytics</strong> at <a href="https://nordikinstitute.com" target="_blank">NORDIK Institute</a>. Passionate about transforming complex data into actionable insights and advancing AI applications across diverse domains.
</div>

<h2 class="section-header">Academic Journey</h2>

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-degree">
      <span>Master's in Computer Science</span>
    </div>
    <div class="timeline-school">The University of Western Ontario</div>
    <div class="timeline-supervisor">Supervised by <a href="https://www.zfadlullah.org/home" target="_blank">Prof. Zubair Fadlullah</a></div>
  </div>
  
  <div class="timeline-item">
    <div class="timeline-degree">
      <span>Bachelor's in Computer Engineering</span>
    </div>
    <div class="timeline-school">Nile University</div>
    <div class="timeline-supervisor">Supervised by <a href="https://www.nu.edu.eg/academic-staff/dr-mohamed-s-darweesh" target="_blank">Prof. Mohamed Darweesh</a></div>
  </div>
</div>

<h2 class="section-header">Research Focus</h2>

<div class="research-tags">
  <div class="research-tag">Artificial Intelligence</div>
  <div class="research-tag">Internet of Things</div>
  <div class="research-tag">Medical Imaging</div>
  <div class="research-tag">Smart Networks</div>
  <div class="research-tag">Cybersecurity</div>
  <div class="research-tag">Data Science</div>
</div>

<h2 class="section-header">Beyond Research</h2>

<div class="interests-box">
  <h3>Personal Interests</h3>
  <div class="interests-grid">
    <div class="interest-item">
      <span class="interest-emoji">🚴</span>
      <span class="interest-text">Cycling new routes</span>
    </div>
    <div class="interest-item">
      <span class="interest-emoji">🏃</span>
      <span class="interest-text">Running & staying active</span>
    </div>
    <div class="interest-item">
      <span class="interest-emoji">🎸</span>
      <span class="interest-text">Rock & Metal music</span>
    </div>
    <div class="interest-item">
      <span class="interest-emoji">🎼</span>
      <span class="interest-text">Classical compositions</span>
    </div>
  </div>
</div>

<div class="action-buttons">
  <a href="/research/" class="action-btn">
    <span class="action-btn-emoji">📚</span>
    <span class="action-btn-text">View Research</span>
  </a>
  <a href="/courses/" class="action-btn">
    <span class="action-btn-emoji">🎓</span>
    <span class="action-btn-text">Explore Courses</span>
  </a>
  <a href="/contact/" class="action-btn">
    <span class="action-btn-emoji">💬</span>
    <span class="action-btn-text">Get in Touch</span>
  </a>
</div>
