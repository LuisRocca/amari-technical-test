import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="detail-container">
      <button class="back-button" (click)="goBack()">← Back to Users</button>
      <h1>User Detail</h1>
      <p>User ID: {{ id }}</p>
      <p>Full user data will be displayed here...</p>
    </div>
  `,
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent implements OnInit {
  @Input() id?: string; // Recibe el parámetro de ruta automáticamente

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('User ID:', this.id);
  }

  goBack() {
    this.router.navigate(['/users']);
  }
}
