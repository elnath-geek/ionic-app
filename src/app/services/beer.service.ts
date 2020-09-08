import { Injectable } from '@angular/core';
import { Beer } from '../models/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  beers: Beer[] = [
    new Beer(1, 'malts', 'the best', false),
    new Beer(2, 'kirin', 'the happinest', false),
    new Beer(3, 'asahi', 'super dry', false)
  ]
  constructor() { }

  getBeers(): Beer[] {
    return this.beers
  }
  getBeer(id: number): Beer {
    return this.beers.find(b => b.id === id);
  }
}
