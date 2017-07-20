import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-product-service',
  templateUrl: './product-service.component.html',
  styleUrls: ['./product-service.component.scss']

})

export class ProductServiceComponent implements OnInit {
  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }
  ngOnInit() {

    $('.owl-carousel').owlCarousel({
      loop: false,
      margin: 20,
      nav: false,
      responsive: {
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:6
          }
      }
    })
  }
}
