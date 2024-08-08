import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnChanges{

  @Input() tipoDni: string = 'DNI';
  formularioDocumento: FormGroup;
  variableNueva: string = 'DNI';

  constructor(private form: FormBuilder) {
    this.formularioDocumento = this.form.group({
      documento: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.variableNueva =  changes?.['tipoDni'].firstChange? 'Libreta civica' : changes?.['tipoDni'].currentValue;
    console.log(changes?.['tipoDni'].currentValue);
  }
  
  hasErrors(controlName: string, errorType: string) {
    return this.formularioDocumento.get(controlName)?.hasError(errorType) && this.formularioDocumento.get(controlName)?.touched;
  }
}
