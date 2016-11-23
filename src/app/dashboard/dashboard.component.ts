import { Component, OnInit } from '@angular/core';
import { BookList } from '../models/bookList';
import { Book } from '../models/book';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  myBooks: BookList;
  booksRead: BookList;
  booksFavorited: BookList;
  booksSaved: BookList;

  constructor() {

    let b1 = new Book({ title: 'Franny and Zoey', author: 'J.D. Salinger' });
    let b2 = new Book({ title: '1984', author: 'George Orwel' });
    let b3 = new Book({ title: 'Animal Farm', author: 'George Orwel' });
    let b4 = new Book({ title: 'Hitchikers Guide to the Galaxy', author: 'Douglas Adams' });
    let b5 = new Book({ title: 'Pride and Prejudice', author: 'Jane Austen' });
    let b6 = new Book({ title: 'Down and Out in London and Paris', author: 'George Orwel' });
    let b7 = new Book({ title: 'Catcher in the Rye', author: 'J.D. Salinger' });
    let b8 = new Book({ title: 'A Tale of Two Cities', author: 'Charles Dickens' });

    this.myBooks = new BookList({
      title: 'My Books',
      books: [b1, b3, b4, b8]
    });

    this.booksRead = new BookList({
      title: 'Books Read',
      books: [b2, b3, b6]
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
  }

}
