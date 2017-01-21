import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/book';
import { DataService } from '../services/data';

@Component({
  selector: 'app-novel',
  templateUrl: './novel.component.html',
  styleUrls: ['./novel.component.scss']
})
export class NovelComponent implements OnInit, OnDestroy {

  private _sub: any;
  private _action: string;
  private _id: number;
  public book: Book;

  constructor(private route: ActivatedRoute, public ds: DataService) { }

  ngOnInit() {
    this._sub = this.route.data.subscribe(data => {
      this.ds.routerData.next(data);
      if (data['action']) { this._action = data['action']; }
      this.prepareObject();
    });
  }

  prepareObject() {
    if (this._action === 'new') {
      this.book = new Book();
    }
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

}
