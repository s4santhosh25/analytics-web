import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { unix } from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CheckAuthService implements CanActivate {
  expiryDateTime: any;
  constructor(private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let token = localStorage.getItem('main.token');
    if (token) {
      try {
        let decoded = jwt_decode(token);
        console.log('decoded', decoded);
        this.expiryDateTime = unix(decoded.exp)
        console.log('expiryDateTime', this.expiryDateTime);
        if (new Date(this.expiryDateTime._d) >= new Date()) {
          return true;
        } else {
          this.route.navigate(['/']);
          return false;
        }
      } catch (e) {
        console.log('e', e.message);
        this.route.navigate(['/']);
        return false;
      }
    }
    else {
      this.route.navigate(['/']);
      return false;
    }
  }
}
