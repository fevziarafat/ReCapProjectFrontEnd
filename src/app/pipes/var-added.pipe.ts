import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'varAdded',
})
export class VarAddedPipe implements PipeTransform {
  transform(value: number, rate: number): number {
    return value + (value * rate) / 100;
  }
}
