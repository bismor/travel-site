import { Component } from '@angular/core';
import { Icon } from '../../shared/components/icon/icon';
import { DESTINATIONS } from './destinations.data';

@Component({
  selector: 'app-destination',
  imports: [Icon],
  templateUrl: './destination.html',
  styleUrl: './destination.scss',
})
export class Destination {
  destination = DESTINATIONS;
}
