import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@core/services/translate.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private translateSvc: TranslateService){}

  transform(value: string): any {
    return this.translateSvc.getTranslate(value) ? this.translateSvc.getTranslate(value) : '';
  }

}
