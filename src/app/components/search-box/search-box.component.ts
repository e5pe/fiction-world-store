import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  searchBooks(keyword: string) {
    this._router.navigateByUrl(`/search/${keyword}`);
  }
}
