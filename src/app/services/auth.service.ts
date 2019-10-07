import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { api } from "../../config.js";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route: Router) { }

  login(payload: any): Observable<any> {
    return this.http.post(api + '/api/login', payload)
  }

  register(payload: any): Observable<any> {
    return this.http.post(api + '/api/register', payload)
  }

  logout() {
    localStorage.removeItem('main.token');
    this.route.navigate(['/']);
  }

}
