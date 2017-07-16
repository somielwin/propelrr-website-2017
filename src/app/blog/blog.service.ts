import { EventEmitter } from '@angular/core';
import { Blog } from './blog.model';


export class blogService {

    blogSelected = new EventEmitter<Blog>();

    private blogs : Blog[] = [
        new Blog(1, 'blog 1', 'blog excerpt', 'blog description goes here', 'imagePAth', 'imageFeatured', 'July 8, 2017', 'Elwin Dela Cruz', 'Press Release', 'tags 1', 'url-asdsadasd'),
        new Blog(2, 'blog 2', 'blog aasdsad', 'blog description goes here', 'imagePAth', 'imageFeatured', 'July 8, 2017', 'Elwin Dela Cruz', 'Press Release', 'tags 1', ' url-asdsadas')
    ]; 

    getBlogs() {
        return this.blogs.slice();
    }  

    getblog(id : number) {
        return this.blogs[id];
    }
}