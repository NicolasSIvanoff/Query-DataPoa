import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBusComponent } from './page-bus.component';

describe('PageBusComponent', () => {
  let component: PageBusComponent;
  let fixture: ComponentFixture<PageBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
