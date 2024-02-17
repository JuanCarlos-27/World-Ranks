import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'filter-region',
  standalone: true,
  imports: [],
  templateUrl: './filter-region.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterRegionComponent {
  @Input({ required: true }) regionOptions: string[] = [];
}
