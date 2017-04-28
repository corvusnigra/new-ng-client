import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { EmployeEditComponent } from './employe-edit/employe-edit.component';
import { EmployeDetailComponent } from './employe-detail/employe-detail.component';
import { ListDepartmentsComponent } from './list-departments/list-departments.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    EmployeEditComponent,
    EmployeDetailComponent,
    ListDepartmentsComponent,
    DepartmentEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
