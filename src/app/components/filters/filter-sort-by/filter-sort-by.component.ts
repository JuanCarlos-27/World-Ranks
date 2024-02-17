import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'filter-sort-by',
  standalone: true,
  imports: [],
  templateUrl: './filter-sort-by.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterSortByComponent {
  @Input({ required: true }) sortByOption: string[] = [];
}
