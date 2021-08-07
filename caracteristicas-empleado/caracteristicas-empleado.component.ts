import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';


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
    this.miServicio.muestraMensaje(value);
    this.caracteristicasEmpleados.emit(value);
  }
  constructor(private miServicio: ServicioEmpleadosService) { 

  }

  ngOnInit(): void {
  }

}
