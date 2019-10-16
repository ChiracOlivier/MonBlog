import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './PostListItem.component.html',
  styleUrls: ['./post.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() potTitle: string;
  @Input() potCreateAt: Date;
  @Input() potContent: string;
  @Input() potLoveIts: number;

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    this.potLoveIts++;
  }

  onRemove() {
    this.potLoveIts--;
  }
}
