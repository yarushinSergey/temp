import { Injectable } from '@angular/core';
import { Book } from './books/book';

const libStorage = 'lib';
const tagStorage = 'tag';
const langStorage = 'lang';

@Injectable()
export class LibraryStorageService {

  constructor() {
      if (!localStorage.getItem(libStorage)) {
          localStorage.setItem(libStorage, JSON.stringify([]));
      }
  }

  getBooksFromStorage(): Book[] {
    return JSON.parse(localStorage.getItem(libStorage));
  }

  storeBooks(books: Book[]) {
    localStorage.setItem(libStorage, JSON.stringify(books));
  }

  getLangFromStorage(): string {
    return localStorage.getItem(langStorage);
  }

  storageLang(lang: string) {
    localStorage.setItem(langStorage, lang);
  }

}
