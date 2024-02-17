import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FiltersService {
  public sortByOptions = ['Area', 'Population', 'Capital'];

  public regions = [
    'Africa',
    'Americas',
    'Antarctic',
    'Asia',
    'Europe',
    'Oceania',
  ];

  public statusOptions = ['Member of the United Nations', 'Independent'];
}
