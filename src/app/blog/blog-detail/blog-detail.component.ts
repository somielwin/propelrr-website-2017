import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Blog } from '../blog.model';
import { blogService } from '../blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blog : Blog;
  id : number;

  constructor(
    private blogItem : blogService,
    private route : ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params : Params) => {
          this.id = +params['id'];
          this.blog = this.blogItem.getblog(this.id);
        }
      )
  }

}
