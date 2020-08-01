export interface Blog {
    id: string;
    category: string;
    postedDate: Date;
    postedBy: string;
    title: string;
    imagePathHref: string;
    shortDescription: string;
    description: string;
    comments: BlogComment[];
}

export interface BlogComment{
    id: string;
    commentBy: string;
    description: string;
    commentDate: Date;
}