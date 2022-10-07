import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';


@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  listaNombres: Array<Persona> = [
    {nombre: 'Pablo', edad: 32},
    {nombre: 'Ariel', edad: 5},
    {nombre: 'Manolo', edad: 30},
    {nombre: 'Manuela', edad: 11},
    {nombre: 'Carlos', edad: 16},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
