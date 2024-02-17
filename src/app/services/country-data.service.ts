import { Options, SORT_DATA_BY } from '@/interfaces/common.interface';
import { Country } from '@/interfaces/country.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryDataService {
  private http = inject(HttpClient);

  private countryData = signal<Country[]>([]);

  getAllCountriesData(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.com/v3.1/all').pipe(
      tap((countries) => {
        this.countryData.set(countries);
        this.sortInfoBy(SORT_DATA_BY.POPULATION);
      })
      // catchError((error) => error)
    );
  }

  sortInfoBy(sortBy: Options) {
    const sortedData = this.countryData().sort((a, b) => {
      if (a[sortBy] > b[sortBy]) return -1;
      if (a[sortBy] < b[sortBy]) return 1;
      return 0;
    });

    this.countryData.update(() => sortedData);
  }
}
