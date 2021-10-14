import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  TitleBarComponent,
  NavigationBarComponent,
  ContactUsComponent,
  CategoryComponent,
  LoginComponent,
  RegisterComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [...components],
})
export class SharedModule {}
