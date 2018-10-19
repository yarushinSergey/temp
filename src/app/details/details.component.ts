import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/books/book.service';
import { ActivatedRoute } from '@angular/router';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import {Book} from '../shared/books/book';
import { LibraryStorageService } from '../shared/library-storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  book: Book;
  private tags: string[];

  constructor(private bs: BookService,
              private ar: ActivatedRoute) {
  }

  ngOnInit() {
    this.ar.params.subscribe(params => {
      this.bs.getBooks(params['id']).subscribe(book => {
        this.book = book[0];
        this.tags = this.book.getTagList();
      });
    });
  }

  addTag(event: MatChipInputEvent): void {

    const input = event.input;
    const tag = event.value;

    if (tag.search('^[a-zA-Z0-9_]*$') === 0 && tag.length > 0) {
      if (!this.tags.includes(tag)) {
        this.tags.push(tag);
        this.bs.storeBooks();
      }
    }

    if (input) {
      input.value = '';
    }
  }

  remove(tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
      this.bs.storeBooks();
    }
  }
}
