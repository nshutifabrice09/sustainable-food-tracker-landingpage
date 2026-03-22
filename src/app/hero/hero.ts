import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  startTracking() {
    console.log('Start tracking clicked');
  }

  learnMore() {
    console.log('Learn more clicked');
  }
}