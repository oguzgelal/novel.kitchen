import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {

  public routerData;

  constructor() {
    this.routerData = new BehaviorSubject({});
  }

}
