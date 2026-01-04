import { Subscription } from 'rxjs';
import { Router,ActivatedRoute  } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  username = 'admin';
  password = 'admin321';
  localLoggedIn = false;
  loginMessage = '';
  users: User[] = [];
  returnUrl: string = '/';

  constructor(public authService: AuthService
    , private router: Router
    , private activateRoute: ActivatedRoute
    , private userService: UserService) 
  {
    this.returnUrl = this.activateRoute.snapshot.queryParamMap.get('returnUrl') || '/';
  }

  ngOnInit() {
    // Fetch users for demonstration purposes
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.router.navigateByUrl(this.returnUrl);
    });
  }

  login() {
    //check if this.username and this.password match a user
    const user = this.users.find(u => u.username === this.username && u.password === this.password);
    if (user){
      this.localLoggedIn = true;
      this.loginMessage = 'Login successful';
      this.authService.login(user);
      this.router.navigateByUrl(this.returnUrl);
    }else {
      this.localLoggedIn = false;
      this.loginMessage = 'Invalid username or password';
      this.authService.logout();
    }

  }

  logout() {
    this.localLoggedIn = false;
    this.username = '';
    this.password = '';
    this.loginMessage = '';
    this.authService.logout();
  }
}
