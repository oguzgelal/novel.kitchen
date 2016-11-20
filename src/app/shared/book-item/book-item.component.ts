import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() author: String;
  @Input() title: String;

  constructor() { }

  ngOnInit() {
  }

}
