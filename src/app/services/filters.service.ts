import { StatusOptions } from '@/interfaces/common.interface';
import { Region } from '@/interfaces/country.interface';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FiltersService {
  public sortByOptions = ['area', 'population', 'capital'];

  public regions = [
    { name: Region.Africa, selected: true },
    { name: Region.Americas, selected: true },
    { name: Region.Asia, selected: true },
    { name: Region.Europe, selected: true },
    { name: Region.Oceania, selected: true },
    { name: Region.Antarctic, selected: true },
  ];

  public statusOptions: Array<{
    name: string;
    property: StatusOptions;
    selected: boolean;
  }> = [
    {
      name: 'Member of the United Nations',
      property: 'unMember',
      selected: false,
    },
    { name: 'Independent', property: 'independent', selected: false },
  ];
}
