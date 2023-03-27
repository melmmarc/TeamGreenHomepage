import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  showPoster: boolean = false;
  showScreenshots: boolean = false;
  showVideo: boolean = false;

  constructor(private router: Router) {}

  togglePoster(): void{
    if(this.showPoster === false){
      this.showPoster = true;
      this.showScreenshots = false;
      this.showVideo = false;
    }
    else{
      this.showPoster = false;
    }
  }

  toggleScreenshots(): void{
    if(this.showScreenshots === false){
      this.showScreenshots = true;
      this.showPoster = false;
      this.showVideo = false;
    }
    else{
      this.showScreenshots = false;
    }
  }

  toggleVideo(): void{
    if(this.showVideo === false){
      this.showVideo = true;
      this.showPoster = false;
      this.showScreenshots = false;
    }
    else{
      this.showVideo = false;
    }
  }


}
