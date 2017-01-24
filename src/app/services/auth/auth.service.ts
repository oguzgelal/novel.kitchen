import { Injectable, Inject } from '@angular/core';
import { FirebaseAuth, AngularFire } from 'angularfire2';
import { ApiService } from '../api';
import { AccountService } from '../account';
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
    private _account: AccountService,
    private _ls: LsService
  ) {

    let self = this;
    self.fetchLs();
    if (!self.auth || !self.user) {
      self._auth.subscribe(auth => {
        self.auth = auth;
        if (self.auth && self.auth.facebook) {
          self.user = self.auth.facebook;
          self.storeLs();
        }
      });
    }
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
    return self._auth.login().then(res => {
      self.user = res.auth;
      self.storeLs();
      self._account.sync(self.user.uid);
    });
  }

  public logout() {
    this.clear();
    this._account.clear();
    this._ds.clear();
    this._auth.logout();
  }

  public isLoggedIn(): boolean {
    if (this.user) { return true; }
    return false;
  }

}
