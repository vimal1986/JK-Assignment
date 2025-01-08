import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private router: Router) {}

  loginWithGoogle() {
    // Simulate login
    localStorage.setItem('token', 'fake-jwt-token');
    this.router.navigate(['/dashboard']);
  }
}
