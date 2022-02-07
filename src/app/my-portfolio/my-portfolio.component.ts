import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../service/loading.service';

@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.scss']
})
export class MyPortfolioComponent implements OnInit {
  // Loading
  loading$ = this.loader.loading$;

  constructor(public loader: LoadingService) { }

  ngOnInit(): void {
    this.loader.show();
    setTimeout(() => {
      this.loader.hide();
    }, 1000);
  }
}
