import { Component, OnInit } from '@angular/core';
import { Blog} from './blog.model';

import { blogService} from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [blogService]
})
export class BlogComponent implements OnInit {
  blogSelected: Blog;

  constructor( private blogItem : blogService) {

  }

  ngOnInit() {
    this.blogItem.blogSelected
      .subscribe(
        (blogs : Blog) => {
          this.blogSelected = blogs;
        }
      )
  }

}
