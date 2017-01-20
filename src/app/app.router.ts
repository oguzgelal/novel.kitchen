import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }  from './home/home.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { NovelComponent }  from './novel/novel.component';
import { SettingsComponent } from './settings/settings.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'me', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent },
  {
    path: 'novel',
    children: [
      { path: '', redirectTo: 'new' },
      { path: 'new', component: NovelComponent, data: {action: 'new'} },
      { path: ':id', component: NovelComponent, data: {action: 'view'} },
      { path: ':id/edit', component: NovelComponent, data: {action: 'edit'} }
    ]
  }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
