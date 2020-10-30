import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(value: string[], key: string): string {
    if (value) {
      return value.map(res => res[key]).join(',');
    } else {
      return '';
    }
  }

}
