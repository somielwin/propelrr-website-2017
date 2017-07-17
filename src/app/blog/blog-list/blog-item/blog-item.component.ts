import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../../blog.model';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  @Input() blog : Blog;
  @Input() id : number;

  constructor() { }

  ngOnInit() {
  }

  // onSelected() {
  //   this.blogItem.blogSelected.emit(this.blog);
  // }
}
