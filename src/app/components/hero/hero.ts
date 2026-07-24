import { Component } from '@angular/core';
import { Icon } from '../../shared/components/icon/icon';
import { Button } from '../../shared/components/button/button';

@Component({
  selector: 'app-hero',
  imports: [Icon, Button],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
