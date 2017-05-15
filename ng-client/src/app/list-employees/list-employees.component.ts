import { Component, OnInit } from '@angular/core';
import {EmployeService} from "../shared/employe.service";
import {Employe} from "../shared/employe";
import { Router } from "@angular/router";
import {SearchPipe} from "../shared/search.pipe";

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  errorMassage: string;
  employees: Employe[];
  term: string;

  constructor(private service: EmployeService, private router: Router) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(employees => {
      this.employees = employees;
    },
    error => {
      this.errorMassage = error;
    });
  }


  detailEmploye(employe: Employe) {
    this.router.navigate(['employees', 'detail', employe.id]);
  }

}
