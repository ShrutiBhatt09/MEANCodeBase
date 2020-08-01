import {Component, OnInit} from '@angular/core';
import {Blog} from './blog.model';
import {BlogsService} from './blog-json.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'lacc-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

    topBlogs : Blog[];
    foodBlogs : Blog[];
    restaurantBlogs : Blog[];

    constructor(private blogService: BlogsService,private route:ActivatedRoute,
        private router:Router) {
        
    }

    ngOnInit() {
        this.topBlogs = this.blogService.getTopBlogs();
        this.foodBlogs = this.blogService.getBlogsBasedOnCategory("food-drink");
        this.restaurantBlogs = this.blogService.getBlogsBasedOnCategory("restaurant");
    }

    navigateToBlogDetails(id:string){
        this.router.navigate(['blog/blog-detail'], { queryParams: { blogId: id } });
    }

}
