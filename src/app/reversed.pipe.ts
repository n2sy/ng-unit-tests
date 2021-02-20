import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversed'
})
export class ReversedPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.split('').reverse().join('');
  }

}
