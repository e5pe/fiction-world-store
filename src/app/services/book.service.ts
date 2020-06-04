import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../common/book';
import { BookCategory } from '../common/book-category';
import { get } from 'http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = 'http://localhost:9000/api/v1';
  private entity = 'books';
  private booksUrl = `${this.baseUrl}/${this.entity}`;
  private categoryUrl = `${this.baseUrl}/bookCategory`;
  constructor(private httpClient: HttpClient) {}

  getBooks(categoryId: number): Observable<Book[]> {
    let url = this.booksUrl;
    if (categoryId) {
      url += `/search/categoryid?id=${categoryId}`;
    }

    return this.getBooksList(url);
  }

  getBook(bookId: number): Observable<Book> {
    const bookDetailsUrl = `${this.booksUrl}/${bookId}`;
    return this.httpClient.get<Book>(bookDetailsUrl);
  }

  /**
   * Make a call to the api and returns a list of books
   * @param url
   */
  private getBooksList(url: string): Observable<Book[]> {
    return this.httpClient.get<ResponseBooks>(url).pipe(map((response: any) => response._embedded.books));
  }

  getBookCategories(): Observable<BookCategory[]> {
    return this.httpClient
      .get<ResponseBookCategory>(this.categoryUrl)
      .pipe(map((response: any) => response._embedded.bookCategory));
  }

  searchBooks(keyword: string): Observable<Book[]> {
    const url = `${this.booksUrl}/search/searchbykeyword?title=${keyword}`;
    return this.getBooksList(url);
  }
}

interface ResponseBooks {
  _embedded: {
    books: Book[];
  };
}

interface ResponseBookCategory {
  _embedded: {
    bookCategory: BookCategory[];
  };
}
