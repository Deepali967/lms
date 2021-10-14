import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, AfterViewInit {
  allBooks;
  category;
  filteredBooks;
  constructor(private localstorageService: LocalstorageService) {}

  ngOnInit(): void {
    this.allBooks = this.filteredBooks = this.localstorageService.getAllBooks();
  }

  ngAfterViewInit() {
    this.localstorageService.selectedCategory.subscribe((res) => {
      this.category = res;
      this.filterBooksByCategory();
    });
  }

  filterBooksByCategory() {
    this.filteredBooks = this.allBooks.filter(
      (b) => b.category === this.category.id
    );
  }
}
