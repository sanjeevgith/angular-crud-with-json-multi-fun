import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpformpageComponent } from './empformpage/empformpage.component';
import { EmpformviewComponent } from './empformview/empformview.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'dashboard',
    component:EmployeeDashboardComponent
  },
  {
    path:'emp',
    component:EmpformpageComponent
  },
  {
    path:'empview',
    component:EmpformviewComponent
  }
 
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
