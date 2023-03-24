import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private service: DataService, private fb: FormBuilder) {}
  parerentData: [] = [];
  submitted = false;
  ngOnInit() {
    this.parerentData = this.service.getParentData();
    this.registerForm = new FormGroup({
      id: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', Validators.required),
    });
  }

  get id() {
    return this.registerForm.get('id');
  }
  get email() {
    return this.registerForm.get('email');
  }

  get username() {
    return this.registerForm.get('username');
  }

  onSubmit() {}
}
