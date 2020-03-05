import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../common/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  // templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  @Input() templateSelected = 'grid';
  currentCategoryId: number;
  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.selectView();
    this.activatedRoute.paramMap.subscribe(() => {
      this.listBooks();
    });
  }

  listBooks() {
    this.currentCategoryId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.bookService.getBooks(this.currentCategoryId).subscribe((data) => {
      this.books = data;
    });
  }

  selectView() {
    switch (this.templateSelected) {
      case 'grid':
      case 'list':
        break; // It remains the same
      default:
        this.templateSelected = 'grid';
        break;
    }
    let nameUrl = `./book-${this.templateSelected}.component.html`;
  }
}
