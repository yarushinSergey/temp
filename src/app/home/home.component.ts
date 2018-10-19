import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { BookService } from '../shared/books/book.service';
import { Book } from '../shared/books/book';
import { mockColumns, mockDisplayedColumns } from './mock/mock-table-vars';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subjects: string[];
  filteredSubjects: string[];
  displayedColumns = mockDisplayedColumns;
  columns = mockColumns;
  private books: Book[];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applySearch(searchValue: string) {
    this.dataSource.filter = JSON.stringify(searchValue);
  }

  applyColumns(columnsValue: string[]) {
    this.displayedColumns = columnsValue;
  }

  constructor(
    private bs: BookService,
    private translate: TranslateService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.bs.getBooks().subscribe(books => {
      this.books = books;

      this.subjects = this.bs.getSubjects();
      this.filteredSubjects = this.subjects;
      this.dataSource = new MatTableDataSource(this.books);

      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = (data, filter) => {
        const value = JSON.parse(filter);
        if (value instanceof Array) {
          this.filteredSubjects = value;
          const subjects = data.subjects;
          return value.some(subject => subjects.includes(subject));
        } else {
          return Object.values(data).join('').trim().toLowerCase().indexOf(value.trim().toLowerCase()) >= 0;
        }
      };
    });
  }

  showDetails(row) {
    this.router.navigateByUrl(`home/details/${row.isbn}`);
  }

}
