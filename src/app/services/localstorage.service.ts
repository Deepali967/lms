import { Injectable } from '@angular/core';
import { BOOKS } from 'src/assets/constants/books';
import { SEARCHES } from 'src/assets/constants/search';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  setUserSearches() {
    localStorage.setItem(
      'searches',
      JSON.stringify(SEARCHES.filter((s) => s.appearInSearch))
    );
  }

  getPopulaSearches() {
    return JSON.parse(localStorage.getItem('searches'));
  }

  setAllBooks() {
    localStorage.setItem('allbooks', JSON.stringify(BOOKS));
  }

  getAllBooks() {
    return JSON.parse(localStorage.getItem('allbooks'));
  }
}
