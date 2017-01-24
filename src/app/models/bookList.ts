import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class BookList {
  title: string;
  books: Book[];

  constructor(options?: any) {
    this.title = (options && options.title) ? options.title : '';
    this.books =  (options && options.books) ? options.books : [];
  }
}
