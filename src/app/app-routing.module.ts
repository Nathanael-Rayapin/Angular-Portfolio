import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyIntroductionComponent } from './my-introduction/my-introduction.component';
import { MyProgressComponent } from './my-progress/my-progress.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';

const routes: Routes = [
  { path: '', redirectTo: "introduction", pathMatch: 'full' },
  { path: 'introduction', component: MyIntroductionComponent },
  { path: 'portfolio', component: MyPortfolioComponent },
  { path: 'nextstep', component: MyProgressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
