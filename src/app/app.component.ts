import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = "Frank";
  nombre_completo: string = "frank gabriel montalvo ochoa";
  PI: number = Math.PI;
  a: number = 0.517;
  salario: number = 394.5;
  persona: any = {
    id: 1,
    nombre: "FGMO",
    edad: 24
  };
  promesa: any = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hola'), 1500);
  });
  fecha: Date = new Date();
  video: string = "GccwGBwqODw";
  constrasenia: string = "Abc.246";
  mostrar: boolean = true;
}
