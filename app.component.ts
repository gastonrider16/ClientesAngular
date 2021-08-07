import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpleadosService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de empleados';
  cuadroNombre: string="";
  cuadroApellido: string="";
  cuadroCargo: string="";
  cuadroSalario: number=0;
  empleados:Empleado[]=[];
  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje("Nombre empleado: "+miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }
  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){
    this.empleados = this.empleadosService.empleados;

  }
}
