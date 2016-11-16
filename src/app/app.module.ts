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
import { DashmenuComponent } from './dashboard/shared/dashmenu/dashmenu.component';
import { DashcrumbComponent } from './dashboard/shared/dashcrumb/dashcrumb.component';
import { HomeComponent } from './home/home.component';

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
    DashmenuComponent,
    DashcrumbComponent,
    HomeComponent
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
