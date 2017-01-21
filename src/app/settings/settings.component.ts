import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  private settings;
  private _sub: any;

  constructor(private route: ActivatedRoute, public ds: DataService) {
    this.settings = {
      username: ''
    }
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
