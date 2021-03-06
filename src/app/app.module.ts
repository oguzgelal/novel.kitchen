// Angular default
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRoutingProviders, routing } from './app.router';
// Third party services
import { AngularFire, AuthMethods, AuthProviders, AngularFireModule } from 'angularfire2';
// Custom services
import { AuthService } from './services/auth/';
import { ApiService } from './services/api/';
import { DataService } from './services/data/';
import { AccountService } from './services/account/';
import { LsService } from './services/ls/';
import { UtilsService } from './services/utils/';
// Models
import { Book } from './models/book';
import { BookList } from './models/bookList';
// Components
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './shared/book-list/book-list.component';
import { BookItemComponent } from './shared/book-item/book-item.component';
import { NovelComponent } from './novel/novel.component';
import { HeaderComponent } from './header/header.component';
import { SettingsComponent } from './settings/settings.component';

const firebaseConfig = environment.firebaseConfig;
const firebaseAuthConfig = {
  provider: AuthProviders.Facebook,
  method: AuthMethods.Popup,
  remember: 'default',
  scope: ['email']
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    BookListComponent,
    BookItemComponent,
    NovelComponent,
    HeaderComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    routing
  ],
  providers: [
    appRoutingProviders,
    AuthService,
    ApiService,
    DataService,
    AccountService,
    LsService,
    UtilsService,
    {
      provide: Book,
      useFactory: () => {
        return (options?: any) => {
          return new Book(options);
        }
      }
    },
    {
      provide: BookList,
      useFactory: () => {
        return (options?: any) => {
          return new BookList(options);
        }
      }
    },
    /*
    {
      provide: Account,
      deps: [AngularFire],
      useFactory: (_af) => {
        return () => {
          return new Account(_af);
        }
      }
    }
    */
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }

}
