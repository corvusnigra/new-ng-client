import {Component, OnInit, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm} from "@angular/forms";
import {EmployeService} from "../shared/employe.service";
import {Employe} from "../shared/employe";
import {ActivatedRoute, Params, Router} from "@angular/router";

import {MaterializeAction} from 'angular2-materialize';

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
  btnValue: string;
  modalActions = new EventEmitter<string|MaterializeAction>();



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
      if (this.id) {
        this.btnValue = 'Изменить';
        this.service.getEmploye(this.id).subscribe(employe => {
          this.currentEmploye = employe;
          this.editForm.patchValue(employe);
          this.editForm.controls['active'].patchValue(employe.active ? [true] : [false]);
          console.log(employe);

        });

      } else  {
        this.btnValue = 'Сохранить';
        this.currentEmploye = new Employe(null, null, null, null, null, null);
        this.editForm.patchValue(this.currentEmploye);

      }
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


    if (this.currentEmploye.id) {

      this.service.updateEmploye(this.currentEmploye)
          .subscribe(() => {
                this.router.navigate(['employees']);
              },
              (err) => {
                this.errMessage = err;
              }
          );
    } else {

      this.service.addEmploye( this.currentEmploye )
          .subscribe(
              () => this.goBack(),
              error => this.errMessage = error
          );
    }


  }


  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }

  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  goBack() {
    this.router.navigate(['employees']);
  }


  removeEmploye() {

      this.service.deleteEmploye(this.currentEmploye).subscribe(
          () => this.goBack(),
          (error) => {
            this.errMessage = error
          }
      )
  }


  removeConfirmEmploye() {
    this.openModal();
  }

}
