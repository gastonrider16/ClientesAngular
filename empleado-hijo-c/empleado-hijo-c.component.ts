import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit {
  @Input() empleadoDeLista: Empleado;
  @Input() indice: number;
  constructor() { }

  ngOnInit(): void {
  }
  empleados:Empleado[]=[
    new Empleado("A","B","Programador",600000),
    new Empleado("C","D","Programador",40000)
  ];
  empleadoAgregado(empleado:Empleado){
    this.empleados.push(empleado);
  }
  //PASO 4
  arrayCaracteristicas = [''];
  agregarCaracteristica(nuevaCaracteristica:string){
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }
}
