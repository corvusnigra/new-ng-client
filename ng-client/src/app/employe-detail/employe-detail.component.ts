import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmployeService, Employe } from '../shared/index';

@Component({
  selector: 'app-employe-detail',
  templateUrl: './employe-detail.component.html',
  styleUrls: ['./employe-detail.component.scss']
})
export class EmployeDetailComponent implements OnInit {
  employe = {};
  id: string;

  constructor(
      private service: EmployeService,
      private activatedRoute: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.activatedRoute.params.forEach((params: Params) => {
      let id = params['id'];
      this.id =id;

      this.service.getEmploye(id)
          .subscribe(employe => {
            this.employe = employe;
            console.log(employe);
          });

    });
  }

  goBack() {
    this.router.navigate(['employees']);
  }

  goEdit(employe: Employe) {
    let id = employe.id
    this.router.navigate(['employees', 'edit', id]);
  }


}
