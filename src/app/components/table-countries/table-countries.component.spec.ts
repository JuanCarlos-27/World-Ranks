import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCountriesComponent } from './table-countries.component';

describe('TableCountriesComponent', () => {
  let component: TableCountriesComponent;
  let fixture: ComponentFixture<TableCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCountriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
