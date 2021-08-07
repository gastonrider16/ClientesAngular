import { Empleado } from "./empleado.model";

export class EmpleadosService {
    empleados:Empleado[]=[
        new Empleado("Juan","Gomez","Programador",600000),
        new Empleado("Gastón","Ramirez","Programador",40000)
    ];
    agregarEmpleadoServicio(empleado:Empleado){
        this.empleados.push(empleado);
    }
}