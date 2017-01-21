import { Component, OnInit, OnDestroy } from '@angular/core';
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

  constructor(private route: ActivatedRoute, public ds: DataService) {

    let b1 = new Book({ title: 'Franny and Zoey', author: 'J.D. Salinger', color: 'wet_asphalt' });
    let b2 = new Book({ title: '1984', author: 'George Orwel', color: 'asbestos' });
    let b3 = new Book({ title: 'Animal Farm', author: 'George Orwel', color: 'pumpkin' });
    let b4 = new Book({ title: 'Hitchikers Guide to the Galaxy', author: 'Douglas Adams', color: 'belize_hole' });
    let b5 = new Book({ title: 'Pride and Prejudice', author: 'Jane Austen', color: 'wisteria' });
    let b6 = new Book({ title: 'Down and Out in London and Paris', author: 'George Orwel', color: '' });
    let b7 = new Book({ title: 'Catcher in the Rye', author: 'J.D. Salinger', color: 'green_sea' });
    let b8 = new Book({ title: 'A Tale of Two Cities', author: 'Charles Dickens', color: 'pomegranate' });

    this.myBooks = new BookList({
      title: 'My Books',
      books: [b1, b3, b4, b8]
    });

    this.booksRead = new BookList({
      title: 'Books Read',
      books: [b2, b3, b6]
    });

    this.booksToRead = new BookList({
      title: 'To Read',
      books: [b4, b7, b6, b5, b3, b8, b2, b1]
    });

    this.booksFavorited = new BookList({
      title: 'Books Favorited',
      books: [b7, b4, b5, b6, b8, b2, b1]
    });

    this.booksSaved = new BookList({
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
