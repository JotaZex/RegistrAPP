import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  pageTitle: string = 'Inicio';
  // Usuario
  user = {
    "username": "",
    "nombre": "",
    "apellido": "",
    "email": ""
  }

  constructor(private router:Router, private auth:AuthService) { 
    // Se reciben los datos enviados desde el login
    const navegacion = this.router.getCurrentNavigation();
    const state = navegacion?.extras.state as {
      username: "";
      nombre: "";
      apellido: "";
      email: "";
    };
    this.user.username = state.username;
    this.user.nombre = state.nombre;
    this.user.apellido = state.apellido;
    this.user.email = state.email;
  };


  ngOnInit() {
  }

}