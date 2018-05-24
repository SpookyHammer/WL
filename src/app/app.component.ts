import { Component } from '@angular/core';
import { httpInjectionService } from './services/httpInjection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WishLisht';

  constructor() { }
}
