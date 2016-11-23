import { Book } from './book';

export class BookList {
  title: string;
  books: Book[];

  constructor(options?: any) {
    this.title = options.title ? options.title : '';
    this.books =  options.books ? options.books : [];
  }
}
