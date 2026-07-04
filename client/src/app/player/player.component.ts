import { Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { GAMES } from '../games.data';

@Component({
  selector: 'app-player',
  standalone: true,
  templateUrl: './player.component.html',
})
export class PlayerComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly sanitizer = inject(DomSanitizer);

  readonly loading = signal(true);
  readonly notFound = signal(false);
  readonly title = signal('');
  readonly accent = signal('#FFB627');
  gameUrl: SafeResourceUrl | null = null;

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');
    const game = GAMES.find((g) => g.id === id);

    if (!game) {
      this.notFound.set(true);
      this.loading.set(false);
      return;
    }

    this.title.set(game.title);
    this.accent.set(game.accent);
    this.gameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`/games/${game.file}`);
  }

  onFrameLoaded(): void {
    this.loading.set(false);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
