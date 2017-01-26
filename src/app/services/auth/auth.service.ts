import { Injectable, Inject } from '@angular/core';
import { FirebaseAuth, AngularFire } from 'angularfire2';
import { ApiService } from '../api';
//import { AccountService } from '../account';
import { DataService } from '../data';
import { LsService } from '../ls';

@Injectable()
export class AuthService {

  public user;
  public auth;

  constructor(
    private _af: AngularFire,
    private _auth: FirebaseAuth,
    private _api: ApiService,
    private _ds: DataService,
    //private _account: AccountService,
    private _ls: LsService
  ) {
    let self = this;
    self.fetchLs();
    self.refresh();
  }

  public clear() {
    this.auth = null;
    this.user = null;
    this._ls.remove('auth_data');
  }
  public storeLs() {
    this._ls.setObject('auth_data', {
      auth: this.auth,
      user: this.user
    });
  }
  public fetchLs() {
    let data = this._ls.getObject('auth_data');
    if (data) {
      this.auth = data.auth;
      this.user = data.user;
    }
  }

  public login() {
    let self = this;
    return self._auth.login().then(_ => {
      self.refresh();
    });
  }

  public refresh() {
    console.log('Refreshing...');
    let self = this;
    self._auth.subscribe(auth => {
      self.auth = auth;
      console.log(self.auth);
      if (self.auth && self.auth.facebook) {
        self.user = self.auth.facebook;
        self._ds.avatar.next({
          image: self.user.photoURL,
          loading: false
        });
        self.storeLs();
      }
    });
  }

  public logout() {
    this.clear();
    this._ds.clear();
    this._auth.logout();
  }

  public isLoggedIn(): boolean {
    if (this.user) { return true; }
    return false;
  }

}
