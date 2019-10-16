import { Component } from '@angular/core';
import {Post} from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './PostList.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  post1 = new Post(1);
  post2 = new Post(2);
  post3 = new Post(3);
  posts: Array<Post> = [this.post1, this.post2, this.post3];

}

