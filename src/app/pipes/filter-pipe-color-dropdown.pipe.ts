import { Pipe, PipeTransform } from '@angular/core';
import { CarList } from '../models/carList';

@Pipe({
  name: 'filterPipeColorDropdown',
})
export class FilterPipeColorDropdownPipe implements PipeTransform {
  transform(value: CarList[]): string[] {
    const unique = [...new Set(value.map((item) => item.colorName))];

    return unique;
  }
}
