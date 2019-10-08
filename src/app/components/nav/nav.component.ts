import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navSelected: string = '';
  image: string;

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
    this.auth.currentMessage.subscribe(data => {
      this.image = data;
    })
  }

  select(data) {
    this.navSelected = data;
  }

  logout() {
    this.auth.logout();
  }

}
