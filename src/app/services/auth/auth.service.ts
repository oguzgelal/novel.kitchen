import { Injectable, Inject } from '@angular/core';
import { FirebaseAuth, AngularFire } from 'angularfire2';
import { ApiService } from '../api';
//import { AccountService } from '../account';
import { DataService } from '../data';
import { LsService } from '../ls';
import { UtilsService } from '../utils';

@Injectable()
export class AuthService {

  public user;
  public auth;
  public userimage;

  constructor(
    private _af: AngularFire,
    private _auth: FirebaseAuth,
    private _api: ApiService,
    private _ds: DataService,
    //private _account: AccountService,
    private _ls: LsService,
    private _utils: UtilsService
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
    this.userimage = this._ls.get('auth_userimage');
    if (this.userimage) {
      this._ds.avatar.next({
        image: this.userimage,
        loading: false,
        base64: true
      });
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
        // store profile image in base64 if doesn't exist
        if (!self.userimage) {
          self._utils.imgToBase64(self.user.photoURL, function (base64) {
            self.userimage = base64;
            self._ls.set('auth_userimage', self.userimage);
            self._ds.avatar.next({
              image: self.userimage,
              loading: false,
              base64: true
            });
          }, 'image/png');
        }
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
