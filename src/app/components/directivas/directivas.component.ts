import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';


@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit { 
  @Input() listaNombres: Array <any> ;

  constructor() { }

  ngOnInit(): void {
  }

eliminarPersona(persona:Persona){
  persona.activo = false 
}


}


