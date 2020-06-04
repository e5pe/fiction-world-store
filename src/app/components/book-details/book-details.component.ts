import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Book } from 'src/app/common/book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  private book: Book = new Book();

  constructor(
    private _location: Location,
    private _activatedRoute: ActivatedRoute,
    private _bookService: BookService
  ) {}

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(() => {
      this.getBookInfo();
    });
  }
  getBookInfo() {
    const id: number = +this._activatedRoute.snapshot.paramMap.get('id');
    this._bookService.getBook(id).subscribe((data) => {
      this.book = data;
    });
  }
  goBack() {
    this._location.back();
  }

  getBooks;
}
