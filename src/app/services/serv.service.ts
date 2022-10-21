import { Injectable } from '@angular/core';
import { Persona } from 'src/app/models/persona';



@Injectable({
  providedIn: 'root'
})
export class ServService {
  personas: Persona[]= [{
    nombre: 'mario',
    edad: 23,
    correo: 'pepesand@gmail.com',
    activo: true

  }]

  constructor() { }



obtenerPersona(){
  return new Promise ((resolve, reject) => {
    if (this.personas.length > 0){
      resolve (this.personas);
    }
    else{
      reject({
        codigo:0,
        mensaje: 'No'
      })
    }
  })
}


}