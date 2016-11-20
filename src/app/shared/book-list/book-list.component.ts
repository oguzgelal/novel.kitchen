import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() title: String;

  constructor() {}

  ngOnInit() {
  }

}
