import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  imports: [],
  standalone: true,
  templateUrl: './section-header.html',
  styleUrl: './section-header.scss',
})
export class SectionHeader {
  @Input({ required: true }) subtitle!: string;
  @Input({ required: true }) title!: string;
  @Input() align: 'center' | 'left' = 'center';
}
