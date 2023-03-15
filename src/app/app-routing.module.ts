import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { GalerieComponent } from './galerie/galerie.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'impressum', 
    component: ImpressumComponent
  },
  {
    path: 'galerie', 
    component: GalerieComponent
  },
  {
    path: 'team', 
    component: TeamComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
