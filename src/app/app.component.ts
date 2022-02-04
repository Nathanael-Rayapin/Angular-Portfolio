import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { PageAnimation } from './animation/page-animation';
import { slideInAnimation } from './animation/router-animation';
import { AnimationService } from './service/animation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [PageAnimation]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Portfolio';
  // Subscription Animation Navbar
  defaultSubNavIntro: Subscription;
  defaultSubNavPortfo: Subscription;
  defaultSubNavNext: Subscription;

  // Subscription Animation Title
  defaultSubTitleIntro: Subscription;
  defaultSubTitlePortfo: Subscription;
  defaultSubTitleNext: Subscription;

  // Value Animation Navbar
  defaultNavIntro: string = 'istatic';
  defaultNavPortfo: string = 'pstatic';
  defaultNavNext: string = 'nstatic';

  // Value Animation Title
  defaultTitleIntro: string = 'istart';
  defaultTitlePortfo: string = 'pstart';
  defaultTitleNext: string = 'nstart';

  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {
    // Nav
    this.defaultSubNavIntro = this.animationService.defaultNavIntro.subscribe(
      (inavbar: string) => {
        this.defaultNavIntro = inavbar;
      }
    );

    this.defaultSubNavPortfo = this.animationService.defaultNavPortfo.subscribe(
      (pnavbar: string) => {
        this.defaultNavPortfo = pnavbar;
      }
    );

    this.defaultSubNavNext = this.animationService.defaultNavNext.subscribe(
      (nnavbar: string) => {
        this.defaultNavNext = nnavbar;
      }
    );
    // Title
    this.defaultSubTitleIntro = this.animationService.defaultTitleIntro.subscribe(
      (ititle: string) => {
        this.defaultTitleIntro = ititle;
      }
    );

    this.defaultSubTitlePortfo = this.animationService.defaultTitlePortfo.subscribe(
      (ptitle: string) => {
        this.defaultTitlePortfo = ptitle;
      }
    );

    this.defaultSubTitleNext = this.animationService.defaultTitleNext.subscribe(
      (ntitle: string) => {
        this.defaultTitleNext = ntitle;
      }
    );
  }

  toIntroState() {
    this.animationService.toChangeIntro();
  }

  toPortfoState() {
    this.animationService.toChangePortfo();
  }

  toNextState() {
    this.animationService.toChangeNext();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

  ngOnDestroy(): void {
    // Nav
    this.defaultSubNavIntro.unsubscribe();
    this.defaultSubNavPortfo.unsubscribe();
    this.defaultSubNavNext.unsubscribe();

    // Title
    this.defaultSubTitleIntro.unsubscribe();
    this.defaultSubTitlePortfo.unsubscribe();
    this.defaultSubTitleNext.unsubscribe();
  }
}
