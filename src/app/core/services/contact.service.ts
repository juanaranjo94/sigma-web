import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GuestModel } from '../models/guest-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private server: string = 'http://localhost:3002/contacto/create'

  constructor(private http: HttpClient) { }

  add(guest: GuestModel): Observable<any> {
    return this.http.post<GuestModel>(this.server, guest);
  }

}
