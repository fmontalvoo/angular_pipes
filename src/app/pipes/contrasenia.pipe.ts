import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenia'
})
export class ContraseniaPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = false): any {
    if (mostrar)
      return value.replace(/./gi, '\*');
    else
      return value;
  }

}
