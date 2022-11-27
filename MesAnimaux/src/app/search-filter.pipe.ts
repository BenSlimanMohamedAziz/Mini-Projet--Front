import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './model/animal.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: Animal[], filterText: string): any {
    return list ? list.filter(item =>
    item.nomAnimal.toLowerCase().includes(filterText)) : [];
    }

}
