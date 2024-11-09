import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user = {
    username: '',
    password: '',
  };

  errorMsg: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  validar() {
    this.auth
      .loginBDD(this.user.username, this.user.password)
      .then((isAuthenticated) => {
        if (isAuthenticated) {
          let navigationExtras: NavigationExtras = {
            state: {
              username: this.user.username,
            },
          };
          this.router.navigate(['/inicio'], navigationExtras);
        } else {
          this.errorMsg = 'Usuario o contraseña incorrectos.';
        }
      })
      .catch((error) => {
        console.error('Error de autenticación:', error);
        this.errorMsg = 'Hubo un problema al iniciar sesión. Por favor, intenta nuevamente.';
      });
  }  
}
