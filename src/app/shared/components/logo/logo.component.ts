import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate, useAnimation, animation, keyframes, AnimationEvent, group } from '@angular/animations';
@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
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
    trigger('dashIt', [
      state('true', style({
        strokeDasharray: '{{length}}px',
        strokeDashoffset: '{{length}}px',
      }), { params: { length: 0 } }),
      state('false', style({
        strokeDasharray: '{{length}}px',
        strokeDashoffset: '0px',
      }), { params: { length: 0 } }),
      transition('false => true', animate('3s ease-in-out')),
      transition('true => false', animate('3s ease-out', style({
        strokeDasharray: '{{length}}px',
        strokeDashoffset: '0px',
      })))
    ], ), trigger('dashItReverse', [
      state('true', style({
        strokeDasharray: '{{length}}px',
        strokeDashoffset: '{{length}}px',
      }), { params: { length: 0, reverse: 0 } }),
      state('false', style({
        strokeDasharray: '{{length}}px',
        strokeDashoffset: '{{reverse}}px',
      }), { params: { length: 0, reverse: 0 } }),
      transition('false => true', animate('3s ease-in-out')),
      transition('true => false', animate('3s ease-out'))
    ], )
  ]
}
)
export class LogoComponent implements OnInit {
  // @ViewChild('rPath') rPath: ElementRef;
  renderTextAnimation = true;
  public showCenter = true;
  navs = ['Home', 'About', 'Projects'];
  constructor() { }

  ngOnInit() {
    // console.log(this.rPath.nativeElement.getTotalLength());
    // this.renderTextAnimation = true;
    setTimeout(() => {
      this.renderTextAnimation = false;
    }, 0);
  }

  animationDone(event) {
    // if (event.toState === false) {
    //   setTimeout(() => {
    //     this.renderTextAnimation = true;
    //   }, 500);
    // }
    // if (event.fromState === false && event.toState === true) {
    //   this.showCenter = false;
    // }
  }
  skipIntro() {
    // this.showCenter = false;
  }
}
