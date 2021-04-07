import { Pipe, PipeTransform } from '@angular/core';

import { CarList } from '../models/carList';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(value: CarList[], filterText: string): CarList[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (c: CarList) =>
            c.carName.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
