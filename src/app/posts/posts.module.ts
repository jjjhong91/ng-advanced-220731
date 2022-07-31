import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { CreateComponent } from './create/create.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    PostsComponent,
    CreateComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
