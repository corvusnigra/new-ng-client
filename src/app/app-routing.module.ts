import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ListEmployeesComponent} from "./list-employees/list-employees.component";
import {EmployeEditComponent} from "./employe-edit/employe-edit.component";
import {EmployeDetailComponent} from "./employe-detail/employe-detail.component";
import {ListDepartmentsComponent} from "./list-departments/list-departments.component";
import {DepartmentEditComponent} from "./department-edit/department-edit.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "employees",
        pathMatch: "full"
      },
      { path: "employees", component: ListEmployeesComponent },
      { path: "employees/edit/:id", component: EmployeEditComponent },
      { path: "employees/detail/:id", component: EmployeDetailComponent },
      { path: "employees/departments", component: ListDepartmentsComponent },
      { path: "employees/departments/edit/:id", component: DepartmentEditComponent }
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
