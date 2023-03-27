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
    }
    else{
      this.showPoster = false;
    }
  }

  toggleScreenshots(): void{
    if(this.showScreenshots === false){
      this.showScreenshots = true;
    }
    else{
      this.showScreenshots = false;
    }
  }

  toggleVideo(): void{
    if(this.showVideo === false){
      this.showVideo = true;
    }
    else{
      this.showVideo = false;
    }
  }


}
