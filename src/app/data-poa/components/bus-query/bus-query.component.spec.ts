import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusQueryComponent } from './bus-query.component';

describe('BusQueryComponent', () => {
  let component: BusQueryComponent;
  let fixture: ComponentFixture<BusQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
