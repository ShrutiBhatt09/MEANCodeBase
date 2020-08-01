import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BlogComponent} from './blog.component';
import { CommonModule } from '@angular/common';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';


const ROUTES: Routes = [
    {path: '', component: BlogComponent},
    {path: 'blog-detail', component: BlogDetailComponent}
    
];

@NgModule({
    declarations: [BlogComponent,BlogDetailComponent],
    imports: [CommonModule,
        RouterModule.forChild(ROUTES)]
})

export class BlogModule {

}
