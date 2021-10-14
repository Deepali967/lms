import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
})
export class TitleBarComponent implements OnInit {
  showCategoriesPopup = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleCategoriesPopup() {
    this.showCategoriesPopup = !this.showCategoriesPopup;
  }

  register() {
    this.router.navigate(['/authentication/register']);
  }

  login() {
    this.router.navigate(['/authentication/login']);
  }
}
