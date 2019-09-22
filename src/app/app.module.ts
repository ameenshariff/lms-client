import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { LibraryComponent } from './library/library.component';
import { UserlibraryComponent } from './userlibrary/userlibrary.component';
import { TabModule } from 'angular-tabs-component';
import { HttpClientModule } from '@angular/common/http';
import { IssueComponent } from './issue/issue.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdminpageComponent,
    UserpageComponent,
    UserregistrationComponent,
    LibraryComponent,
    UserlibraryComponent,
    IssueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TabModule,
    HttpClientModule
    // IgxTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
