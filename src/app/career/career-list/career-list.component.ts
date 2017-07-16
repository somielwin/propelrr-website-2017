import { Component, OnInit } from '@angular/core';
import { Career } from '../career.model';  

@Component({
  selector: 'app-career-list',
  templateUrl: './career-list.component.html',
  styleUrls: ['./career-list.component.css']
})
export class CareerListComponent implements OnInit {

  careers : Career[] = [
    new Career('1', 'Career 1', 'Career Excerpt goes here', 'Career long description', 'imagePath', 'Imagefeatured', 'July 8, 2017', 'August 12, 2017', 'Elwin Dela Cruz', 'Tech', '/asdasd-url-goes-here'),
    new Career('1', 'Career 2', 'Career Excerpt goes here sdjf jsdf adhsjf hsa', 'Description 2', 'imagePath', 'Imagefeatured', 'July 8, 2017', 'August 12, 2017', 'Elwin Dela Cruz', 'Tech', '/asdasd-url-goes-here')
  ];

  constructor() { }

  ngOnInit() {
  }

}
