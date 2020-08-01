import { Injectable } from '@angular/core';

import { Blog, BlogComment } from './blog.model';

@Injectable({
    providedIn: 'root'
})

export class BlogsService {

    topBlogList:Blog[];
    
    constructor() {
        this.topBlogList = [];
    }

    getAllBlogs(): Blog[] {
        return this.blogs;
    }

    getTopBlogs() : Blog[]{
        this.topBlogList.push(this.blogs.find(x=>x.category == "food-drink"));
        this.topBlogList.push(this.blogs.find(x=>x.category == "restaurant"));
        return this.topBlogList;
    }

    getBlogsBasedOnCategory(category) : Blog[]{
        return this.getAllBlogs().filter(x=>x.category === category);
    }

    addCommentToBlog(comment:BlogComment,blogId:string){
        this.blogs.find(x=>x.id===blogId).comments.push(comment);
    }

    blogs: Blog[] = [
        {
            id: "FR1",
            category: "food-drink",
            postedDate: new Date(),
            postedBy: "admin",
            title: "Fusce adipiscing quam id risusyn",
            imagePathHref: "assets/images/page4_img1.jpg",
            shortDescription: "Etiam dui eros, laoreet sit amet est vel,odo venenatis eros. Fusce adipiscing quam id risus sagittis, non consequaty lacus terdm.",
            description: "Etiam dui eros, laoreet sit amet est vel,odo venenatis eros. Fusce adipiscing quam id risus sagittis, non consequaty lacus terdm.",
            comments: [
                {
                    id: "c1",
                    commentBy: "Girish",
                    description: "Its a sample comment.",
                    commentDate: new Date()
                },
                {
                    id: "c1",
                    commentBy: "Girish",
                    description: "Its a sample comment.",
                    commentDate: new Date()
                },
                {
                    id: "c1",
                    commentBy: "Girish",
                    description: "Its a sample comment.",
                    commentDate: new Date()
                }
            ]
        },
        {
            id: "FR2",
            category: "food-drink",
            postedDate: new Date(),
            postedBy: "admin",
            title: "Fusce adipiscing quam id risusyn",
            imagePathHref: "assets/images/page4_img1.jpg",
            shortDescription: "Etiam dui eros, laoreet sit amet est vel,odo venenatis eros. Fusce adipiscing quam id risus sagittis, non consequaty lacus terdm.",
            description: "Etiam dui eros, laoreet sit amet est vel,odo venenatis eros. Fusce adipiscing quam id risus sagittis, non consequaty lacus terdm.",
            comments: [
                {
                    id: "c1",
                    commentBy: "Girish",
                    description: "Its a sample comment.",
                    commentDate: new Date()
                },
                {
                    id: "c1",
                    commentBy: "Girish",
                    description: "Its a sample comment.",
                    commentDate: new Date()
                },
                {
                    id: "c1",
                    commentBy: "Girish",
                    description: "Its a sample comment.",
                    commentDate: new Date()
                }
            ]
        },
        {
            id: "FR3",
            category: "restaurant",
            postedDate: new Date(),
            postedBy: "admin",
            title: "Fusce adipiscing quam id risusyn",
            imagePathHref: "assets/images/page4_img1.jpg",
            shortDescription: "Etiam dui eros, laoreet sit amet est vel,odo venenatis eros. Fusce adipiscing quam id risus sagittis, non consequaty lacus terdm.",
            description: "Etiam dui eros, laoreet sit amet est vel,odo venenatis eros. Fusce adipiscing quam id risus sagittis, non consequaty lacus terdm.",
            comments: [
                {
                    id: "c1",
                    commentBy: "Girish",
                    description: "Its a sample comment.",
                    commentDate: new Date()
                },
                {
                    id: "c1",
                    commentBy: "Girish",
                    description: "Its a sample comment.",
                    commentDate: new Date()
                },
                {
                    id: "c1",
                    commentBy: "Girish",
                    description: "Its a sample comment.",
                    commentDate: new Date()
                }
            ]
        },
        {
            id: "FR4",
            category: "restaurant",
            postedDate: new Date(),
            postedBy: "admin",
            title: "Fusce adipiscing quam id risusyn",
            imagePathHref: "assets/images/page4_img1.jpg",
            shortDescription: "Etiam dui eros, laoreet sit amet est vel,odo venenatis eros. Fusce adipiscing quam id risus sagittis, non consequaty lacus terdm.",
            description: "Etiam dui eros, laoreet sit amet est vel,odo venenatis eros. Fusce adipiscing quam id risus sagittis, non consequaty lacus terdm.",
            comments: [
                {
                    id: "c1",
                    commentBy: "Girish",
                    description: "Its a sample comment.",
                    commentDate: new Date()
                },
                {
                    id: "c1",
                    commentBy: "Girish",
                    description: "Its a sample comment.",
                    commentDate: new Date()
                },
                {
                    id: "c1",
                    commentBy: "Girish",
                    description: "Its a sample comment.",
                    commentDate: new Date()
                }
            ]
        },
        {
            id: "FR5",
            category: "restaurant",
            postedDate: new Date(),
            postedBy: "admin",
            title: "Fusce adipiscing quam id risusyn",
            imagePathHref: "assets/images/page4_img1.jpg",
            shortDescription: "Etiam dui eros, laoreet sit amet est vel,odo venenatis eros. Fusce adipiscing quam id risus sagittis, non consequaty lacus terdm.",
            description: "Etiam dui eros, laoreet sit amet est vel,odo venenatis eros. Fusce adipiscing quam id risus sagittis, non consequaty lacus terdm.",
            comments: [
                {
                    id: "c1",
                    commentBy: "Girish",
                    description: "Its a sample comment.",
                    commentDate: new Date()
                },
                {
                    id: "c1",
                    commentBy: "Girish",
                    description: "Its a sample comment.",
                    commentDate: new Date()
                },
                {
                    id: "c1",
                    commentBy: "Girish",
                    description: "Its a sample comment.",
                    commentDate: new Date()
                },
                {
                    id: "c1",
                    commentBy: "Girish",
                    description: "Its a sample comment.",
                    commentDate: new Date()
                },
                {
                    id: "c1",
                    commentBy: "Girish",
                    description: "Its a sample comment.",
                    commentDate: new Date()
                }
            ]
        }
    ];
}
