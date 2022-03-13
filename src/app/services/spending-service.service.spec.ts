import { TestBed } from '@angular/core/testing';

import { SpendingServiceService } from './spending-service.service';

describe('SpendingServiceService', () => {
  let service: SpendingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpendingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
