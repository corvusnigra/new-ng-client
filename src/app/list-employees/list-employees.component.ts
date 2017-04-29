import { Component, OnInit } from '@angular/core';
import {EmployeService} from "../shared/employe.service";
import {Employe} from "../shared/employe";
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employe[];

  constructor(private service: EmployeService, private router: Router) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(employees => {
      this.employees = employees;
    });
  }

  detailEmploye(employe: Employe) {
    this.router.navigate(['employees', 'detail', employe.id]);
  }

}
