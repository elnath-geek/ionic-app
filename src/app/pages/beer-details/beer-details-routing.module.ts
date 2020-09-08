import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeerDetailsPage } from './beer-details.page';

const routes: Routes = [
  {
    path: '',
    component: BeerDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeerDetailsPageRoutingModule {}
