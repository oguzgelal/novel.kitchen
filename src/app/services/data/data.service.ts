import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {

  public loading;
  public routerData;

  constructor() {
    this.routerData = new BehaviorSubject({});
    this.loading = new BehaviorSubject({});
  }

  public clear() {
    this.routerData = null;
    this.loading = null;
  }

}
