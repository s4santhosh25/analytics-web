import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
  }

  create(data: NgForm) {
    console.log(data.value);
    this.auth.register(data.value)
      .subscribe(d => {
        if (d.data === "Registration Successful") {
          this.route.navigate(['/']);
        }
        else {
          alert('Invalid');
        }
      })
  }

}
