---
layout: page
permalink: /courses/
title: Courses
description: Academic coursework and specializations
nav: true
nav_order: 3
---

<style>
.courses-container {
  max-width: 1200px;
  margin: 0 auto;
}

.degree-section {
  margin-bottom: 3rem;
}

.degree-header {
  background: linear-gradient(135deg, var(--global-theme-color) 0%, var(--global-hover-color) 100%);
  color: white;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.degree-header h2 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
}

.degree-header .institution {
  font-size: 1.1rem;
  opacity: 0.95;
  margin-top: 0.3rem;
}

.course-category {
  margin-bottom: 2.5rem;
}

.category-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--global-theme-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.category-title i {
  color: var(--global-theme-color);
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.course-card {
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 8px;
  padding: 1rem 1.25rem;
  transition: all 0.3s ease;
  cursor: default;
}

.course-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-color: var(--global-theme-color);
}

.course-code {
  font-weight: 700;
  color: var(--global-theme-color);
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}

.course-name {
  margin-top: 0.4rem;
  font-size: 0.95rem;
  line-height: 1.4;
  color: var(--global-text-color);
}

.stats-container {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  padding: 1.5rem;
  background: var(--global-bg-color);
  border-radius: 8px;
  border: 1px solid var(--global-divider-color);
  justify-content: center;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--global-theme-color);
  display: block;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--global-text-color-light);
  margin-top: 0.3rem;
}

@media (max-width: 768px) {
  .courses-grid {
    grid-template-columns: 1fr;
  }
  
  .degree-header h2 {
    font-size: 1.5rem;
  }
  
  .category-title {
    font-size: 1.1rem;
  }
}
</style>

<div class="courses-container">

<!-- Masters Section -->
<div class="degree-section">
  <div class="degree-header">
    <h2>🎓 Master's in Computer Science</h2>
    <div class="institution">The University of Western Ontario</div>
  </div>
  
  <div class="courses-grid">
    <div class="course-card">
      <div class="course-code">CS9636</div>
      <div class="course-name">Network Security</div>
    </div>
    <div class="course-card">
      <div class="course-code">CS9837</div>
      <div class="course-name">Topics in Smart Cyber-Physical Systems and Networks</div>
    </div>
    <div class="course-card">
      <div class="course-code">CS9837</div>
      <div class="course-name">Theoretical Machine Learning</div>
    </div>
    <div class="course-card">
      <div class="course-code">EC9360</div>
      <div class="course-name">Convex Optimization for Engineering and Science</div>
    </div>
  </div>
</div>

