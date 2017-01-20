import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRoutingProviders, routing } from './app.router';

import { AuthService } from './services/auth/';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AuthMethods, AuthProviders, AngularFireModule } from 'angularfire2';
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
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
