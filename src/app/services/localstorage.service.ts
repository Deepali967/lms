import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BOOKS } from 'src/assets/constants/books';
import { SEARCHES } from 'src/assets/constants/search';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  isAuthenticated = false;
  selectedCategory: Subject<any> = new Subject();

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

  setUserCredentials(credentials) {
    localStorage.setItem('credentials', JSON.stringify(credentials));
  }

  getUserCredentials() {
    return JSON.parse(localStorage.getItem('credentials'));
  }

  setAuthenticationFlag(flag) {
    localStorage.setItem('isAuthenticated', JSON.stringify(flag));
  }

  getAuthenticationFlag() {
    return JSON.parse(localStorage.getItem('isAuthenticated'));
  }

  setSelectedCategory(category) {
    this.selectedCategory.next(category);
  }
}
