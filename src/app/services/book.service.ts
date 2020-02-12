import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../common/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:9000/api/v1/';
  private entity = 'books';
  constructor(private httpClient: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<ResponseBooks>(this.baseUrl + this.entity).pipe(
      map((response: any) => response._embedded.books)
    );
  }
}


interface ResponseBooks{
  _embedded: {
    books: Book[]
  }
}