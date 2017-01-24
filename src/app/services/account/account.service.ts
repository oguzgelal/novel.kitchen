import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { LsService } from '../ls';

@Injectable()
export class AccountService {
  private _accountObservable: FirebaseObjectObservable<any>;

  // fields
  public uid: string;
  public username: string;
  public bio: string;

  constructor(
    private _af: AngularFire,
    private _ls: LsService
  ) {
    this.fetchLs();
  }

  public clear() {
    this.uid = null;
    this.username = null;
    this.bio = null;
    this._accountObservable = null;
    this._ls.remove('account_data');
  }
  public storeLs() {
    this._ls.setObject('account_data', {
      uid: this.uid,
      username: this.username,
      bio: this.bio
    });
  }
  public fetchLs() {
    let data = this._ls.getObject('account_data');
    if (data) {
      this.uid = data.uid;
      this.username = data.username;
      this.bio = data.bio;
      this._accountObservable = this._af.database.object('/account/' + this.uid);
    }
  }

  public sync(uid) {
    this.clear();
    this.uid = uid;
    this._accountObservable = this._af.database.object('/account/' + uid);
    this._accountObservable.subscribe(data => {
      this.username = data.username;
      this.bio = data.bio;
      this.storeLs();
    });
  }

  public save() {
    this.storeLs();
    if (this._accountObservable && this.uid) {
      return this._accountObservable.set({
        uid: this.uid,
        username: this.username,
        bio: this.bio
      });
    }
    return null;
  }

}
