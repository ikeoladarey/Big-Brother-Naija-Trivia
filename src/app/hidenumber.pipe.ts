import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidenumber'
})
export class HidenumberPipe implements PipeTransform {
  transform(value: any): any {
    var last, first, second, num,  newArr, data = "";
    num = value.split(",");

   for (let i =0; i <  num.length; i++) {
      last = num[i].slice(6);
      first = num[i].slice(0, 3);
      second = "***";
      data += first + second + last + ", ";      
    }

    return data;
  }
}
