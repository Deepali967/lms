import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CategoryComponent } from './category/category.component';

const components = [
  TitleBarComponent,
  NavigationBarComponent,
  ContactUsComponent,
  CategoryComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class SharedModule {}
