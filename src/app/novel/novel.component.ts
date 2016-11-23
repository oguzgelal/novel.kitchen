import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-novel',
  templateUrl: './novel.component.html',
  styleUrls: ['./novel.component.scss']
})
export class NovelComponent implements OnInit {

  private _sub: any;
  private _action: string;
  private _id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this._sub = this.route.data.subscribe(data => {
      console.log(data['action']);
      if (data['action']){ this._action = data['action']; }
    });
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

}
