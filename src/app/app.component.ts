import { Component, OnInit } from '@angular/core';
import { SEARCHES } from 'src/assets/constants/search';
import { LocalstorageService } from './services/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'library-management-system';

  constructor(private localstorageService: LocalstorageService) {}

  ngOnInit() {
    this.localstorageService.setAllBooks();
    this.localstorageService.setUserSearches();
  }
}
