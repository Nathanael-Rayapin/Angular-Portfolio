import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-my-cv',
  templateUrl: './view-my-cv.component.html',
  styleUrls: ['./view-my-cv.component.scss']
})
export class ViewMyCvComponent implements OnInit {
  pdfSrc = "../../assets/curriculum/Developpeur_Web.pdf";

  constructor() { }

  ngOnInit(): void {
  }
}