<!-- Bachelor's Section -->
<div class="degree-section">
  <div class="degree-header">
    <h2>🎓 Bachelor's in Computer Engineering</h2>
    <div class="institution">Nile University</div>
  </div>

  <!-- Computer Science Courses -->
  <div class="course-category">
    <div class="category-title">
      <i class="fas fa-laptop-code"></i>
      Computer Science & Software
    </div>
    <div class="courses-grid">
      <div class="course-card">
        <div class="course-code">CSCI001</div>
        <div class="course-name">Computer & Information Skills</div>
      </div>
      <div class="course-card">
        <div class="course-code">CSCE002</div>
        <div class="course-name">Introduction to Programming</div>
      </div>
      <div class="course-card">
        <div class="course-code">ECEN204</div>
        <div class="course-name">Fundamentals of Data Structures & Algorithms</div>
      </div>
      <div class="course-card">
        <div class="course-code">ECEN305</div>
        <div class="course-name">Introduction to Computer Systems</div>
      </div>
      <div class="course-card">
        <div class="course-code">ECEN324</div>
        <div class="course-name">Computer Systems Software</div>
      </div>
      <div class="course-card">
        <div class="course-code">ECEN427</div>
        <div class="course-name">Operating Systems</div>
      </div>
      <div class="course-card">
        <div class="course-code">ECEN428</div>
        <div class="course-name">Software Engineering</div>
      </div>
      <div class="course-card">
        <div class="course-code">ECEN432</div>
        <div class="course-name">Introduction to Computer Architecture</div>
      </div>
      <div class="course-card">
        <div class="course-code">ECEN438</div>
        <div class="course-name">Advanced Computer Architecture</div>
      </div>
      <div class="course-card">
        <div class="course-code">ECEN433</div>
        <div class="course-name">Introduction to Parallel Computing</div>
      </div>
    </div>
  </div>

  <!-- Networks & Security -->
  <div class="course-category">
    <div class="category-title">
      <i class="fas fa-network-wired"></i>
      Networks, Security & Databases
    </div>
    <div class="courses-grid">
      <div class="course-card">
        <div class="course-code">ECEN421</div>
        <div class="course-name">Introduction to Computer Networks</div>
      </div>
      <div class="course-card">
        <div class="course-code">ECEN422</div>
        <div class="course-name">Introduction to Computer Security</div>
      </div>
      <div class="course-card">
        <div class="course-code">ECEN424</div>
        <div class="course-name">Introduction to Database Systems</div>
      </div>
    </div>
  </div>

  <!-- AI & Data Science -->
  <div class="course-category">
    <div class="category-title">
      <i class="fas fa-brain"></i>
      Artificial Intelligence & Data Science
    </div>
    <div class="courses-grid">
      <div class="course-card">
        <div class="course-code">ECEN425</div>
        <div class="course-name">Machine Intelligence</div>
      </div>
      <div class="course-card">
        <div class="course-code">CSCI451</div>
        <div class="course-name">Digital Image Processing</div>
      </div>
      <div class="course-card">
        <div class="course-code">CSCI322</div>
        <div class="course-name">Data Analysis</div>
      </div>
      <div class="course-card">
        <div class="course-code">CSCI467</div>
        <div class="course-name">Data Mining & Analytics</div>
      </div>
    </div>
  </div>

  <!-- Electronics & Embedded Systems -->
  <div class="course-category">
    <div class="category-title">
      <i class="fas fa-microchip"></i>
      Electronics & Embedded Systems
    </div>
    <div class="courses-grid">
      <div class="course-card">
        <div class="course-code">ECEN101</div>
        <div class="course-name">Electric Circuits</div>
      </div>
      <div class="course-card">
        <div class="course-code">ECEN202</div>
        <div class="course-name">Fundamentals of Electrical Engineering</div>
      </div>
      <div class="course-card">
        <div class="course-code">ECEN203</div>
        <div class="course-name">Fundamentals of Computer Engineering</div>
      </div>
      <div class="course-card">
        <div class="course-code">ECEN311</div>
        <div class="course-name">Analysis & Design of Analog Circuits</div>
      </div>
      <div class="course-card">
        <div class="course-code">ECEN312</div>
        <div class="course-name">Analysis & Design of Digital Circuits</div>
      </div>
      <div class="course-card">
        <div class="course-code">ECEN313</div>
        <div class="course-name">Signals & Systems</div>
      </div>
      <div class="course-card">
        <div class="course-code">ECEN314</div>
        <div class="course-name">Fundamentals of Communications</div>
      </div>
      <div class="course-card">
        <div class="course-code">ECEN315</div>
        <div class="course-name">Fundamentals of Control</div>
      </div>
      <div class="course-card">
        <div class="course-code">ECEN316</div>
        <div class="course-name">Electric Machines</div>
      </div>
      <div class="course-card">
        <div class="course-code">ECEN406</div>
        <div class="course-name">Microprocessor System Design</div>
      </div>
      <div class="course-card">
        <div class="course-code">ECEN435</div>
        <div class="course-name">Embedded Real-Time Systems</div>
      </div>
      <div class="course-card">
        <div class="course-code">ECEN420</div>
        <div class="course-name">Internet of Things</div>
      </div>
    </div>
  </div>

</div>

<!-- Statistics -->
<div class="stats-container">
  <div class="stat-item">
    <span class="stat-number">35</span>
    <div class="stat-label">Total Courses</div>
  </div>
  <div class="stat-item">
    <span class="stat-number">2</span>
    <div class="stat-label">Degrees</div>
  </div>
  <div class="stat-item">
    <span class="stat-number">5</span>
    <div class="stat-label">Specializations</div>
  </div>
</div>

</div>
