import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  router = inject(Router);
  localStorage = inject(LocalStorageService);
  errorMessage = '';
  successMessage = '';

  goToLogin() {
    this.router.navigateByUrl('/login');
  }

  onSubmit(value: any) {
    let users = this.localStorage.getItem('users');
    this.errorMessage = '';
    this.successMessage = '';
    if (users) {
      let isValidUser = true;
      users.forEach((element) => {
        if (element.email == value.email) isValidUser = false;
      });
      if (isValidUser) {
        users = [...users, value];
        this.localStorage.saveItem('users', users);
        this.successMessage = 'Inscrit(e) avec succès';
        setTimeout(() => {
          this.goToLogin();
        }, 2000);
        return;
      }
      this.errorMessage = 'Email déja existe!';
      return;
    }
    users = [value];
    this.localStorage.saveItem('users', users);
    this.successMessage = 'Inscrit(e) avec succès';
    setTimeout(() => {
      this.goToLogin();
    }, 2000);
  }
}
