import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    /**
     * Filter array items based on search criteria (query -> args)
     */
    return value.filter(
      function (el) {
        return el.toLowerCase().indexOf(args.toString().toLowerCase()) > -1;
      }
    )

  }

  
}
