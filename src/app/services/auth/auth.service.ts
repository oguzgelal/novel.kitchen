import { Injectable } from '@angular/core';
import { FirebaseAuth, AngularFire } from 'angularfire2';

@Injectable()
export class AuthService {

  public user;
  public auth;
  constructor(private _af: AngularFire, private _auth: FirebaseAuth) {
    let self = this;
    self._auth.subscribe(auth => {
      self.auth = auth;
      if (self.auth && self.auth.facebook){
        self.user = self.auth.facebook;
      }
    });
  }

  public login() {
    let self = this;
    return self._auth.login().then(res => {
      self.user = res.auth;
    });
  }

  public logout() {
    this.auth = null;
    this.user = null;
    this._auth.logout();
  }

  public isLoggedIn(): boolean {
    if (this.user){ return true; }
    return false;
  }

}
