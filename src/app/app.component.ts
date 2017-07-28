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

  toggleContactUs() {
    $('#main-content, .contact-us').toggleClass('is-slide');
  }

  toggleSearchMe() {
    $('.search-form').toggleClass('show');
  }
  
  ngOnInit() {
    // $(window).load(function(){
    //   window.scrollTo(0,1);
    //   console.log('remove address bar');
    // });
  }
}
