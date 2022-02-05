import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../service/loading.service';

@Component({
  selector: 'app-my-progress',
  templateUrl: './my-progress.component.html',
  styleUrls: ['./my-progress.component.scss']
})
export class MyProgressComponent implements OnInit {
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
