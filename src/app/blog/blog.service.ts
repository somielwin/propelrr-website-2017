import { EventEmitter } from '@angular/core';
import { Blog } from './blog.model';


export class blogService {

    blogSelected = new EventEmitter<Blog>();

    private blogs : Blog[] = [
        new Blog(1, 'A Night of Celebration for the Highest-Flying Aviators', 'As the sun set during the second day of our Subic trip, the team geared towards preparing for everyone’s much-anticipated event of the night: the first-ever Aviator Awards. Five of...', 'blog description goes here', 'imagePAth', 'imageFeatured', 'July 8, 2017', 'Elwin Dela Cruz', 'Press Release', 'tags 1', 'url-asdsadasd'),
        new Blog(2, 'Propelrr Aviators Fly Higher through Interdependence and Teamwork', 'The downfall of many HR practitioners is thinking that people’s attitude and behavior can be altered by overnight seminar or workshop.   In the global world where change is the...', 'blog description goes here', 'imagePAth', 'imageFeatured', 'July 8, 2017', 'Elwin Dela Cruz', 'Press Release', 'tags 1', ' url-asdsadas')
    ];

    getBlogs() {
        return this.blogs.slice();
    }

    getblog(id : number) {
        return this.blogs[id];
    }
}
