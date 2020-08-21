import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], pretragaTexta: string): any[] {
    if(!items) return [];
    if(!pretragaTexta) return items;
    pretragaTexta = pretragaTexta.toLowerCase();
    return items.filter(i =>{
      return i.ime.toLowerCase().includes(pretragaTexta);
    });
  }

}
