---
layout: about
title: About
permalink: /
subtitle: false

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
/* Particle Background */
.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  background: var(--global-theme-color);
  border-radius: 50%;
  opacity: 0.1;
  animation: float-particle 20s infinite ease-in-out;
}

@keyframes float-particle {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(50px, -50px) scale(1.2); }
  50% { transform: translate(-30px, -100px) scale(0.8); }
  75% { transform: translate(-50px, -50px) scale(1.1); }
}

/* Hero Section */
.hero-container {
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  margin: -2rem -15px 3rem;
  padding: 3rem 15px;
  overflow: hidden;
}

.hero-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(var(--global-theme-color-rgb), 0.03) 0%, 
    transparent 50%, 
    rgba(var(--global-hover-color-rgb), 0.03) 100%);
  z-index: -1;
}

.split-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* Profile Side with Glassmorphism */
.profile-side {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-glass {
  position: relative;
  backdrop-filter: blur(10px);
  background: rgba(var(--global-bg-color-rgb), 0.7);
  border: 1px solid rgba(var(--global-theme-color-rgb), 0.2);
  border-radius: 30px;
  padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.profile-glass::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 30px;
  padding: 2px;
  background: linear-gradient(135deg, var(--global-theme-color), var(--global-hover-color));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0.5;
  animation: rotate-border 8s linear infinite;
}

@keyframes rotate-border {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.profile-image-wrapper {
  position: relative;
  width: 300px;
  height: 300px;
}

.profile-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

/* Morphing blob behind image */
.blob {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, var(--global-theme-color), var(--global-hover-color));
  opacity: 0.15;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: morph 8s ease-in-out infinite;
  z-index: -1;
}

@keyframes morph {
  0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: translate(-50%, -50%) rotate(0deg); }
  25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
  50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; transform: translate(-50%, -50%) rotate(180deg); }
  75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
}

/* Content Side with Typing Effect */
.content-side {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.typing-container {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--global-theme-color), var(--global-hover-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  min-height: 3.5rem;
}

.role-badge {
  display: inline-block;
  background: rgba(var(--global-theme-color-rgb), 0.1);
  border: 1px solid rgba(var(--global-theme-color-rgb), 0.3);
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--global-theme-color);
  margin-bottom: 1.5rem;
}

.intro-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--global-text-color);
  opacity: 0.9;
}

/* Academic Timeline */
.timeline-section {
  margin: 4rem 0;
  position: relative;
}

.timeline {
  position: relative;
  padding-left: 3rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, var(--global-theme-color), var(--global-hover-color));
  border-radius: 3px;
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 2rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -3.5rem;
  top: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: var(--global-theme-color);
  border: 3px solid var(--global-bg-color);
  box-shadow: 0 0 0 3px rgba(var(--global-theme-color-rgb), 0.3);
  z-index: 2;
}

.timeline-content {
  background: rgba(var(--global-code-bg-color-rgb), 0.3);
  border-left: 3px solid var(--global-theme-color);
  padding: 1.5rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateX(10px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.timeline-degree {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--global-theme-color);
  margin-bottom: 0.5rem;
}

.timeline-school {
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.timeline-supervisor {
  font-size: 0.9rem;
  opacity: 0.8;
  font-style: italic;
}

/* Research Tags */
.research-section {
  margin: 3rem 0;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 60%;
  height: 3px;
  background: linear-gradient(90deg, var(--global-theme-color), transparent);
  border-radius: 3px;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.research-tag {
  background: rgba(var(--global-theme-color-rgb), 0.08);
  border: 2px solid rgba(var(--global-theme-color-rgb), 0.2);
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
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
  background: linear-gradient(90deg, transparent, rgba(var(--global-theme-color-rgb), 0.2), transparent);
  transition: left 0.5s ease;
}

.research-tag:hover {
  transform: translateY(-3px);
  border-color: var(--global-theme-color);
  background: rgba(var(--global-theme-color-rgb), 0.15);
  box-shadow: 0 5px 15px rgba(var(--global-theme-color-rgb), 0.2);
}

.research-tag:hover::before {
  left: 100%;
}

/* Interests Cards */
.interests-section {
  margin: 3rem 0;
}

.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.interest-card {
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.interest-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--global-theme-color), var(--global-hover-color));
  opacity: 0;
  transition: opacity 0.4s ease;
}

.interest-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: var(--global-theme-color);
  box-shadow: 0 15px 40px rgba(var(--global-theme-color-rgb), 0.3);
}

.interest-card:hover::before {
  opacity: 0.05;
}

.interest-emoji {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
  transition: transform 0.3s ease;
}

.interest-card:hover .interest-emoji {
  transform: scale(1.2) rotate(5deg);
}

.interest-title {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
}

/* Action Buttons */
.action-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}

.action-btn {
  display: block;
  text-align: center;
  padding: 1.5rem 2rem;
  border-radius: 15px;
  text-decoration: none;
  font-weight: 700;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 2px solid var(--global-theme-color);
  color: var(--global-theme-color);
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
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(var(--global-theme-color-rgb), 0.4);
}

.action-btn:hover::before {
  width: 400px;
  height: 400px;
}

.action-btn span {
  position: relative;
  z-index: 1;
}

