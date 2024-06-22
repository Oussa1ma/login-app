import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  router = inject(Router);
  localStorage = inject(LocalStorageService);
  errorMessage = '';
  successMessage = '';

  goToRegister() {
    this.router.navigateByUrl('/register');
  }

  onSubmit(value: any) {
    let users = this.localStorage.getItem('users');
    this.errorMessage = '';
    this.successMessage = '';
    if (users) {
      let loggedIn = false;
      users.forEach((element) => {
        if (element.email == value.email && element.password == value.password)
          loggedIn = true;
      });
      if (loggedIn) {
        this.successMessage = 'Connecté(e) avec succès';
        this.goToHome();
        return;
      }
      this.errorMessage = 'Email ou mot de passe incorrecte!';
      return;
    }
  }

  goToHome() {
    setTimeout(() => {
      this.router.navigateByUrl('/home');
    }, 2000);
  }
}
