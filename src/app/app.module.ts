import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookService } from './services/book.service';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { BookCategoryComponent } from './components/book-category/book-category.component';



// import locals
import localeES from '@angular/common/locales/es';
import localeEn from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';

// registrar los locales con el nombre que quieras utilizar a la hora de proveer registerLocaleData(localePy, 'es'); registerLocaleData(localePt, 'pt'); registerLocaleData(localeEn, 'en') registerLocaleData(localeEsAR, 'es-Ar');
registerLocaleData(localeEn, 'en');
registerLocaleData(localeES, 'es');

const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'search/:keyword', component: BookListComponent },
  { path: 'category/:id', component: BookListComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [AppComponent, BookListComponent, SearchBoxComponent, PageNotFoundComponent, BookCategoryComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
