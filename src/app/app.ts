import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TrafficSignal } from './traffic-signal/traffic-signal';

@Component({
  imports: [RouterOutlet, TrafficSignal],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('traffic-signal');
}
