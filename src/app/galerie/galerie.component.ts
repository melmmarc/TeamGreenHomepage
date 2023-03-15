import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss']
})
export class GalerieComponent {

  constructor(private router: Router) {}

}
