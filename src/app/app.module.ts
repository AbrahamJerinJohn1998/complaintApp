import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserregComponent } from './userreg/userreg.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddcomplaintComponent } from './addcomplaint/addcomplaint.component';
import { ViewmycomplaintComponent } from './viewmycomplaint/viewmycomplaint.component';
const myRoute:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"userlogin",
    component:UserloginComponent
  },
  {
    path:"userreg",
    component:UserregComponent
  },
  {
    path:"view",
    component:ViewprofileComponent
  },
  {
    path:"dash",
    component:DashboardComponent
  },
  {
    path:"addcomplaint",
    component:AddcomplaintComponent
  },
  {
    path:"mycomplaint",
    component:ViewmycomplaintComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    UserregComponent,
    UserloginComponent,
    NavbarComponent,
    NavbaradminComponent,
    ViewprofileComponent,
    DashboardComponent,
    AddcomplaintComponent,
    ViewmycomplaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
