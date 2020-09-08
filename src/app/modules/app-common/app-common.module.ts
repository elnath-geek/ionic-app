import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerComponent } from 'src/app/components/beer/beer.component';
import { IonicModule } from '@ionic/angular';
import { HighlightDirective } from 'src/app/directives/highlight.directive';
import { UpperPipe } from 'src/app/pipes/upper.pipe';



@NgModule({
  declarations: [
    BeerComponent,
    HighlightDirective,
    UpperPipe
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    BeerComponent,
    HighlightDirective,
    UpperPipe
  ]
})
export class AppCommonModule { }
