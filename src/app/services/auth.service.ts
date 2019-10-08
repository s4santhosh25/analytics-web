import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { api } from "../../config.js";
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  updatedImage: string;
  trigger = new EventEmitter<any>();
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

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

  updateProfileImage(data) {
    this.updatedImage = data;
    this.messageSource.next(this.updatedImage);
  }

}
