import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {forbiddenNameValidation} from '../shared/user-name.validator';
import {PasswordValidator} from '../shared/password.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  // registrationForm = new FormGroup({
  //   userName: new FormControl('vit'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  registrationForm: FormGroup;

  get userName() {
    return this.registrationForm.get('userName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get alternativeEmail() {
    return this.registrationForm.get('alternativeEmail') as FormArray;
  }

  addAlternativeEmail() {
    this.alternativeEmail.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['Bruce', [Validators.required, Validators.minLength(3), forbiddenNameValidation(/password/)]],
      password: [''],
      confirmPassword: [''],
      email: [''],
      subscribe: [false],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      alternativeEmail: this.fb.array([])
    }, {validator: PasswordValidator});

    this.registrationForm.get('subscribe').valueChanges
      .subscribe(checkedValue => {
        const email = this.registrationForm.get('email');
        if (checkedValue) {
          email.setValidators(Validators.required);
        } else {
          email.clearValidators();
        }
        email.updateValueAndValidity();
    });
  }

  load() {
    // this.registrationForm.setValue({
    //   userName: 'Bruce',
    //   password: '123',
    //   confirmPassword: '123',
    //   address: {
    //     city: 'Kiev',
    //     state: 'State',
    //     postalCode: '04119'
    //   }
    // });
    this.registrationForm.patchValue({
      userName: 'Bruce',
      password: '123'
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    console.log(this.registrationForm.valid);
  }
}


