import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {
  formularioRegistro: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.formularioRegistro = fb.group ({
      nombre: new FormControl ('', [Validators.required, Validators.maxLength(12), Validators.minLength(3)]),
      edad: new FormControl ('' , [Validators.maxLength(2)]),
      correo: new FormControl ('', [Validators.email]),
      contrasena: new FormControl ('' , [Validators.required,Validators.maxLength(15), Validators.minLength(8)])

    })
   }

  ngOnInit(): void {
  }


inhabilitadoAlerta()
{alert("Por el momento no esta permitido agregar usuarios")}


  agregarAlumno(){
  }
}
