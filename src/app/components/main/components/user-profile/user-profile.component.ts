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
  bookName;
  showIssueBookPopup = false;
  error = '';
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

  issueBook(book) {
    if (this.localstorageService.checkIfBookAlreadyExists(book)) {
      this.error = 'Book Already Issued. Please check History';

      setTimeout(() => {
        this.error = '';
      }, 2000);

      return;
    }

    this.bookName = book;
    this.showIssueBookPopup = true;
  }

  toggleIssueBookPopup() {
    this.showIssueBookPopup = !this.showIssueBookPopup;
  }
}
