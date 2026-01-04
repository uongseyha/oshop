import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user.model';

@Component({
  selector: 'bs-navbar',
  standalone: true,
  templateUrl: './bs-navbar.html',
  styleUrls: ['./bs-navbar.css'],
  imports: [RouterLink, CommonModule]
})
export class BsNavbar {
  user: User | null | undefined = null;

  constructor(public authService: AuthService) {
    this.authService.user$.subscribe((u) => (this.user = u));
  }

  async logout() {
    if (this.user) {
      this.authService.logout();
      this.user = null;
      return;
    }
  }
}
