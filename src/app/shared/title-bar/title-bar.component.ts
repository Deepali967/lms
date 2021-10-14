import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
})
export class TitleBarComponent implements OnInit {
  showCategoriesPopup = false;
  showLoginForm = false;
  showRegisterForm = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleCategoriesPopup() {
    this.showCategoriesPopup = !this.showCategoriesPopup;
  }

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
  }

  toggleRegisterForm() {
    this.showRegisterForm = !this.showRegisterForm;
  }

  register() {
    this.router.navigate(['/authentication/register']);
  }

  login() {
    this.router.navigate(['/authentication/login']);
  }
}
