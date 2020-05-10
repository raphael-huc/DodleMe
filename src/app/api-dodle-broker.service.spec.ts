import { TestBed } from '@angular/core/testing';

import { ApiDodleBrokerService } from './api-dodle-broker.service';

describe('ApiDodleBrokerService', () => {
  let service: ApiDodleBrokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDodleBrokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
