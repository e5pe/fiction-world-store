import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../common/book';
import { BookCategory } from '../common/book-category';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:9000/api/v1';
  private entity = 'books';
  private categoryUrl = `${this.baseUrl}/bookCategory`;
  constructor(private httpClient: HttpClient) {}

  getBooks(categoryId: number): Observable<Book[]> {
    let url = `${this.baseUrl}/${this.entity}`
    if (categoryId) {
      url += `/search/categoryid?id=${categoryId}`;
    }

    return this.httpClient.get<ResponseBooks>(url).pipe(
      map((response: any) => response._embedded.books)
    );
  }

  getBookCategories(): Observable<BookCategory[]> {
    return this.httpClient.get<ResponseBookCategory>(this.categoryUrl).pipe(
      map((response: any) => response._embedded.bookCategory)
    );
  }
}


interface ResponseBooks{
  _embedded: {
    books: Book[]
  }
}

interface ResponseBookCategory {
  _embedded: {
    bookCategory: BookCategory[]
  }
}