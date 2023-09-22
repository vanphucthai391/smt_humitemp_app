import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleChartComponent } from './google-chart.component';

describe('GoogleChartComponent', () => {
  let component: GoogleChartComponent;
  let fixture: ComponentFixture<GoogleChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleChartComponent]
    });
    fixture = TestBed.createComponent(GoogleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
