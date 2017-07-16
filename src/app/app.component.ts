import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  toggleHamburger() {
    $('.header-hamburger').toggleClass('active');
    $('#main-content, header').toggleClass('is-slide');
  }
}
