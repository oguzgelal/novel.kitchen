import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { AuthService } from '../auth';

@Injectable()
export class AccountService {

  private _account: FirebaseObjectObservable<any>;

  constructor(private _af: AngularFire, private _auth: AuthService) {
    this.sync();
  }

  public sync() {
    if (this._auth.auth && this._auth.auth.uid) {
      this._account = this._af.database.object('/account/' + this._auth.auth.uid);
    }
  }

  public get() {
    if (!this._account) { this.sync(); }
    return this._account;
  }
  public set(account) {
    if (!this._account) { this.sync(); }
    return this._account.set(account);
  }

}
