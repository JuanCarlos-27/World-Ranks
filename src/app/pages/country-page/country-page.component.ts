import { Country } from '@/interfaces/country.interface';
import { CountryDataService } from '@/services/country-data.service';
import { DecimalPipe } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-page.component.html',
})
export default class CountryPageComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private countryDataService = inject(CountryDataService);

  public country = signal<Country | null>(null);

  public pills = signal<{ label: string; value: null | number }[]>([
    { label: 'Population', value: null },
    { label: 'Area (km2)', value: null },
  ]);

  public information = signal<{ label: string; value: null | string }[]>([
    {
      label: 'Capital',
      value: null,
    },
    {
      label: 'Subregion',
      value: null,
    },
    {
      label: 'Language',
      value: null,
    },
    {
      label: 'Currencies',
      value: null,
    },
    {
      label: 'Continents',
      value: null,
    },
  ]);

  public bordersFlags = signal<{ name: string; flag: string }[]>([]);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const { country } = params;
      if (!country) return;
      this.getCountry(country);
    });
  }

  getCountry(country: string) {
    this.countryDataService.getCountryByName(country).subscribe((data) => {
      this.country.set(data);
      this.builInformation();
      this.getFlagBordersCountry();
    });
  }

  builInformation() {
    const data = this.country();
    if (!data) return;

    this.pills.update(() => [
      { label: 'Population', value: data.population },
      { label: 'Area (km2)', value: data.area },
    ]);

    this.information.update(() => [
      {
        label: 'Capital',
        value: data.capital[0],
      },
      {
        label: 'Subregion',
        value: data.subregion,
      },
      {
        label: 'Language',
        value: Object.values(data.languages).join(', '),
      },
      {
        label: 'Currencies',
        value: Object.values(data.currencies)
          .map((c) => c.name)
          .join(', '),
      },
      {
        label: 'Continents',
        value: data.continents.join(', '),
      },
    ]);
  }

  getFlagBordersCountry() {
    const countries$ = this.country()?.borders.map((code) => {
      return this.countryDataService.getCountryFlagByCode(code);
    }) as any;

    forkJoin<{ name: string; flag: string }[]>(countries$).subscribe((data) => {
      this.bordersFlags.set(data);
    });
  }
}
