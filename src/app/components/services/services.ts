import { Component } from '@angular/core';
import { SERVICES } from './services.data';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services = SERVICES;
}
