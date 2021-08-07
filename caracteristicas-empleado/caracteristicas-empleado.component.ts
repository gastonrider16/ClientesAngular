import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent implements OnInit {
  //PASO 1
  @Output() caracteristicasEmpleados = new EventEmitter<string>();
  
  //PASO 2
  agregaCaracteristicas(value: string) {
    this.caracteristicasEmpleados.emit(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
