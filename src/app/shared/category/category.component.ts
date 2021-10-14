import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { SEARCHES } from 'src/assets/constants/search';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories = SEARCHES;
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor(private localstorageService: LocalstorageService) {}

  ngOnInit(): void {
    console.log(this.categories);
  }

  select(category) {
    this.localstorageService.setSelectedCategory(category);
    this.close.emit();
  }
}
