import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  navSelected: string = '';

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
  }

  select(data) {
    this.navSelected = data;
  }

  logout() {
    this.auth.logout();
  }

}
