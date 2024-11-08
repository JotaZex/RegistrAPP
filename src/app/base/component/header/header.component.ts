import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent{
  username= '';
  password = '';
  email = '';

  constructor(
    private menu: MenuController,
    private router: Router,
    private auth: AuthService
  ) {

    const navegacion = this.router.getCurrentNavigation();
    const state = navegacion?.extras.state as {
      username: string;
    };  
    if (state) {
      this.username = state.username || '';
    }
  }

  navigateTo(page: string) {
    this.router.navigate([page]);
    this.menu.close();
  }

  cerrarSesion() {
    this.menu.close();
    console.log("Cerrando sesión...");
    this.auth.logout();
    this.router.navigate(['/home']);
  }
}