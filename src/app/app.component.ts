import { Component } from '@angular/core';
import { AuthService } from './services/auth/';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _auth: AuthService) {
  }

  isLoggedIn(): boolean { return this._auth.isLoggedIn(); }
  login(): void { this._auth.login(); }
  logout(): void { this._auth.logout(); }

}
