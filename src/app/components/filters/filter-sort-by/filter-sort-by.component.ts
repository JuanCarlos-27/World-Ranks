import { SortingOptions, SORT_DATA_BY } from '@/interfaces/common.interface';
import { CountryDataService } from '@/services/country-data.service';
import { TitleCasePipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'filter-sort-by',
  standalone: true,
  imports: [ReactiveFormsModule, TitleCasePipe],
  templateUrl: './filter-sort-by.component.html',
})
export class FilterSortByComponent {
  @Input({ required: true }) sortByOption: string[] = [];

  private countryService = inject(CountryDataService);
  public selectedSortBy = new FormControl<SortingOptions>(
    SORT_DATA_BY.POPULATION
  );

  handleSortBy() {
    this.countryService.sortInfoBy(this.selectedSortBy.value!);
  }
}
