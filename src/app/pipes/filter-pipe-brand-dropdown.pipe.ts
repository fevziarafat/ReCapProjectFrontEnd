import { Pipe, PipeTransform } from '@angular/core';
import { CarList } from '../models/carList';

@Pipe({
  name: 'filterPipeBrandDropdown',
})
export class FilterPipeBrandDropdownPipe implements PipeTransform {
  transform(value: CarList[]): string [] {

    const unique = [...new Set(value.map(item => item.brandName))];
    return unique;
}
}

