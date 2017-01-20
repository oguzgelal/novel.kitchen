import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  isLoggedIn(): boolean { return this._auth.isLoggedIn(); }
  login(): void { this._auth.login(); }
  logout(): void { this._auth.logout(); }

  ngOnInit() {
  }

}
