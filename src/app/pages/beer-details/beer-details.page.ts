import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.page.html',
  styleUrls: ['./beer-details.page.scss'],
})
export class BeerDetailsPage implements OnInit {
  id: number;
  beer: Beer;

  constructor(
    private route: ActivatedRoute,
    private beerService: BeerService
  ) {
    this.id = parseInt( this.route.snapshot.paramMap.get('id') );
  }

  ngOnInit() {
    this.beer = this.beerService.getBeer(this.id);
  }

}
