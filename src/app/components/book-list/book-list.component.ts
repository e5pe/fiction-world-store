import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../common/book';
import { BookService } from 'src/app/services/book.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-book-list',
  // templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  @Input() templateSelected = 'grid';
  constructor(private bookService: BookService) {}

  ngOnInit() {
    // this.selectView();
    this.listBooks();
  }

  listBooks() {
    this.bookService.getBooks().subscribe(data => {
      console.log(data);
      this.books = data;
    });
  }

  selectView() {
    let name = 'grid';
    switch (this.templateSelected) {
      case 'grid':
      case 'list':
        break; // It remains the same
      default:
        this.templateSelected = 'grid';
        break;
    }
    let nameUrl = `./book-${name}.component.html`;

  }
}
