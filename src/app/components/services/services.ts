import { Component } from '@angular/core';
import { SERVICES } from './services.data';
import { SectionHeader } from '../../shared/components/section-header/section-header';

@Component({
  selector: 'app-services',
  imports: [SectionHeader],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  readonly services = SERVICES;
}
