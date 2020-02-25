import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookService } from './services/book.service';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
