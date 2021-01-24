import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { UserDataService } from './user-data.service';
import { HttpClientModule } from '@angular/common/http';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { PageNavBarComponent } from './page-nav-bar/page-nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
    UserPostsComponent,
    PageNavBarComponent,
    LoginPageComponent
  ],
  imports: [
   FormsModule,
   ReactiveFormsModule,
   AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserDataService],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
