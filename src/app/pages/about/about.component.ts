import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container">
      <section class="developer-info">
        <div class="avatar">
          <!-- Placeholder avatar if needed or remove div -->
          <span style="font-size: 3rem;">👨💻</span>
        </div>
        <h1>About This Project</h1>
        <p class="description">This is a technical test project built with Angular 19.</p>
      </section>

      <section class="tech-stack">
        <h2>🛠️ Technologies Used</h2>
        <ul>
          <li>Angular 19</li>
          <li>TypeScript</li>
          <li>SCSS</li>
          <li>Random User API</li>
          <li>Standalone Components</li>
        </ul>
      </section>

      <section class="developer">
        <h2>👨💻 Developer</h2>
        <p><strong>Name:</strong> [LuisRocca]</p>
        <p><strong>Email:</strong> [luis.rocca96@gmail.com]</p>
        <div class="social-links">
          <a href="https://github.com/LuisRocca/amari-technical-test" target="_blank">GitHub</a>
          <a
            href="https://www.linkedin.com/in/luis-miguel-alfonzo-roca-software-enginer/"
            target="_blank"
            >LinkedIn</a
          >
        </div>
      </section>
    </div>
  `,
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
