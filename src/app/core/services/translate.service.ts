import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  private data: any; // Almacenar los datos d traduccion

  constructor( private http: HttpClient ) {  }

  getData() {

    /*const acceptableLanguages = ['es','es-419','es-ES'];
    const lang = acceptableLanguages.includes(navigator.language) ? navigator.language : 'en';*/

    const lang = navigator.language;
    const langWithTwoCharts = lang.substring(0,2);


    return new Promise((resolve) => {

      this.http.get(`assets/translations/${langWithTwoCharts}.json`).subscribe(data => {
        this.data = data;
        resolve(true);
      })
    })
  }

  public getTranslate(word: string) {
    return this.data[word];  //retorna la palabra traducida
  }


}
