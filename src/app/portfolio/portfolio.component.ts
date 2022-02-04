import { Component, OnInit } from '@angular/core';
import { PageAnimation } from '../animation/page-animation';
import { AnimationService } from '../service/animation.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [PageAnimation]
})
export class PortfolioComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}
}
