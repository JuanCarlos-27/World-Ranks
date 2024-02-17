import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'filter-status',
  standalone: true,
  imports: [],
  templateUrl: './filter-status.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterStatusComponent {
  @Input({ required: true }) statusOptions: string[] = [];
}
