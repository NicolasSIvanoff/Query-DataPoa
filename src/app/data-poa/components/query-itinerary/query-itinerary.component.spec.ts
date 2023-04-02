import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryItineraryComponent } from './query-itinerary.component';

describe('QueryItineraryComponent', () => {
  let component: QueryItineraryComponent;
  let fixture: ComponentFixture<QueryItineraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryItineraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
