import { Router,ActivatedRoute  } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';
  localLoggedIn = false;
  loginMessage = '';

  constructor(public auth: AuthService
    , private router: Router
    , private activateRoute: ActivatedRoute) {

  }

  // Local bootstrap username/password login (simple demo)
  login() {
    const isAdmin = this.username === 'admin' && this.password === 'admin';
    if (isAdmin) {
      const user: User = { name: this.username, password: this.password, isAdmin: true };
      this.localLoggedIn = true;
      this.loginMessage = 'Login successful';
      
      const returnUrl = this.activateRoute.snapshot.queryParamMap.get('returnUrl') || '/';
      this.router.navigateByUrl(returnUrl);
      this.auth.login(user);
    } else {
      this.localLoggedIn = false;
      this.loginMessage = 'Invalid username or password';
      this.auth.logout();
    }
  }

  logout() {
    this.localLoggedIn = false;
    this.username = '';
    this.password = '';
    this.loginMessage = '';
    this.auth.logout();
  }
}
