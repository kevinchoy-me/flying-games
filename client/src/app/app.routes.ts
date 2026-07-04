import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'play/:id', component: PlayerComponent },
  { path: '**', redirectTo: '' },
];
