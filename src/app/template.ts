import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class TemplateComponent implements OnInit, OnDestroy {

  private _sub: any;

  constructor(private route: ActivatedRoute, public ds: DataService) { }

  ngOnInit() {
    this._sub = this.route.data.subscribe(data => {
      this.ds.routerData.next(data);
    });
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

}
