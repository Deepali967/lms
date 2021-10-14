import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  @Output() closePopup: EventEmitter<any> = new EventEmitter();
  credentials;
  error = '';
  constructor(
    private fb: FormBuilder,
    private localstorageService: LocalstorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.credentials = this.localstorageService.getUserCredentials();

    this.loginForm = this.fb.group({
      emailId: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }

  close() {
    this.closePopup.emit();
  }

  login() {
    if (!this.credentials) {
      this.error = 'User is not registered, Please Register Yourself';
      return;
    }

    if (
      this.credentials &&
      (this.credentials.email !== this.loginForm.controls.emailId.value ||
        this.credentials.password !== this.loginForm.controls.password.value)
    ) {
      this.error = 'Please enter correct Credentials';
      return;
    }

    if (
      this.credentials &&
      this.credentials.email === this.loginForm.controls.emailId.value &&
      this.credentials.password === this.loginForm.controls.password.value
    ) {
      this.localstorageService.setAuthenticationFlag(true);
      this.router.navigate(['/main/user-profile']);

      this.closePopup.emit();
    }
  }
}
