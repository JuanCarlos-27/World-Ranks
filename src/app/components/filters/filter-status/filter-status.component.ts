import { StatusOptions } from '@/interfaces/common.interface';
import { CountryDataService } from '@/services/country-data.service';
import { Component, Input, inject } from '@angular/core';

@Component({
  selector: 'filter-status',
  standalone: true,
  imports: [],
  templateUrl: './filter-status.component.html',
})
export class FilterStatusComponent {
  @Input({ required: true }) statusOptions: Array<{
    name: string;
    property: StatusOptions;
    selected: boolean;
  }> = [];

  private countryService = inject(CountryDataService);

  handleStatusSelect(selected: boolean, index: number) {
    this.statusOptions[index].selected = selected;

    const payload = this.statusOptions
      .filter(({ selected }) => selected)
      .map(({ property }) => property);

    this.countryService.filterByStatus(payload);
  }
}
