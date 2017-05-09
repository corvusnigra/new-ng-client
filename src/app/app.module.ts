import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { EmployeEditComponent } from './employe-edit/employe-edit.component';
import { EmployeDetailComponent } from './employe-detail/employe-detail.component';
import { ListDepartmentsComponent } from './list-departments/list-departments.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import {EmployeService} from "./shared/employe.service";
import {SearchPipe} from "./shared/search.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    EmployeEditComponent,
    EmployeDetailComponent,
    ListDepartmentsComponent,
    DepartmentEditComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    EmployeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
