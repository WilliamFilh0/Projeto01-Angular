import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customString',
  standalone: true,
})

// Custom pipe que converte uma string para maiúsculas ou minúsculas com base em um argumento que é passado no componente HTML.
export class CustomStringPipe implements PipeTransform {
  transform(value: string, args?: string) {
    if (args === 'upper') {
      return value.toUpperCase();
    }

    if (args === 'lower') {
      return value.toLowerCase();
    }
    return value;
  }
}
