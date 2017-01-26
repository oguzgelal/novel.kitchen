import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/';
import { DataService } from '../services/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private blink: boolean = false;
  private loading: boolean = false;
  private avatar: Object = {};

  constructor(
    private _auth: AuthService,
    private _ds: DataService
  ) { }

  isLoggedIn(): boolean { return this._auth.isLoggedIn(); }
  login(): void { this._auth.login(); }
  logout(): void { this._auth.logout(); }

  ngOnInit() {
    this._ds.routerData.subscribe(data => {
      this.blink = data.blink;
    });

    this._ds.loading.subscribe(loading => {
      this.loading = loading;
    });

    this._ds.avatar.subscribe(avatar => {
      this.avatar = avatar;
    });
  }

}
