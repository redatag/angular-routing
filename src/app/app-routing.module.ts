import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  {path: 'departments', component:DepatmentListComponent},
  {path: 'employees', component:EmployeeListComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//used for routting configuration

//ng g c depatment-list -it --is

export const routingComponents = [DepatmentListComponent, EmployeeListComponent, PageNotFoundComponent]