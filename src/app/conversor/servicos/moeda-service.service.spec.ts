import { TestBed } from '@angular/core/testing';

import { MoedaServiceService } from './moeda-service.service';

describe('MoedaServiceService', () => {
  let service: MoedaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoedaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
