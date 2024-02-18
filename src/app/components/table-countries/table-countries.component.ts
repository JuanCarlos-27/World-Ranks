import { Country } from '@/interfaces/country.interface';
import { DecimalPipe, NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'countries-table',
  standalone: true,
  imports: [DecimalPipe, NgTemplateOutlet, RouterLink],
  templateUrl: './table-countries.component.html',
})
export class TableCountriesComponent {
  @Input({ required: true }) countries: Country[] = [];
  @Input({ required: true }) headers: string[] = [];
}
