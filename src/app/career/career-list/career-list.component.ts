import { Component, OnInit } from '@angular/core';
import { Career } from '../career.model';

@Component({
  selector: 'app-career-list',
  templateUrl: './career-list.component.html',
  styleUrls: ['./career-list.component.scss']
})
export class CareerListComponent implements OnInit {

  careers : Career[] = [
    new Career('1', 'Project Manager', 'Career Excerpt goes here', 'Your job is to plan budget oversee and document all aspects of the specific project you are working on', 'imagePath', 'Imagefeatured', 'July 8, 2017', 'August 12, 2017', 'Elwin Dela Cruz', 'Tech', '/asdasd-url-goes-here'),
    new Career('2', 'IT Manager', 'Career Excerpt goes here sdjf jsdf adhsjf hsa', 'Your job is to plan budget oversee and document all aspects of the specific project you are working on', 'imagePath', 'Imagefeatured', 'July 8, 2017', 'August 12, 2017', 'Elwin Dela Cruz', 'Tech', '/asdasd-url-goes-here'),
    new Career('3', 'Content Writer', 'Career Excerpt goes here sdjf jsdf adhsjf hsa', 'Your job is to plan budget oversee and document all aspects of the specific project you are working on', 'imagePath', 'Imagefeatured', 'July 8, 2017', 'August 12, 2017', 'Elwin Dela Cruz', 'Tech', '/asdasd-url-goes-here')

  ];

  constructor() { }

  ngOnInit() {
  }

}