/* Fun Facts Section */
.fun-facts {
  background: rgba(var(--global-code-bg-color-rgb), 0.3);
  border-radius: 20px;
  padding: 2.5rem;
  margin: 3rem 0;
  border: 1px dashed rgba(var(--global-theme-color-rgb), 0.3);
}

.fun-facts h3 {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.fun-facts-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.fun-fact-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.fun-fact-emoji {
  font-size: 2rem;
}

/* Responsive */
@media (max-width: 992px) {
  .split-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .hero-container {
    min-height: auto;
    padding: 2rem 15px;
  }
  
  .profile-side {
    order: -1;
  }
  
  .profile-image-wrapper {
    width: 250px;
    height: 250px;
  }
  
  .blob {
    width: 300px;
    height: 300px;
  }
  
  .typing-container {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .profile-image-wrapper {
    width: 200px;
    height: 200px;
  }
  
  .blob {
    width: 250px;
    height: 250px;
  }
  
  .typing-container {
    font-size: 1.5rem;
  }
  
  .timeline {
    padding-left: 2rem;
  }
  
  .timeline-item {
    padding-left: 1rem;
  }
}
</style>

<!-- Particle Background -->
<div class="particles-container" aria-hidden="true">
  <div class="particle" style="width: 4px; height: 4px; left: 10%; top: 20%; animation-delay: 0s;"></div>
  <div class="particle" style="width: 6px; height: 6px; left: 80%; top: 30%; animation-delay: 2s;"></div>
  <div class="particle" style="width: 3px; height: 3px; left: 60%; top: 60%; animation-delay: 4s;"></div>
  <div class="particle" style="width: 5px; height: 5px; left: 30%; top: 70%; animation-delay: 6s;"></div>
  <div class="particle" style="width: 4px; height: 4px; left: 90%; top: 80%; animation-delay: 8s;"></div>
</div>

<!-- Hero Section -->
<div class="hero-container">
  <div class="split-layout">
    <div class="profile-side">
      <div class="profile-glass">
        <div class="profile-image-wrapper">
          <div class="blob"></div>
          <img src="/assets/img/komugiko_cat.gif" alt="Profile Animation">
        </div>
      </div>
    </div>
    
    <div class="content-side">
      <div class="typing-container">
        Hi, I'm Eyad Gad
      </div>
      
      <div class="role-badge">
        🔬 Researcher & Data Scientist
      </div>
      
      <div class="intro-text">
        Currently contributing to cutting-edge research in <strong>Artificial Intelligence</strong> and <strong>Data Analytics</strong> at <a href="https://nordikinstitute.com">NORDIK Institute</a>. Passionate about transforming complex data into actionable insights and advancing AI applications across diverse domains.
      </div>
    </div>
  </div>
</div>

<!-- Academic Timeline -->
<div class="timeline-section">
  <h2 class="section-title">Academic Journey</h2>
  
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-content">
        <div class="timeline-degree">Master's in Computer Science</div>
        <div class="timeline-school">The University of Western Ontario</div>
        <div class="timeline-supervisor">Supervised by <a href="https://www.zfadlullah.org/home">Prof. Zubair Fadlullah</a></div>
      </div>
    </div>
    
    <div class="timeline-item">
      <div class="timeline-content">
        <div class="timeline-degree">Bachelor's in Computer Engineering</div>
        <div class="timeline-school">Nile University</div>
        <div class="timeline-supervisor">Supervised by <a href="https://www.nu.edu.eg/academic-staff/dr-mohamed-s-darweesh">Prof. Mohamed Darweesh</a></div>
      </div>
    </div>
  </div>
</div>

<!-- Research Focus -->
<div class="research-section">
  <h2 class="section-title">Research Focus</h2>
  
  <div class="tags-container">
    <div class="research-tag">🤖 Artificial Intelligence</div>
    <div class="research-tag">🌐 Internet of Things</div>
    <div class="research-tag">🏥 Medical Imaging</div>
    <div class="research-tag">📡 Smart Networks</div>
    <div class="research-tag">🔒 Cybersecurity</div>
    <div class="research-tag">📊 Data Science</div>
  </div>
</div>

<!-- Interests -->
<div class="interests-section">
  <h2 class="section-title">Beyond Research</h2>
  
  <div class="fun-facts">
    <h3>🎯 When I'm not in the lab...</h3>
    <div class="fun-facts-list">
      <div class="fun-fact-item">
        <span class="fun-fact-emoji">🚴</span>
        <span>Cycling through new routes</span>
      </div>
      <div class="fun-fact-item">
        <span class="fun-fact-emoji">🏃</span>
        <span>Running & staying active</span>
      </div>
      <div class="fun-fact-item">
        <span class="fun-fact-emoji">🎸</span>
        <span>Rock & Metal enthusiast</span>
      </div>
      <div class="fun-fact-item">
        <span class="fun-fact-emoji">🎼</span>
        <span>Classical music lover</span>
      </div>
    </div>
  </div>
</div>

<!-- Action Buttons -->
<div class="action-buttons">
  <a href="/research/" class="action-btn">
    <span>📚 View Research</span>
  </a>
  <a href="/courses/" class="action-btn">
    <span>🎓 Explore Courses</span>
  </a>
  <a href="/contact/" class="action-btn">
    <span>💬 Get in Touch</span>
  </a>
</div>
