import {
  SortingOptions,
  SORT_DATA_BY,
  StatusOptions,
} from '@/interfaces/common.interface';
import { Country, Region } from '@/interfaces/country.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryDataService {
  private http = inject(HttpClient);
  private apiUrl = 'https://restcountries.com/v3.1';

  private originalData = signal<Country[]>([]);
  private _countryData = signal<Country[]>([]);
  public countryData = computed(() => this._countryData());

  getAllCountriesData(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/all`).pipe(
      tap((countries) => {
        this.originalData.set(countries);
        this._countryData.set(countries);
        this.sortInfoBy(SORT_DATA_BY.POPULATION);
        console.log(countries);
      })
    );
  }

  sortInfoBy(sortBy: SortingOptions) {
    const sortedData = this._countryData().sort((a, b) => {
      if (sortBy === SORT_DATA_BY.CAPITAL) {
        return a.capital[0]?.localeCompare(b.capital[0]);
      }
      if (a[sortBy] > b[sortBy]) return -1;
      if (a[sortBy] < b[sortBy]) return 1;
      return 0;
    });

    this._countryData.update(() => sortedData);
  }

  filterByRegion(regions: Region[]) {
    const filteredData = this.originalData().filter((country) =>
      regions.includes(country.region)
    );
    this._countryData.set(filteredData);
  }

  filterByStatus(status: StatusOptions[]) {
    const filteredData = this.originalData().filter((country) =>
      status.every((s) => country[s])
    );
    this._countryData.set(filteredData);
  }

  filterBySearch(search: string) {
    const filteredData = this.originalData().filter(
      (country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase()) ||
        country.subregion.toLowerCase().includes(search.toLowerCase()) ||
        country.region.toLowerCase().includes(search.toLowerCase())
    );
    this._countryData.set(filteredData);
  }

  resetFilters() {
    this._countryData.set(this.originalData());
  }
}
