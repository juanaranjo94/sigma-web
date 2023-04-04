import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private _http: HttpClient) { }

  getAllDepartments(): Observable<any[]>{
    return this._http.get<any[]>('https://sigma-studios.s3-us-west-2.amazonaws.com/test/colombia.json')
  }  
}
