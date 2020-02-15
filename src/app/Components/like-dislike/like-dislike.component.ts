import { Component } from '@angular/core';


@Component({
  selector: 'app-like-dislike', // !!!!!!!
  template: `
    <div>
      <button class="like-button" [ngClass]="{'liked':liked}" (click)="likeHandler()">
        Like | <span class="likes-counter">{{likeCounter}}</span>
      </button>

      <button class="dislike-button" [ngClass]="{'disliked':disliked}" (click)="dislikeHandler()">
        Dislike | <span class="likes-counter">{{dislikeCounter}}</span>
      </button>
    </div>
  `,
  styles: [`
    .like-button, .dislike-button {
        font-size: 1rem;
        padding: 5px 10px;
        color:   #585858;
    }

    .liked, .disliked {
        font-weight: bold;
        color: #1565c0;
    }
  `]
})

export class LikeDislikeComponent {
  likeCounter = 100;
  dislikeCounter = 25;
  liked = false;
  disliked = false;

  likeHandler() {
    if (!this.liked){
      this.likeCounter++;
      this.liked = true;
    }
    else{
      this.likeCounter--;
      this.liked = false;
    }

    if (this.disliked){
      this.dislikeHandler();
    }
  }

  dislikeHandler() {
    if (!this.disliked) {
      this.dislikeCounter++;
      this.disliked = true;
    }
    else{
      this.dislikeCounter--;
      this.disliked = false;
    }

    if (this.liked){
      this.likeHandler();
    }
  }
}
