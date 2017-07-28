import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchMeComponent implements OnInit {

  constructor(
    private router : Router
    //private route: ActivatedRoute
  ) { }

  toggleSearchMe() {
    $('.search-form').toggleClass('show');
  }

  ngOnInit() {
  }
}
