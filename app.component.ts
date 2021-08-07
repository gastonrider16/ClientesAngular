import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de empleados';
  empleados:Empleado[]=[
    new Empleado("Juan","Gomez","Programador",600000),
    new Empleado("Gastón","Ramirez","Programador",40000)
  ];
  cuadroNombre: string="";
  cuadroApellido: string="";
  cuadroCargo: string="";
  cuadroSalario: number=0;
  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje("Nombre empleado: "+miEmpleado.nombre);
    this.empleados.push(miEmpleado);
  }
  constructor(private miServicio:ServicioEmpleadosService){

  }
}
