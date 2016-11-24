import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;

  constructor() {}

  calculateFontSize() {
    if (this.book && this.book.title){
      let l = this.book.title.length;
      if (l <= 10){ return 18; }
      else if (l > 10 && l <= 20){ return 17; }
      else if (l > 20 && l <= 30){ return 16; }
      else if (l > 30 && l <= 35){ return 15; }
      else if (l > 35 && l <= 40){ return 14; }
      else{ return 13; }
    }
    else { return 18; }
  }

  ngOnInit() {}

}
