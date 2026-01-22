import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="home-container">
      <section class="hero">
        <h1>👋 Welcome to Users App</h1>
        <p class="subtitle">Explore random users from around the world</p>
      </section>

      <section class="quick-actions">
        <div class="action-card" routerLink="/users">
          <div class="icon">👥</div>
          <h3>Browse Users</h3>
          <p>View our collection of random users</p>
        </div>

        <div class="action-card" routerLink="/about">
          <div class="icon">ℹ️</div>
          <h3>About</h3>
          <p>Learn more about this project</p>
        </div>
      </section>
    </div>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
