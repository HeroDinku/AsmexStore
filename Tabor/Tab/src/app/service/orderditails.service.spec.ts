import { TestBed } from '@angular/core/testing';

import { OrderditailsService } from './orderditails.service';

describe('OrderditailsService', () => {
  let service: OrderditailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderditailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
