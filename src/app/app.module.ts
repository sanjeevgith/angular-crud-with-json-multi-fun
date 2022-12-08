import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/api.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmpformpageComponent } from './empformpage/empformpage.component';
import { EmpformviewComponent } from './empformview/empformview.component';
import { MultiarrayDemoComponent } from './multiarray-demo/multiarray-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    LoginComponent,
    SignupComponent,
    EmpformpageComponent,
    EmpformviewComponent,
    MultiarrayDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
