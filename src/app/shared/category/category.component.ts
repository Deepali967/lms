import { Component, OnInit } from '@angular/core';
import { SEARCHES } from 'src/assets/constants/search';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories = SEARCHES;
  constructor() {}

  ngOnInit(): void {
    console.log(this.categories);
  }
}
