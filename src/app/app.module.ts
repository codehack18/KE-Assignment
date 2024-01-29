import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SearchPipe } from './search.pipe';
import { DataTablesModule } from 'angular-datatables';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { TableListingComponent } from './table-list/table-list.component';
import { NgConfirmModule } from 'ng-confirm-box';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SearchPipe,
    NotFoundComponent,
    ProjectListingComponent,
    UsersComponent,
   TableListingComponent,
   SideNavComponent,
   
    
  

    
  
   

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataTablesModule,
    FormsModule,
    HttpClientModule,
    HighchartsChartModule,
    NgConfirmModule,
    NgxSpinnerModule.forRoot({ type: 'ball-spin'}),
    ToastrModule.forRoot({ timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true}),
    ReactiveFormsModule,
    FontAwesomeModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
