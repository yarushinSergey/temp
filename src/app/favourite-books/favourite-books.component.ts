import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/books/book.service';
import { FormControl } from '@angular/forms';
import { Book } from '../shared/books/book';

@Component({
  selector: 'app-favourite-books',
  templateUrl: './favourite-books.component.html',
  styleUrls: ['./favourite-books.component.css']
})
export class FavouriteBooksComponent implements OnInit {
  selectedTags: string[];
  tagList: string[];
  books: Book[];
  filteredBooks: Book[];

  constructor(private bs: BookService) { }

  ngOnInit() {
    this.bs.getBooks().subscribe(books => {
      this.books = books;
      this.tagList = this.bs.getTags();
    });
  }

  private filterByTags(tags: string[]) {
    this.selectedTags = tags;
    this.filteredBooks = this.books.filter(book => book.getTagList().some(tag => tags.includes(tag)));
  }

}
