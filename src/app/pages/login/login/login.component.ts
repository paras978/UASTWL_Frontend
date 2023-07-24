import { Component } from '@angular/core';
import { AuthService } from '../auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginData = { email: '', password: '' };
  loginError: string = '';

  constructor(private authService: AuthService, private router: Router) {localStorage.removeItem('role');}

  


  login() {
    if (!this.loginData.email || !this.loginData.password) {
      this.loginError = 'Please fill in both email and password.';
      return;
    }

    this.authService
      .login(this.loginData.email, this.loginData.password)
      .subscribe(
        (response: any) => {
          
          // Handle successful login
          this.authService.setLoggedInStatus(true);
          console.log(this.authService.setLoggedInStatus);
          localStorage.setItem('role', response.account.role);
          if (response.account.role === 'admin') {
            this.router.navigate(['/Input']);
          } else if (response.account.role === 'user') {
            this.router.navigate(['/List']);
          }
        },
        (error) => {
          // Handle login error
          this.loginError = 'Incorrect email or password.';
        }
      );
  }
}
