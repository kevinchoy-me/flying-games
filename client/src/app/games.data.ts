export interface Game {
  id: string;
  title: string;
  file: string;
  eyebrow: string;
  tagline: string;
  accent: string;
}

export const GAMES: Game[] = [
  {
    id: 'atc-tap',
    title: 'ATC Tap',
    file: 'atc-tap_2.html',
    eyebrow: 'Approach Control',
    tagline: 'Guide inbound traffic through your airspace before it stacks up.',
    accent: '#4E8FD9',
  },
  {
    id: 'runway-rush',
    title: 'Runway Rush',
    file: 'runway-rush.html',
    eyebrow: 'Departure Ops',
    tagline: 'Time takeoffs and landings on a runway that never stays clear.',
    accent: '#3FB68B',
  },
  {
    id: 'fuel-gauge',
    title: 'Fuel Gauge',
    file: 'fuel-gauge.html',
    eyebrow: 'Ramp Ops',
    tagline: 'Balance the tanks on turnaround — don’t run dry, don’t overfill.',
    accent: '#FFB627',
  },
  {
    id: 'baggage-sort',
    title: 'Baggage Sort',
    file: 'baggage-sort.html',
    eyebrow: 'Terminal 1 · Arrivals',
    tagline: 'Route bags to the right carousel before the belt jams up.',
    accent: '#E4572E',
  },
];
