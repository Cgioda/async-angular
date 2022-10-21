import { Component } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista-estudiantes';
  listaNombres: Array<Persona> = [
    {nombre: 'Pablo', edad: 32,correo:"ejemplo1@hotmail.com", activo: true},
    {nombre: 'Ariel', edad: 5, correo:"ejemplo2@hotmail.com",activo: true},
    {nombre: 'Manolo', edad: 30, correo:"ejemplo3@hotmail.com", activo : true},
    {nombre: 'Manuela', edad: 11, correo:"ejemplo4@hotmail.com", activo : true},
    {nombre: 'Carlos', edad: 16, correo:"ejemplo5@hotmail.com", activo : false},
  ];
}


