import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, useAnimation, animation, keyframes, AnimationEvent, group } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInAnimation', [

      // route 'enter' transition
      transition(':enter', [

        // css styles at start of transition
        style({ opacity: 0 }),

        // animation and styles at end of transition
        animate('.3s', style({ opacity: 1 }))
      ]),
    ]),
  ]
})
export class AppComponent {
  title = 'app';
}
