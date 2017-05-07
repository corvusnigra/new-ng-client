import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-employe-edit',
  templateUrl: './employe-edit.component.html',
  styleUrls: ['./employe-edit.component.scss']
})
export class EmployeEditComponent implements OnInit {

  editForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
