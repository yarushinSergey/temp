import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './book';
import { LibraryStorageService } from '../library-storage.service';

@Injectable()
export class BookService {
  private url = 'https://openlibrary.org/api/books?';
  private books: Book[];
  private subjects: string[];
  private tagList: string[];

  bookIsbn =
      ['9780679424741', '0385472579', '0143039563', '0439554934', '0307277674',
          '0061120081', '0452284244', '0156012197', '0451524934', '0618640150',
          '0684833395', '0393978893', '0061122416', '0140283331', '0140449264',
          '0141439602', '0770430074', '0679783261', '0142437204', '1400052920',
          '0316769177', '0451527747', '0446675539', '0064410935', '0517189607',
          '0141301155', '038572179X', '0060531045', '0066238501', '0739326228' ];

  constructor(private http: HttpClient,
              private ls: LibraryStorageService) {
      this.subjects = [];
      this.tagList = [];
      this.books = this.assignBooks(this.ls.getBooksFromStorage(), true);
  }

  getBooks(isbn?: string): Observable<Book[]> {
    const keys = isbn ? isbn : this.bookIsbn.join(',');
    if (this.books.length > 0) {
      this.books = this.assignBooks(this.ls.getBooksFromStorage(), true);
      if (isbn) {
          return of(this.books.filter(book => book.isbn === isbn));
      } else {
        return of(this.books);
      }
    } else {
        return this.http.get(`${this.url}bibkeys=${keys}&format=json&jscmd=data`).pipe(map(books => {
            return this.assignBooks(books);
        }));
    }
  }

  storeBooks() {
    this.ls.storeBooks(this.books);
  }

  getSubjects() {
      return this.subjects;
  }

  getTags() {
    return this.tagList;
  }

  private assignBooks(books: any, fromStorage?: boolean): Book[] {
    if (fromStorage) {
      this.books = books.map((b) => {
        const book = new Book(b['isbn'], b);
        this.subjects = [...this.subjects, ...book.subjects];
        this.tagList = [...this.tagList, ...book.tagList];
        return book;
      });
    } else {
      this.books = Object.keys(books).map(isbn => {
        const book = new Book(isbn, books[isbn]);
        this.subjects = [...this.subjects, ...book.subjects];
        return book;
      });
    }
    this.subjects = this.subjects.filter(this.getUnique);
    this.tagList = this.tagList.filter(this.getUnique);
    this.ls.storeBooks(this.books);
    return this.books;
  }

  private getUnique(value, index, arr) {
    return arr.indexOf(value) === index;
  }

}
