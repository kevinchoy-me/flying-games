import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GAMES } from '../games.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, UpperCasePipe],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly games = GAMES;
}
