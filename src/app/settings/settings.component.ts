import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data';
import { ApiService } from '../services/api';
import { AuthService } from '../services/auth';
import { AccountService } from '../services/account';

import swal from 'sweetalert2';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  private settings = {};
  private _sub: any;
  private _data: any;

  constructor(
    private route: ActivatedRoute,
    public ds: DataService,
    public api: ApiService,
    public auth: AuthService,
    public account: AccountService
  ) { }

  ngOnInit() {
    let self = this;
    self._sub = self.route.data.subscribe(data => {
      self.ds.routerData.next(data);
    });
    this.ds.loading.next({ overlay: true });
    self._data = this.account.get().subscribe(data => {
      this.settings['username'] = data.username;
      this.settings['bio'] = data.bio;
      this.ds.loading.next({ on: false });
    });
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
    this._data.unsubscribe();
  }

  submit() {
    this.account.set(this.settings).then(() => {
      swal('Success!', 'Settings saved', 'success');
    }).catch(() => {
      swal('Upps!', 'An error occured', 'error');
    });
  }

}
