import { Component, OnInit, Input } from '@angular/core';
import { BookList } from '../../models/bookList';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() list: BookList;

  constructor() {}

  ngOnInit() {}

}
