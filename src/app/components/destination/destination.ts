import { Component } from '@angular/core';
import { Icon } from '../../shared/components/icon/icon';
import { DESTINATIONS } from './destinations.data';
import { SectionHeader } from '../../shared/components/section-header/section-header';

@Component({
  selector: 'app-destination',
  imports: [Icon, SectionHeader],
  templateUrl: './destination.html',
  styleUrl: './destination.scss',
})
export class Destination {
  readonly destinations = DESTINATIONS;
}
