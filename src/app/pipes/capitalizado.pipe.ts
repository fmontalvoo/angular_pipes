import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, arg: boolean = true): string {
        value = value.toLowerCase();
        let nombre: string[] = value.split(' ');
        if (arg) {
            for (let i in nombre) {
                nombre[i] = nombre[i][0].toUpperCase() + nombre[i].substring(1);
            }
        } else {
            nombre[0] = nombre[0][0].toUpperCase() + nombre[0].substring(1);
        }
        return nombre.join(' ');
    }
}