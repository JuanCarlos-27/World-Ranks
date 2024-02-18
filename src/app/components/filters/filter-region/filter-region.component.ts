import { Region } from '@/interfaces/country.interface';
import { CountryDataService } from '@/services/country-data.service';
import { TitleCasePipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'filter-region',
  standalone: true,
  imports: [TitleCasePipe, ReactiveFormsModule],
  templateUrl: './filter-region.component.html',
})
export class FilterRegionComponent {
  @Input({ required: true }) regionOptions: Array<{
    name: Region;
    selected: boolean;
  }> = [];

  private countryService = inject(CountryDataService);

  handleRegionSelect(selected: boolean, index: number) {
    this.regionOptions[index].selected = selected;

    const payload = this.regionOptions
      .filter(({ selected }) => selected)
      .map(({ name }) => name);

    this.countryService.filterByRegion(payload);
  }
}
