import { Injectable } from '@angular/core';

@Injectable()
export class LsService {

  public localStorage: any;
  public prefix: string = 'nk_';

  constructor() {
    if (!localStorage) { throw new Error('Current browser does not support Local Storage'); }
    this.localStorage = localStorage;
  }

  public set(key: string, value: string): void {
    console.log('LS: Setting key '+key);
    this.localStorage[this.prefix + key] = value;
  }

  public get(key: string): string {
    console.log('LS: Getting key '+key);
    return this.localStorage[this.prefix + key] || null;
  }

  public setObject(key: string, value: any): void {
    console.log('LS: Setting object key '+key);
    this.localStorage[this.prefix + key] = JSON.stringify(value);
  }

  public getObject(key: string): any {
    console.log('LS: Getting object key '+key);
    return JSON.parse(this.localStorage[this.prefix + key] || null);
  }

  public remove(key: string): any {
    console.log('LS: Removing key '+key);
    this.localStorage.removeItem(this.prefix + key);
  }

}
