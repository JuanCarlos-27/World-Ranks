import { Component } from '@angular/core';
import { SearchBarComponent } from '@/components/search-bar/search-bar.component';
import { TableCountriesComponent } from '@/components/table-countries/table-countries.component';
import { FiltersComponent } from '@/components/filters/filters.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SearchBarComponent, TableCountriesComponent, FiltersComponent],
  templateUrl: './home-page.component.html',
})
export default class HomePageComponent {}
