import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  @Input({ required: true }) name!: 'leaf' | 'map' | 'cursor' | 'like' | 'play' | 'navigation';

  // | 'plane'  | 'cube' | 'swim' | 'car'
}
