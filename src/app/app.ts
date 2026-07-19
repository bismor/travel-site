import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { Destination } from './components/destination/destination';
import { Booking } from './components/booking/booking';
@Component({
  selector: 'app-root',
  imports: [Header, Hero, Services, Destination, Booking],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
