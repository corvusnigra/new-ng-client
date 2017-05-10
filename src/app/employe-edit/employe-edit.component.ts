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
  id: string;
  errMessage: any;
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
  }

  getEmployeFromRoute() {
    this.activatedRoute.params.forEach((params: Params) => {
      this.id = params['id'];
    });

    this.service.getEmploye(this.id).subscribe(employe => {
      this.currentEmploye = employe;
      this.editForm.patchValue(employe);

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
    this.currentEmploye.firstName = form.value.firstName;
    this.currentEmploye.lastName = form.value.lastName;
    this.currentEmploye.birthday = form.value.birthday;
    this.currentEmploye.salary = form.value.salary;
    this.currentEmploye.active = Array.isArray(form.value.active) ? form.value.active[0] : form.value.active;

    console.log(this.currentEmploye);

    this.service.updateEmploye(this.currentEmploye)
        .subscribe(() => {
          this.router.navigate(['employees']);
        },
            (err) => {
             this.errMessage = err;
            }
        );
  }

}
