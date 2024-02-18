import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { SearchBarComponent } from '@/components/search-bar/search-bar.component';
import { TableCountriesComponent } from '@/components/table-countries/table-countries.component';
import { FiltersComponent } from '@/components/filters/filters.component';
import { CountryDataService } from '@/services/country-data.service';
import { Country } from '@/interfaces/country.interface';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SearchBarComponent, TableCountriesComponent, FiltersComponent],
  templateUrl: './home-page.component.html',
})
export default class HomePageComponent implements OnInit {
  private countryService = inject(CountryDataService);

  public tableHeaders = ['Flag', 'Name', 'Population', 'Area (km²)'];
  public countries = computed<Country[]>(() =>
    this.countryService.countryData()
  );

  ngOnInit(): void {
    this.countryService.getAllCountriesData().subscribe();
  }
}
