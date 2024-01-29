import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { TableListingComponent } from './table-list/table-list.component';
import { SideNavComponent } from './side-nav/side-nav.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'users', component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sidenav', component: SideNavComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'project-listing', component: ProjectListingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'table', component: TableListingComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ]
})
export class AppRoutingModule { }
