import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { NextStepComponent } from './next-step/next-step.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: '', redirectTo: "introduction", pathMatch: 'full' },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'nextstep', component: NextStepComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
