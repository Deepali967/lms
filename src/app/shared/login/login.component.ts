import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  @Output() closePopup: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      emailId: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }

  close() {
    this.closePopup.emit();
  }
}
