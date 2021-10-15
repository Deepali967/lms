import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
})
export class TitleBarComponent implements OnInit {
  showCategoriesPopup = false;
  showLoginForm = false;
  showRegisterForm = false;
  @Input() headerConfig;

  constructor(
    private router: Router,
    private localstorageService: LocalstorageService
  ) {}

  ngOnInit(): void {}

  toggleCategoriesPopup() {
    if (!this.localstorageService.getAuthenticationFlag()) {
      this.toggleLoginForm();
      return;
    }

    this.showCategoriesPopup = !this.showCategoriesPopup;
  }

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
  }

  toggleRegisterForm() {
    this.showRegisterForm = !this.showRegisterForm;
  }

  checkMyHistory() {
    this.router.navigate(['/main/history']);
  }

  logout() {
    this.localstorageService.setAuthenticationFlag(false);
    this.router.navigate(['/main']);
  }
}
