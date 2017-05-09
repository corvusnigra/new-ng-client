import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm} from "@angular/forms";
import {EmployeService} from "../shared/employe.service";
import {Employe} from "../shared/employe";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-employe-edit',
  templateUrl: './employe-edit.component.html',
  styleUrls: ['./employe-edit.component.scss']
})
export class EmployeEditComponent implements OnInit {
  model: any = {};
  editForm: FormGroup;
  currentEmploye: Employe;


  constructor(
      private fb: FormBuilder,
      private service: EmployeService,
      private activatedRoute: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {
     this.buildForm();
     this.getEmployeFromRoute();
     console.log(this.currentEmploye);
  }

  getEmployeFromRoute() {
    this.activatedRoute.params.forEach((params: Params) => {
      let id = params['id'];

      this.service.getEmploye(id).subscribe(employe => {
        this.editForm.patchValue(employe);
        this.currentEmploye = employe;
      });
    });


  }

  buildForm() {
    this.editForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      active: ['', [Validators.required]]
    });
  }

  onSubmit(form) {
     this.service.updateEmploye(this.currentEmploye ,form.value)
         .subscribe(() => {
           this.router.navigate(['employees']);
         });
     console.log(form);
  }

}
