import { Component, OnInit } from '@angular/core';
import { PageAnimation } from '../animation/page-animation';

@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.scss'],
  animations: [PageAnimation]
})
export class MyPortfolioComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}
}
