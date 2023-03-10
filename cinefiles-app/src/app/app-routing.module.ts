import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { FeedComponent } from './home/feed/feed.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:'home',
    children:[
      {
        component:FeedComponent,
        path: 'feed'
      }
    ]
  },
  {
    component:LandingComponent,
    path:''
  },
  {
    component:RegistrationPageComponent,
    path:'registration'
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
