import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  issuedBooks = [];
  @ViewChild('iframeElement', { static: false }) iframeElement: ElementRef;
  showIframeElement = false;
  selectedBook;
  constructor(private localstorageService: LocalstorageService) {}

  ngOnInit(): void {
    this.issuedBooks = this.localstorageService.getIssuedBooks();

    this.issuedBooks.map((book) => {
      if (book.end) {
        book.expired = new Date(book.end) < new Date();
      }
    });

    console.log(this.issuedBooks);
  }

  openBook(book) {
    this.selectedBook = book;
    this.iframeElement.nativeElement.src = `assets/pdf/${book.pdfUrl}#toolbar=0`;
    this.toggleIframe();
  }

  toggleIframe() {
    this.showIframeElement = !this.showIframeElement;
  }
}
