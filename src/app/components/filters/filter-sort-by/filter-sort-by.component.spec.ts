import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSortByComponent } from './filter-sort-by.component';

describe('FilterSortByComponent', () => {
  let component: FilterSortByComponent;
  let fixture: ComponentFixture<FilterSortByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterSortByComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterSortByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
