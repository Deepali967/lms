import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularSearches;
  allBooks;
  constructor(private localstorageService: LocalstorageService) {}

  ngOnInit(): void {
    this.allBooks = this.localstorageService.getAllBooks();
    this.popularSearches = this.localstorageService.getPopulaSearches();
  }
}
