import { TestBed } from '@angular/core/testing';

import { QueryRouterBusService } from './query-router-bus.service';

describe('QueryRouterBusService', () => {
  let service: QueryRouterBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryRouterBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
