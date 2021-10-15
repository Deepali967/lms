import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  nameError = '';
  emailError = '';
  @Output() closePopup: EventEmitter<any> = new EventEmitter();

  @Output() loginForm: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private localstorageService: LocalstorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      emailId: ['', Validators.email],
      password: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  register() {
    const payload = {
      email: this.registerForm.controls.emailId.value,
      password: this.registerForm.controls.password.value,
      name: this.registerForm.controls.name.value,
    };

    this.localstorageService.setUserCredentials(payload);

    this.localstorageService.setAuthenticationFlag(true);

    this.router.navigate(['/main/user-profile']);

    this.closePopup.emit();
  }

  handleKeyUp(field) {
    switch (field) {
      case 'name':
        this.handlenameValidations();
        break;

      case 'email':
        this.handleEmailValidations();
        break;
    }
  }

  handlenameValidations() {
    if (this.registerForm.controls.name.value.trim().length === 0) {
      this.nameError = 'Please Enter Alphabets';
      return;
    }

    if (this.registerForm.controls.name.value.length < 2) {
      this.nameError = 'Please Enter Minimum 2 Characters';
      return;
    }

    if (this.registerForm.controls.name.value.length > 16) {
      this.nameError = 'Maximum 16 Characters allowed';
      return;
    }

    if (this.registerForm.controls.name.value.split(' ').length > 3) {
      this.nameError = 'Maximum 2 Spaces are allowed';
      return;
    }

    this.nameError = '';
  }

  handleEmailValidations() {
    if (!this.registerForm.controls.emailId.valid) {
      this.emailError = 'Please enter valid Email Id';
      return;
    }

    this.emailError = '';
  }

  close() {
    this.closePopup.emit();
  }

  login() {
    this.closePopup.emit();
    this.loginForm.emit();
  }
}
