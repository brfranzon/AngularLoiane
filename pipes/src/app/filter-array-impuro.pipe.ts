import { Pipe, PipeTransform } from '@angular/core';

import { FilterArrayPipe } from './filter-array.pipe';


@Pipe({
  name: 'filterArrayImpuro',
  pure: false
})

export class FilterArrayImpuroPipe extends FilterArrayPipe {

}
