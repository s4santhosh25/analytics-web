import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
  }

  signIn(data: NgForm) {
    console.log(data.value);
    this.auth.login(data.value)
      .subscribe(d => {
        if (d.data === "Login Successful") {
          localStorage.setItem('main.token', d.token);
          this.route.navigate(['/dashboard']);
        }
        else {
          alert('Invalid');
        }
      })
  }

}
