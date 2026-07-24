import { Component } from '@angular/core';
import { Icon } from '../../shared/components/icon/icon';
import { BOOKING } from './booking.data';

@Component({
  selector: 'app-booking',
  imports: [Icon],
  templateUrl: './booking.html',
  styleUrl: './booking.scss',
})
export class Booking {
  readonly booking = BOOKING;
}
