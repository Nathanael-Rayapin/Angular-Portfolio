import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../service/loading.service';

@Component({
  selector: 'app-my-introduction',
  templateUrl: './my-introduction.component.html',
  styleUrls: ['./my-introduction.component.scss']
})
export class MyIntroductionComponent implements OnInit {
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