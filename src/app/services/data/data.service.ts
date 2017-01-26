import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {

  public loading;
  public avatar;
  public routerData;

  constructor() {
    this.routerData = new BehaviorSubject({});
    this.loading = new BehaviorSubject({
      overlay: false,
      avatar: false,
      message: ''
    });
    this.avatar = new BehaviorSubject({
      image: '',
      loading: true,
      base64: false
    });
  }

  public clear() {
    this.routerData = null;
    this.loading = null;
    this.avatar = null;
  }

}
