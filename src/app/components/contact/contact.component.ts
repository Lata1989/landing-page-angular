import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {


  formularioContacto: FormGroup;
  tipoDni: string = 'DNI';
  mostrarDNI: boolean = false;
  /*
  usuarioActivo: any = {
    nombre: 'Latita',
    apellido: 'de la Iglesia',
    documento: '34277576',
    email: 'pabloalejandrodelaiglesia@gmail.com'
  };
  */

  constructor(private form: FormBuilder) {
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: [''],
      tipoDni: [''],
      email: ['', [Validators.email, Validators.required]]
    })
  }

  ngOnInit(): void {

    /*
    // Para eliminar validadores
    this.formularioContacto.get('apellido')?.clearValidators();
    this.formularioContacto.get('apellido')?.updateValueAndValidity();
    this.formularioContacto.get('apellido')?.setValidators([Validators.required, Validators.minLength(4)]) // Otra forma de validar el ingreso
    this.formularioContacto.patchValue({
      nombre: this.usuarioActivo.nombre,
      apellido: this.usuarioActivo.apellido,
      documento: this.usuarioActivo.documento,
      email: this.usuarioActivo.email,
    })
    this.formularioContacto.get('nombre')?.disable();
    this.formularioContacto.get('apellido')?.disable();
    this.formularioContacto.get('documento')?.disable();
    */
  
    // Suscripciones
    // this.formularioContacto.valueChanges.subscribe( valor => {
    //   console.log(valor);
    // })
    this.formularioContacto.get('nombre')?.setValue('Latita');
    this.formularioContacto.get('nombre')?.disable();
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe( value =>{
      this.mostrarDNI = value != '';
      this.tipoDni = value;
    })
  }

  ngOnDestroy(): void {
    console.log('El componente hizo catapunchis!')
  }

  enviar() {
    console.log(this.formularioContacto);
  };

  hasErrors(controlName: string, errorType: string) {
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched;
  }

  /*
  Formulario tipo plantilla
  public usuario: any = {
    nombre : '',
    email: ''
  }

  enviar() {
    console.log(this.usuario);
  }
*/
}
