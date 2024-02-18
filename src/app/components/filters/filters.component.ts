import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
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
})
export class FiltersComponent implements OnInit {
  private filterService = inject(FiltersService);

  public sortByOptions = this.filterService.sortByOptions;
  public regionOptions = this.filterService.regions;
  public statusOptions = this.filterService.statusOptions;

  ngOnInit(): void {}
}
