import { Component, OnInit } from '@angular/core';
import { Blog, BlogComment } from './../blog.model';
import { BlogsService } from './../blog-json.service';
import { ActivatedRoute, Router } from '@angular/router';
import {LoginService} from '../../security/login/login.service';

@Component({
    selector: 'lacc-blog-detail',
    templateUrl: './blog-detail.component.html',
    styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

    blog: Blog;
    id: string;
    private sub: any;

    constructor(private blogService: BlogsService, private route: ActivatedRoute,
        private router: Router,private loginService: LoginService) {
    }

    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
                this.id = params.blogId;
            });
        this.blog = this.blogService.getAllBlogs().find(x => x.id === this.id);
    }
    
    isLoggedIn(): boolean {
        return this.loginService.isLoggedIn();
    }

    checkForInput($event){
        let currentElement:any = $event.target || $event.srcElement;
        if(currentElement.value !== undefined && currentElement.value !== ''){
            document.getElementsByClassName('submit-comment')[0].removeAttribute('disabled');
        }
        else{
            document.getElementsByClassName('submit-comment')[0].setAttribute('disabled','disabled');
        }
    }

    submitComment(){
        let blogObj: BlogComment = {
            commentBy: this.loginService.user.userName,
            commentDate: new Date(),
            description: document.getElementById('commentInput').innerText.trim(),
            id: 'c2'
        }
        this.blogService.addCommentToBlog(blogObj,this.blog.id);
    }
}
