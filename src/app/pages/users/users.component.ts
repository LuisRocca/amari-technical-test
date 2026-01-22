import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserCard } from '../../shared/components/user-card/user-card';
import { UserService } from '../../core/services/user';
import { User } from '../../core/models/user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule, UserCard],
  template: `
    <div class="users-container">
      <h1>👥 Users List</h1>
      <div class="loading" *ngIf="loading">
        <p>Cargando usuarios...</p>
      </div>
      <div class="error" *ngIf="error">
        <p>{{ error }}</p>
      </div>
      <div class="users-list-container" *ngIf="!loading && users.length > 0">
        <div class="users-header">
          <div class="header-avatar"></div>
          <div class="header-name">Name</div>
          <div class="header-email">Email</div>
          <div class="header-country">Country</div>
        </div>
        <div class="users-list">
          <app-user-card *ngFor="let user of users" [user]="user"></app-user-card>
        </div>
      </div>
    </div>
  `,
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  loading = true;
  error: string | null = null;

  private readonly userService = inject(UserService);

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.error = null;
    this.userService.getUsers(12).subscribe({
      next: (response) => {
        this.users = response.results;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar los usuarios';
        this.loading = false;
        console.error(err);
      },
    });
  }
}
