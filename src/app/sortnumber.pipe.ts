import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortnumber'
})
export class SortnumberPipe implements PipeTransform {

  transform(array: Array<any>, args: any): any {

    array.sort((x: any, y: any) => {
      let a = x.prize_type.title;
      let b = y.prize_type.title;
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
