import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  host : {'class' :'contact-us'},
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private router : Router
    //private route: ActivatedRoute
  ) { }

  toggleContactUs() {
    $('#main-content, .contact-us').toggleClass('is-slide');
  }

  ngOnInit() {
  }
}
