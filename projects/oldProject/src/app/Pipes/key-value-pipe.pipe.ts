import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyValuePipe'
})
export class KeyValuePipePipe implements PipeTransform {

  transform(arr: any, ...args: any[]): any {
    return Object.keys(arr).sort();
  }

}
