import { Options } from '@/interfaces/common.interface';
import { CountryDataService } from '@/services/country-data.service';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FilterRegionComponent } from './filter-region/filter-region.component';
import { FilterSortByComponent } from './filter-sort-by/filter-sort-by.component';
import { FilterStatusComponent } from './filter-status/filter-status.component';
import { FiltersService } from '@/services/filters.service';

@Component({
  selector: 'countries-filters',
  standalone: true,
  imports: [
    FilterRegionComponent,
    FilterSortByComponent,
    FilterStatusComponent,
  ],
  templateUrl: './filters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent implements OnInit {
  private countryService = inject(CountryDataService);
  private filterService = inject(FiltersService);

  public sortByOptions = this.filterService.sortByOptions;
  public regionOptions = this.filterService.regions;
  public statusOptions = this.filterService.statusOptions;

  ngOnInit(): void {}

  handleSortBy(sortBy: Options) {
    this.countryService.sortInfoBy(sortBy);
  }
}
