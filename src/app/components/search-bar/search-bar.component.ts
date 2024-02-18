import { CountryDataService } from '@/services/country-data.service';
import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'search-bar',
  standalone: true,
  imports: [NgTemplateOutlet, ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styles: ``,
})
export class SearchBarComponent {
  public searchControl = new FormControl('');

  private countryService = inject(CountryDataService);

  constructor() {
    this.searchControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => {
        if (value == null) return;
        this.countryService.filterBySearch(value);
      });
  }
}
