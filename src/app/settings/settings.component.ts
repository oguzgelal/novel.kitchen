import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data';
import { ApiService } from '../services/api';
import { AuthService } from '../services/auth';
import { AccountService } from '../services/account';
import swal from 'sweetalert2'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  private settings;
  private _sub: any;

  constructor(
    private route: ActivatedRoute,
    public ds: DataService,
    public api: ApiService,
    public auth: AuthService,
    public account: AccountService
  ) { }

  ngOnInit() {
    console.log('settings initialised');
    console.log(this.account);
    this._sub = this.route.data.subscribe(data => {
      this.ds.routerData.next(data);
    });
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

  submit() {
    this.account.save().then(() => {
      swal('Success!', 'Settings saved', 'success');
    }).catch(() => {
      swal('Upps!', 'An error occured', 'error');
    });
  }

}
