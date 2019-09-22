import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { LibraryComponent } from './library/library.component';
import { UserlibraryComponent } from './userlibrary/userlibrary.component';
import { AuthGuardServiceService } from './auth-guard-service.service';
import { IssueComponent } from './issue/issue.component';
import { AuthGuardAdminService } from './auth-guard-admin.service';

const routes: Routes = [


    {path : '',redirectTo: '/homepage', pathMatch:'full'},
    {path : 'homepage', component: HomepageComponent},
    {path : 'userpage', component: UserpageComponent},
    {path : 'adminpage', component: AdminpageComponent},
    {path : 'userregistration', component: UserregistrationComponent},
    {path : 'library', component: LibraryComponent,canActivate:[AuthGuardAdminService]},
    {path : 'userlibrary', component: UserlibraryComponent,canActivate:[AuthGuardServiceService]},
    {path : 'issue', component: IssueComponent,canActivate:[AuthGuardAdminService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
