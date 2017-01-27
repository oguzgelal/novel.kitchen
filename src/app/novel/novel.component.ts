import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/book';
import { DataService } from '../services/data';
import { AuthService } from '../services/auth';
import { AccountService } from '../services/account';

@Component({
  selector: 'app-novel',
  templateUrl: './novel.component.html',
  styleUrls: ['./novel.component.scss']
})
export class NovelComponent implements OnInit, OnDestroy {

  private _routeDataSub: any;
  private _accountSub: any;

  private _action: string;
  private _id: number;

  public u = { name: '' }
  public account: Object = {};
  public book: Book;

  constructor(
    private route: ActivatedRoute,
    private _ds: DataService,
    private _auth: AuthService,
    private _account: AccountService) { }

  ngOnInit() {
    this._routeDataSub = this.route.data.subscribe(data => {
      this._ds.routerData.next(data);
      if (data['action']) { this._action = data['action']; }
      this.prepareObject();
    });
    this._accountSub = this._account.get().subscribe(data => {
      this.account = data;
    });
  }

  getUserRealName() {
    try { return this._auth.user.displayName; }
    catch (e) { return ''; }
  }

  getAccountUsername() {
    return this.account['username'];
  }

  authorModelChange(changelog){
    this.book.authorType = changelog.authorType;
    this.book.verified = !!(changelog && changelog.verified);
    this.book.anon = !!(changelog && changelog.anon);
  }

  prepareObject() {
    if (this._action === 'new') {
      this.book = new Book();
    }
  }

  ngOnDestroy() {
    this._routeDataSub.unsubscribe();
    this._accountSub.unsubscribe();
  }

}
