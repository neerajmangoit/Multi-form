import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeCheck'
})
export class TypeCheckPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return this.isNumber;
  }
  isNumber(o): boolean {
    return ! isNaN (o-0) && o !== null && o !== "" && o !== false;
  }

}
