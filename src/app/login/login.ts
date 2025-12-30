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
  username = '';
  password = '';
  localLoggedIn = false;
  loginMessage = '';
  users: User[] = [];

  constructor(public auth: AuthService
    , private router: Router
    , private activateRoute: ActivatedRoute
    , private userService: UserService) {

  }

  ngOnInit() {
    // Fetch users for demonstration purposes
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  login() {
    //check if this.username and this.password match a user
    const user = this.users.find(u => u.username === this.username && u.password === this.password);
    if (user){
      this.localLoggedIn = true;
      this.loginMessage = 'Login successful';
      
      const returnUrl = this.activateRoute.snapshot.queryParamMap.get('returnUrl') || '/';
      this.router.navigateByUrl(returnUrl);
      this.auth.login(user);
    }else {
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
