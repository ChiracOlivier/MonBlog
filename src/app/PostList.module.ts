import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PostListComponent } from './PostList.component';
import { PostListItemComponent } from './PostListItem/PostListItem.component';

@NgModule({
  declarations: [
    PostListComponent,
    PostListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PostListComponent]
})
export class PostListModule { }
