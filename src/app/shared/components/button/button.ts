import { Component, Input } from '@angular/core';
import { Icon } from '../icon/icon';

export type ButtonVariant = 'primary' | 'play';

@Component({
  selector: 'app-button',
  imports: [Icon],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() variant: ButtonVariant = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
}
