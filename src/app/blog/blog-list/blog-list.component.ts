import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { Blog } from '../blog.model';
import { blogService} from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs : Blog[];

  constructor(
    private blogservice: blogService,
    private router: Router,
    private route: ActivatedRoute
  ) {
   }

  ngOnInit() {
    this.blogs = this.blogservice.getBlogs();
  }

}
