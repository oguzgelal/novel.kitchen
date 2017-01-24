import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { BookList } from '../models/bookList';
import { Book } from '../models/book';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  myBooks: BookList;
  booksRead: BookList;
  booksToRead: BookList;
  booksFavorited: BookList;
  booksSaved: BookList;

  private _sub: any;

  constructor(
    private route: ActivatedRoute,
    public ds: DataService,
    @Inject(Book) bookFactory,
    @Inject(BookList) bookListFactory
  ) {
    let b1 = bookFactory({ title: 'Franny and Zoey', author: 'J.D. Salinger', color: 'wet_asphalt' });
    let b2 = bookFactory({ title: '1984', author: 'George Orwel', color: 'asbestos' });
    let b3 = bookFactory({ title: 'Animal Farm', author: 'George Orwel', color: 'pumpkin' });
    let b4 = bookFactory({ title: 'Hitchikers Guide to the Galaxy', author: 'Douglas Adams', color: 'belize_hole' });
    let b5 = bookFactory({ title: 'Pride and Prejudice', author: 'Jane Austen', color: 'wisteria' });
    let b6 = bookFactory({ title: 'Down and Out in London and Paris', author: 'George Orwel', color: '' });
    let b7 = bookFactory({ title: 'Catcher in the Rye', author: 'J.D. Salinger', color: 'green_sea' });
    let b8 = bookFactory({ title: 'A Tale of Two Cities', author: 'Charles Dickens', color: 'pomegranate' });

    this.myBooks = bookListFactory({
      title: 'My Books',
      books: [b1, b3, b4, b8]
    });

    this.booksRead = bookListFactory({
      title: 'Books Read',
      books: [b2, b3, b6]
    });

    this.booksToRead = bookListFactory({
      title: 'To Read',
      books: [b4, b7, b6, b5, b3, b8, b2, b1]
    });

    this.booksFavorited = bookListFactory({
      title: 'Books Favorited',
      books: [b7, b4, b5, b6, b8, b2, b1]
    });

    this.booksSaved = bookListFactory({
      title: 'Books Saved',
      books: [b3, b1, b2, b4, b5, b6, b7, b8]
    });

  }

  ngOnInit() {
    this._sub = this.route.data.subscribe(data => {
      this.ds.routerData.next(data);
    });
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

}
