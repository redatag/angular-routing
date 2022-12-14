import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepatmentListComponent } from './depatment-list/depatment-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//هنا فى تكرار زى اللى فى الموييل الافضل اننا نعرف ارراى ونعملها export 
//ونعملها امبورت فى المويل app.module
//define all roustes in app
const routes: Routes = [
  //each rout is an object  contains path which is reflected in the url 
  //and comp to be rendered when navigate to that corresponding path

  // {path: '', component: DepatmentListComponent},
  {path: '', redirectTo: '/departments', pathMatch: 'full'},
  // reoute if the full path is empty
  {
    path: 'departments', 
    component: DepatmentListComponent,
    children:[
      {path:'overview', component: DepartmentContactComponent},
      {path:'contact', component: DepartmentOverviewComponent}

    ]
  },
  {path: 'departments/:id', component: DepartmentDetailComponent},
  // {path: 'departments-list/:id', component: DepartmentDetailComponent},
  //:id is aplace holder for the param
  {path: 'employees', component: EmployeeListComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//used for routting configuration

//ng g c depatment-list -it --is

export const routingComponents = [DepatmentListComponent, EmployeeListComponent,
  DepartmentDetailComponent, PageNotFoundComponent,
  DepartmentOverviewComponent, DepartmentContactComponent]



// git remote add origin https://github.com/redatag/angular-routing.git
// git branch -M main
// git push -u origin main