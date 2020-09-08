import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeerDetailsPageRoutingModule } from './beer-details-routing.module';

import { BeerDetailsPage } from './beer-details.page';
import { AppCommonModule } from 'src/app/modules/app-common/app-common.module';

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    FormsModule,
    IonicModule,
    BeerDetailsPageRoutingModule
  ],
  declarations: [BeerDetailsPage]
})
export class BeerDetailsPageModule {}
