import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  toggleHamburger() {
    $('.header-hamburger').toggleClass('active');
    $('#main-content, header').toggleClass('is-slide');
  }

  ngOnInit() {
    $(window).load(function(){
      $('html, body').scrollTo(0,1);
    });
  }
}