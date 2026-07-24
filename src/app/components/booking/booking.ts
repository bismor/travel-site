import { Component } from '@angular/core';
import { Icon } from '../../shared/components/icon/icon';
import { BOOKING } from './booking.data';
import { SectionHeader } from '../../shared/components/section-header/section-header';

@Component({
  selector: 'app-booking',
  imports: [Icon, SectionHeader],
  templateUrl: './booking.html',
  styleUrl: './booking.scss',
})
export class Booking {
  readonly booking = BOOKING;
}
