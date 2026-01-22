import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserCard } from '../../shared/components/user-card/user-card';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule, UserCard],
  template: `
    <div class="users-container">
      <h1>👥 Users List</h1>
      <p>Users data will be displayed here...</p>
      <app-user-card></app-user-card>
    </div>
  `,
  styleUrl: './users.component.scss',
})
export class UsersComponent {}
