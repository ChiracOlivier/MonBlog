import { Component } from '@angular/core';
import {PostListItem} from './PostListItem';

@Component({
  selector: 'app-root',
  templateUrl: './PostList.component.html',
  styleUrls: ['./app.component.css']
})
export class PostListComponent {

  post1 = new PostListItem(1);
  post2 = new PostListItem(2);
  post3 = new PostListItem(3);
  posts: Array<PostListItem> = [this.post1, this.post2, this.post3];

}

