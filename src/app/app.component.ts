import { Component } from '@angular/core';
import {Book} from './common/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fiction-world-store';

  books: Book[] = [
    {
      title: "C Programming Language",
      author: "",
      isbn: "",
      description: "Learn C Programming Language",
      unitPrice: 60,
      imageUrl: "assets/images/books/text-100.png",
      active: true,
      unitsStock: 100,
      dateCreated: new Date(),
      dateUpdated: null,
    },
    {
      title: "C# Crash Course",
      author: "",
      isbn: "",
      description: "Learn C# Programming Language",
      unitPrice: 90,
      imageUrl: "assets/images/books/text-101.png",
      active: true,
      unitsStock: 100,
      dateCreated: new Date(),
      dateUpdated: null,
    },
    {
      title: "C++ Crash Course",
      author: "",
      isbn: "",
      description: "Learn C++ Programming Language",
      unitPrice: 70,
      imageUrl: "assets/images/books/text-102.png",
      active: true,
      unitsStock: 100,
      dateCreated: new Date(),
      dateUpdated: null,
    }
  ]
}
