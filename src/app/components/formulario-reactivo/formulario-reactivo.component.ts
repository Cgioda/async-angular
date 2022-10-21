import { Component, ComponentFactoryResolver, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {
@Input() listaNombres: Array <any> ;

addTodo(arg0: string) {
throw new Error('Method not implemented.');
}
  formularioRegistro: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.formularioRegistro = fb.group ({
      nombre: new FormControl ('', [Validators.required, Validators.maxLength(12), Validators.minLength(3)]),
      edad: new FormControl ('' , [Validators.maxLength(2)]),
      correo: new FormControl ('', [Validators.email]),
    })
   }

  ngOnInit(): void {
  }


inhabilitadoAlerta()
{
  console.log(this.formularioRegistro)
  this.listaNombres.push( {nombre: this.formularioRegistro.value.nombre , edad: this.formularioRegistro.value.edad, correo: this.formularioRegistro.value.correo, activo: true})
  }
}